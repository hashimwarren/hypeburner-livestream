"use client";

import dynamic from "next/dynamic";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
});

interface MuxPlayerClientProps {
  playbackId: string;
  className?: string;
}

export default function MuxPlayerClient({ playbackId, className }: MuxPlayerClientProps) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      className={className}
    />
  );
}
