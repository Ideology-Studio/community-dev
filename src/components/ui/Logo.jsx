
export default function Logo({ className = "w-8 h-8", fill = "currentColor" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="2" y="2" width="20" height="20" rx="7" fill={fill} />
            <rect x="6.5" y="9" width="4" height="4" rx="1.5" fill="white" />
            <rect x="13.5" y="9" width="4" height="4" rx="1.5" fill="white" />
        </svg>
    );
}
