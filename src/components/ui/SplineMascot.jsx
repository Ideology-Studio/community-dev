"use client";

import Spline from '@splinetool/react-spline';
import { useRef, useEffect, useState } from 'react';

export default function SplineMascot() {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        // Spline renders at ~640px wide internally.
        // We measure the container and compute a scale ratio.
        const SPLINE_NATIVE_WIDTH = 640;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const containerWidth = entry.contentRect.width;
                if (containerWidth < SPLINE_NATIVE_WIDTH) {
                    setScale(containerWidth / SPLINE_NATIVE_WIDTH);
                } else {
                    setScale(1);
                }
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            {/* Mic hint badge */}
            <style>{`
                @keyframes micPulse {
                    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(163, 230, 53, 0.5); }
                    50%       { transform: scale(1.08); box-shadow: 0 0 0 10px rgba(163, 230, 53, 0); }
                }
                @keyframes micBadgeFadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes micWave {
                    0%, 100% { opacity: 0.4; transform: scaleY(0.6); }
                    50%      { opacity: 1;   transform: scaleY(1.2); }
                }
                .mic-hint-badge {
                    position: absolute;
                    bottom: calc(18% - 60px);
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(10, 10, 15, 0.75);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border: 1px solid rgba(163, 230, 53, 0.35);
                    border-radius: 50px;
                    padding: 10px 20px 10px 14px;
                    cursor: pointer;
                    animation: micBadgeFadeIn 0.7s ease 0.8s both;
                    white-space: nowrap;
                    z-index: 10;
                    text-decoration: none;
                }
                .mic-hint-badge:hover {
                    border-color: rgba(163, 230, 53, 0.7);
                    background: rgba(10, 10, 15, 0.9);
                }
                .mic-hint-icon {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #a3e635, #65a30d);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: micPulse 2s ease-in-out infinite;
                    flex-shrink: 0;
                }
                .mic-hint-icon svg {
                    width: 16px;
                    height: 16px;
                    fill: #000;
                }
                .mic-hint-text {
                    display: flex;
                    flex-direction: column;
                    gap: 1px;
                }
                .mic-hint-label {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #a3e635;
                    line-height: 1;
                }
                .mic-hint-sub {
                    font-size: 12px;
                    color: rgba(255,255,255,0.65);
                    line-height: 1.3;
                }
                .mic-waves {
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    margin-left: 4px;
                }
                .mic-waves span {
                    display: block;
                    width: 3px;
                    border-radius: 2px;
                    background: #a3e635;
                    animation: micWave 1.1s ease-in-out infinite;
                }
                .mic-waves span:nth-child(1) { height: 8px;  animation-delay: 0s; }
                .mic-waves span:nth-child(2) { height: 14px; animation-delay: 0.15s; }
                .mic-waves span:nth-child(3) { height: 10px; animation-delay: 0.3s; }
                .mic-waves span:nth-child(4) { height: 16px; animation-delay: 0.1s; }
                .mic-waves span:nth-child(5) { height: 8px;  animation-delay: 0.25s; }
            `}</style>

            <div className="mic-hint-badge">
                {/* Mic icon */}
                <div className="mic-hint-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm-6.5 9a.75.75 0 0 1 .75.75 5.75 5.75 0 0 0 11.5 0 .75.75 0 0 1 1.5 0 7.25 7.25 0 0 1-6.5 7.2V20h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5H11v-2.05A7.25 7.25 0 0 1 4.75 11a.75.75 0 0 1 .75-.75v-.75z" />
                    </svg>
                </div>

                {/* Text */}
                <div className="mic-hint-text">
                    <span className="mic-hint-label">Parla con JohnnyDev</span>
                    <span className="mic-hint-sub">Chiedimi qualcosa…</span>
                </div>

                {/* Animated sound waves */}
                <div className="mic-waves">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'center center',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Spline
                    scene="https://prod.spline.design/95YV0-SvNokzBgy2/scene.splinecode"
                />
            </div>
        </div>
    );
}
