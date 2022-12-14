import {MutableRefObject, useEffect, useState} from "react";

function useDraggable(el: MutableRefObject<any>) {
    const [{dx, dy}, setOffset] = useState({dx: 0, dy: 0});
    useEffect(() => {
        const handleMouseDown = (event: { pageX: number; pageY: number; }) => {
            const startX = event.pageX - dx;
            const startY = event.pageY - dy;
            const handleMouseMove = (event: any) => {
                const newDx = event.pageX - startX || dx;
                const newDy = event.pageY - startY || dy;
                setOffset({dx: newDx, dy: newDy});
            };
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", handleMouseMove);
            }, {once: true});
        };
        el.current.addEventListener("mousedown", handleMouseDown);
        return () => {
            el.current.removeEventListener("mousedown", handleMouseDown);
        };
    }, [dx, dy]);

    useEffect(() => {
        el.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }, [dx, dy]);
}

export default useDraggable;