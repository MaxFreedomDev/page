"use client";

import { useEffect, useRef } from "react";
import { assetPath } from "./assetPath";

export function ScrollFaller() {
  const figureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const figure = figureRef.current;
    const landingStack = document.querySelector<HTMLElement>("[data-landing-stack]");
    const landedReader = document.querySelector<HTMLElement>("[data-landed-reader]");

    if (!figure || !landingStack || !landedReader) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scrollRange = Math.max(
        1,
        document.documentElement.scrollHeight - viewportHeight,
      );
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
      const figureWidth = figure.getBoundingClientRect().width;
      const landingRect = landingStack.getBoundingClientRect();

      const mobile = viewportWidth < 760;
      const pathCenter = mobile ? 0.73 : 0.86;
      const pathSwing = mobile ? 0.065 : 0.045;
      const baseX =
        viewportWidth *
          (pathCenter + Math.sin(progress * Math.PI * 5.5) * pathSwing) -
        figureWidth / 2;
      const baseY =
        viewportHeight *
        (mobile ? 0.12 + progress * 0.48 : 0.06 + progress * 0.55);

      const landingProgress = Math.min(
        1,
        Math.max(0, (viewportHeight * 1.12 - landingRect.top) / (viewportHeight * 0.58)),
      );
      const targetX =
        landingRect.left + landingRect.width * (mobile ? 0.66 : 0.78) - figureWidth / 2;
      const targetY = landingRect.top + (mobile ? 12 : -8);
      const easedLanding = landingProgress * landingProgress * (3 - 2 * landingProgress);
      const x = baseX + (targetX - baseX) * easedLanding;
      const y = baseY + (targetY - baseY) * easedLanding;
      const rotation =
        -7 +
        progress * 335 +
        Math.sin(progress * Math.PI * 8) * 13 -
        easedLanding * 320;
      const scale = (mobile ? 0.66 : 0.76) - progress * 0.08;

      figure.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${scale})`;
      figure.style.opacity = String(
        Math.min(
          0.92,
          Math.max(0, 1 - Math.max(0, landingProgress - 0.78) / 0.22),
        ),
      );
      landedReader.style.opacity = String(
        Math.min(1, Math.max(0, (landingProgress - 0.62) / 0.3)),
      );
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div className="scroll-faller" ref={figureRef} aria-hidden="true">
      <img
        alt=""
        draggable="false"
        height="1536"
        src={assetPath("/falling-reader-cutout-v2.png")}
        width="1024"
      />
    </div>
  );
}
