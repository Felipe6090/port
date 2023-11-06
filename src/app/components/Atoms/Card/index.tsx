"use client";

import Link from "next/link";
import { useState } from "react";

interface ICard {
  href: string;
  title?: string;
  description?: string;
  size?: "default" | "lg";
}

export default function Card({
  href,
  title,
  description,
  size = "default",
}: ICard) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      className="h-32 w-44 relative cursor-pointer data-[size=lg]:w-56"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      data-hover={hover}
      data-size={size}
    >
      <div className="absolute inset-0 bg-gray-400 opacity-25 rounded-lg shadow-2xl"></div>

      <div className="absolute inset-0 transform hover:scale-150 transition duration-300">
        <div className="h-full w-full bg-greyblack rounded-lg shadow-2xl flex items-end justify-end p-4">
          {hover ? (
            <span className="text-white text-xs">
              {description!.substring(0, 70)}
            </span>
          ) : (
            <span className="text-white">{title}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
