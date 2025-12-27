"use client";

import Image from "next/image";
import { useState } from "react";

import { HeartIcon } from "@/components/icons";

export function LikeButton({
  defaultLiked = false,
  className,
  likedClassName,
  unlikedClassName,
  iconClassName,
}: {
  defaultLiked?: boolean;
  className?: string;
  likedClassName?: string;
  unlikedClassName?: string;
  iconClassName?: string;
}) {
  const [liked, setLiked] = useState(defaultLiked);

  const iconContainerClassName = iconClassName ?? "w-[19px] h-[19px]";
  const buttonClassName = `${className ?? ""} ${
    liked ? likedClassName ?? "text-interactive-primary" : unlikedClassName ?? "text-content-black"
  }`.trim();

  return (
    <button
      type="button"
      aria-pressed={liked}
      className={`${buttonClassName} inline-flex items-center justify-center leading-none`.trim()}
      onClick={() => setLiked((v) => !v)}
    >
      <span className={`inline-flex items-center justify-center ${iconContainerClassName}`}>
        {liked ? (
          <Image
            src="/images/heart-selected.svg"
            alt="Heart"
            width={20}
            height={17}
            className="w-full h-full object-contain"
          />
        ) : (
          <HeartIcon className="w-full h-full" />
        )}
      </span>
    </button>
  );
}
