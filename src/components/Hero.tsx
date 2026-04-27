"use client";

import ScrollyVideo from "@/components/ScrollyVideo";
import Overlay from "@/components/Overlay";

export default function Hero() {
  return (
    <div className="relative" id="home">
      <ScrollyVideo src="/hero-video-smooth.mp4" mobileSrc="/hero-video-mobile.mp4">
        {(progress: any) => <Overlay scrollYProgress={progress} />}
      </ScrollyVideo>
    </div>
  );
}
