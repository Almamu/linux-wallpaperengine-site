//
// Modified from https://dev.to/mattlewandowski93/lazy-loaded-video-component-in-react-22dp
//
import { useCallback, useEffect } from 'react';

import { useIsVisible } from '../../hooks/use-is-visible';

type VideoComponentProps = {
  src: string;
  poster?: string;
  className?: string;
};
export const Video = ({ src, poster, className }: VideoComponentProps) => {
  const { isVisible, targetRef: videoRef } = useIsVisible<HTMLVideoElement>(
    {
      root: null,
      rootMargin: '200px',
      threshold: 0.1,
    },
    false
  );

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      await videoRef.current?.play();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      // do nothing
    }
  }, [videoRef]);

  const stopVideoOnMove = useCallback(() => {
    try {
      videoRef.current?.pause();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      // do nothing
    }
  }, [videoRef]);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      autoPlay={false}
      preload="none"
      playsInline
      poster={isVisible ? poster : undefined}
      className={className}>
      <source src={src} type="video/webm" />
      Your browser does not support the video tag. Please try viewing this page
      in a modern browser.
    </video>
  );
};
