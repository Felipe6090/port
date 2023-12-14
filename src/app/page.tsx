import Link from "next/link";
import Card from "./components/Atoms/Card";
import { DefaultButton } from "./components/Atoms/DefaultButton";

export default function Home() {
  return (
    <main className="lg:flex lg:max-h-[90vh] justify-between lg:h-screen">
      <section className="flex flex-col justify-between min-w-1/2 px-6 lgmax:gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-4xl">Oii! meu nome é</p>
          <h3 className="text-5xl font-semibold">Felipe Borges Vieira</h3>
        </div>

        <div>
          <h2 className="">
            Desenvolvedor focado em <b>Typescript</b>
          </h2>
          <h3 className="">
            trabalhando como
            <b> Full-Stack (laravel e angular)</b>
          </h3>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-semibold">Skills:</span>

          <div className="grid grid-cols-3 gap-2 text-lg pl-3">
            <h1>React</h1>
            <h2>Angular</h2>
            <h1>PHP</h1>
            <h2>Next</h2>
            <h3>Flutter</h3>
            <h1>Firebase</h1>
          </div>
        </div>

        <div className="flex lg:flex-col justify-between lg:gap-4">
          <div>
            <span>Contato:</span>

            <div className="flex mdmax:flex-col gap-8 mdmax:gap-3 mdmax:mt-3">
              <span>felipevieira962@gmail.com</span>
              <span>+ 55 ( 27 ) 99651-4712</span>
            </div>
          </div>

          <div className="flex mdmax:flex-col gap-4">
            <DefaultButton
              text="Contato"
              color="orange"
              href="https://wa.me//5527996514712?text=Olá%20gostaria%20de%20pedir%20um%20orçamento"
            />

            <DefaultButton text="projetos" href="/projects" />
          </div>
        </div>

        <footer className="bg-greyblack -mx-6 flex lg:h-44">
          <div className="flex flex-col justify-around text-white p-3 underline underline-offset-8 lgmax:py-10 lgmax:gap-3">
            <span className="font-semibold text-xl">Sobre Mim:</span>

            <span>Estudo principalmente pela Alura e RocktSeat</span>
            <span>Estou no 5° semestre de engenharia de software</span>
            <span>No momento estou lendo: Mona Lisa Overdrive</span>
          </div>
        </footer>
      </section>

      <aside className="flex flex-col justify-around min-w-1/2 px-6 lgmax:py-5 lgmax:gap-4 bg-aside items-center">
        <h3>
          Faça sua<b>{" "}SPA, Desktop e Mobile apps{" "}</b>
          com<b>{" "}Design Systems{" "}</b>
          incríveis
        </h3>

        <span>Alguns dos meus trabalhos:</span>

        <div className="grid grid-cols-2 gap-10 lgmax:w-full lgmax:justify-items-center smmax:grid-cols-1">
          <Card href="/projects" title="Titulo" description="Descrição" />
          <Card href="/projects" title="Titulo" description="Descrição" />
          <Card href="/projects" title="Titulo" description="Descrição" />
          <Card href="/projects" title="Titulo" description="Descrição" />
        </div>

        <p>
          Sou apaixonado pelo processo de criação de aplicações do UX até o
          deploy
        </p>

        <Link href="https://github.com/Felipe6090/port" legacyBehavior>
          <a target="blank" className="font-semibold">
            Olhar o desenvolvimento deste portifólio
          </a>
        </Link>
      </aside>
    </main>
  );
}
