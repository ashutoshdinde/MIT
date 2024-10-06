import * as React from "react";

const RedBallSprite = ({ styles, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={155.084}
        height={89.213}
        viewBox="-0.35 -0.453 155.084 89.213"
        style={styles}
        onClick={onClick}
    >
        <g strokeWidth={1.155}>
            <circle cx="77.5" cy="44.5" r="40" fill="#F44336" />
            <path
                fill="#FFF"
                d="M60 40c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"
            />
            <path
                fill="#272525"
                d="M77.5 30c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"
            />
            <path
                fill="#FFF"
                d="M90 60c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"
            />
            <path
                fill="#272525"
                d="M50 60c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"
            />
        </g>
    </svg>
);

export default RedBallSprite;
