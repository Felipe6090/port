import Link from "next/link";

import { DefaultButton } from "../Atoms/DefaultButton";

export default function Header() {
  return (
    <header className="flex flex-wrap min-w-full h-[10vh] md:flex-nowrap md:px-6 items-center justify-between px-6">
      <Link href="/" className="">
        <span className="font-semibold text-xl">{`<vieira/>`}</span>
      </Link>

      <nav className="hidden md:visible md:flex min-w-[70%] justify-end md:gap-10">
        <Link href="/">Home</Link>

        <Link href="/projects">Projetos</Link>
      </nav>

      <DefaultButton
        color="white"
        text="Iniciar Chat"
        href="https://wa.me//5527996514712?text=Olá%20gostaria%20de%20pedir%20um%20orçamento"
        className="ml-3"
      />
    </header>
  );
}
