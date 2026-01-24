import { useEffect, useState } from "react";
import deercursorGif from "../../assets/images/cursor.gif";

const TRAIL_LENGTH = 10;

const DeerCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });

            setTrail(prev => {
                const updated = [{ x: e.clientX, y: e.clientY }, ...prev];
                return updated.slice(0, TRAIL_LENGTH);
            });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <>
            {/* ✨ Continuous trail */}
            {trail.map((p, i) => (
                <span
                    key={i}
                    className="cursor-trail"
                    style={{
                        transform: `translate(${p.x}px, ${p.y}px)`,
                        opacity: 1 - i / TRAIL_LENGTH,
                        scale: 1 - i * 0.07,
                    }}
                />
            ))}

            {/* 🦌 Deer */}
            <img
                src={deercursorGif}
                alt="deer-cursor"
                className="deer-cursor"
                style={{
                    transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
                }}
            />
        </>
    );
};

export default DeerCursor;
