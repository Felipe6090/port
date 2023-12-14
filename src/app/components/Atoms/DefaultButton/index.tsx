import Link from "next/link";

interface IButton {
  text: string;
  color?: "white" | "orange";
  href: string;
  className?: string;
}

export function DefaultButton({
  text,
  color = "white",
  href,
  className,
}: IButton) {
  return (
    <Link href={href} legacyBehavior>
      <a
        target={href.slice(0, 1) === "/" ? "" : "blank"}
        className={`h-11 w-32 flex justify-center items-center text text-sm font-black ${className} ${
          color === "white" ? "border border-black" : "text-white bg-orange"
        }`}
      >
        {text}
      </a>
    </Link>
  );
}
