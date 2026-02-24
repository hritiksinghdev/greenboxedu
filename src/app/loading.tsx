"use client";
import { useEffect, useState } from "react";

export default function Loading() {
    const [infinite, setInfinite] = useState(false);

    useEffect(() => {
        const nav = navigator as any;
        if (nav.connection) {
            const type = nav.connection.effectiveType;
            if (type === "2g" || type === "slow-2g") {
                setInfinite(true);
            }
        }
    }, []);

    return (
        <div className="loading-screen">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/greenbox-mark.svg"
                alt="Loading..."
                className={`bounce-logo ${infinite ? "infinite" : ""}`}
            />
        </div>
    );
}
