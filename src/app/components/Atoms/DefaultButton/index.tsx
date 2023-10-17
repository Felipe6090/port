interface IButton {
  text: string;
}

export function DefaultButton({ text }: IButton) {
  return (
    <button className={`flex items-center min-w-fit border border-stone-950 p-2`}>
      {text}
    </button>
  );
}
