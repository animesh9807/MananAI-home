import React, { useEffect, useRef } from 'react';

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);
  const currentOpacityRef = useRef<number>(0);

  const cancelActiveAnimation = () => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  };

  const fadeTo = (targetOpacity: number, durationMs: number, onComplete?: () => void) => {
    cancelActiveAnimation();

    const video = videoRef.current;
    if (!video) return;

    const startOpacity = currentOpacityRef.current;
    const opacityDiff = targetOpacity - startOpacity;
    if (Math.abs(opacityDiff) < 0.001) {
      currentOpacityRef.current = targetOpacity;
      video.style.opacity = targetOpacity.toString();
      if (onComplete) onComplete();
      return;
    }

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const newOpacity = startOpacity + opacityDiff * progress;

      currentOpacityRef.current = newOpacity;
      if (videoRef.current) {
        videoRef.current.style.opacity = newOpacity.toString();
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        animFrameRef.current = null;
        if (onComplete) onComplete();
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const fadeIn = () => {
    fadingOutRef.current = false;
    fadeTo(1, 500);
  };

  const fadeOut = () => {
    fadingOutRef.current = true;
    fadeTo(0, 500);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = "0";
    currentOpacityRef.current = 0;

    const handleLoadedData = () => {
      video.play().catch(() => {});
      fadeIn();
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      const timeLeft = video.duration - video.currentTime;

      if (timeLeft <= 0.55 && !fadingOutRef.current) {
        fadeOut();
      }
    };

    const handleEnded = () => {
      cancelActiveAnimation();
      currentOpacityRef.current = 0;
      if (videoRef.current) {
        videoRef.current.style.opacity = "0";
      }

      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play().then(() => {
          fadeIn();
        }).catch(() => {});
      }, 100);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 2) {
      video.play().catch(() => {});
      fadeIn();
    }

    return () => {
      cancelActiveAnimation();
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover translate-y-[17%]"
      />
      {/* Dark cinematic vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black pointer-events-none" />
    </div>
  );
};
