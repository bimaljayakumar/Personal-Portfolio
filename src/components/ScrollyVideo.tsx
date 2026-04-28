"use client";

import { useScroll, useSpring, useTransform, motion, MotionValue } from "framer-motion";

function BlackFade({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  return <motion.div style={{ opacity }} className="absolute inset-0 bg-black z-[5] pointer-events-none" />;
}
import { useEffect, useRef, ReactNode } from "react";

interface ScrollyVideoProps {
  src: string;
  mobileSrc?: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyVideo({ src, mobileSrc, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const lerpTimeRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    damping: 100,
    stiffness: 2000,
    mass: 0.05,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tick = () => {
      if (video.readyState >= 2 && video.duration) {
        const target = scrollYProgress.get() * video.duration;
        lerpTimeRef.current += (target - lerpTimeRef.current) * 0.3;

        if (Math.abs(lerpTimeRef.current - video.currentTime) > 0.001) {
          video.currentTime = lerpTimeRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafRef.current); };
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        >
          {mobileSrc && <source src={mobileSrc} media="(max-width: 768px)" type="video/mp4" />}
          <source src={src} type="video/mp4" />
        </video>
        <BlackFade scrollYProgress={springScroll} />
        {children && children(springScroll)}
      </div>
    </div>
  );
}
