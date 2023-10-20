import Link from "next/link";

import { DefaultButton } from "../Atoms/DefaultButton";

export default function Header() {
  return (
    <header className="flex min-w-full items-center justify-between px-6 py-4">
      <Link href="/">
        <span className="font-semibold text-xl">{`< vieira />`}</span>
      </Link>

      <nav className="flex min-w-[70%] justify-end gap-10">
        <Link href="/">Home</Link>

        <Link href="/projects">Projetos</Link>
      </nav>

      <DefaultButton color="white" text="Iniciar Chat" />
    </header>
  );
}
