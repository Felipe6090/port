import Link from "next/link";

interface IButton {
  text: string;
  color?: "white" | "orange";
  href: string;
}

export function DefaultButton({ text, color = "white", href }: IButton) {
  return (
    <Link href={href}>
      <button
        className={`h-11 w-32 text-center text-sm font-black ${
          color === "white"
            ? " border border-stone-950"
            : "text-white bg-orange"
        }`}
      >
        {text}
      </button>
    </Link>
  );
}
