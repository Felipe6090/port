interface IButton {
  text: string;
  color: "white" | "orange"
}

export function DefaultButton({ text, color }: IButton) {
  return (
    <button
      className={`h-12 w-36 text-center text-sm font-black ${ color === "white" ? " border border-stone-950" : "text-white bg-orange"}`}
    >
      {text}
    </button>
  );
}
