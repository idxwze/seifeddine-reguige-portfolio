"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: 20px accent ring that tracks the pointer, grows to 46px on
 * hovering interactive elements, and shrinks to 0.8x on mousedown.
 * Gracefully degrades — on coarse-pointer (touch) devices the default cursor
 * is left intact and this element is never shown.
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on fine-pointer (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide the system cursor globally
    document.documentElement.style.cursor = "none";

    let x = -100;
    let y = -100;
    let scale = 1;

    function applyTransform() {
      if (!cursor) return;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
    }

    function handleMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
      applyTransform();
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!cursor || !target.closest) return;
      if (target.closest("a, button, [role='button']")) {
        cursor.style.width = "46px";
        cursor.style.height = "46px";
        cursor.style.background = "rgba(198, 113, 57, 0.18)";
      }
    }

    function handleOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!cursor || !target.closest) return;
      if (target.closest("a, button, [role='button']")) {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.background = "transparent";
      }
    }

    function handleDown() {
      scale = 0.8;
      applyTransform();
    }

    function handleUp() {
      scale = 1;
      applyTransform();
    }

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        border: "2px solid var(--color-accent)",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-100px, -100px)",
        transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease",
      }}
    />
  );
}
