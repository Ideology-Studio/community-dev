"use client";

// --- HACK TO CAPTURE SPLINE'S INTERNAL MEDIA STREAM ---
export const streamState = { capturedSplineStream: null };

if (typeof window !== 'undefined' && navigator.mediaDevices) {
    const originalGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = async (constraints) => {
        const stream = await originalGetUserMedia(constraints);
        if (constraints && constraints.audio) {
            streamState.capturedSplineStream = stream;
            // Mute the audio track immediately so Spline doesn't hear anything by default
            stream.getAudioTracks().forEach(track => {
                track.enabled = false;
            });
            console.log("Spline's internal media stream captured and muted early.");
        }
        return stream;
    };
}
// --------------------------------------------------------
