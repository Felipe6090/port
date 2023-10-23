import Card from "./components/Atoms/Card";
import { DefaultButton } from "./components/Atoms/DefaultButton";

export default function Home() {
  return (
    <main className="flex max-h-[90vh] justify-between h-screen">
      <section className="flex flex-col justify-between min-w-1/2 px-6">
        <div className="flex flex-col gap-2">
          <p className="text-5xl">Oii! meu nome é</p>
          <h3 className="text-5xl font-semibold">Felipe Borges Vieira</h3>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="flex gap-1">
            Desenvolvedor<p className="font-semibold">Typescript</p>
          </h2>
          <h3 className="flex gap-1">
            focado em <p className="font-semibold">front-end desde 2020</p>
          </h3>
        </div>

        <div className="flex gap-4">
          <DefaultButton text="Contato" color="orange" />
          <DefaultButton text="projetos" color="white" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-3xl font-semibold">Skills:</span>

          <div className="grid grid-cols-3 gap-2 text-lg pl-3">
            <h1>React</h1>
            <h2>Angular</h2>
            <h1>PHP</h1>
            <h2>Next</h2>
            <h3>Flutter</h3>
            <h1>Firebase</h1>
          </div>
        </div>

        <div>
          <span>Contato:</span>

          <div>
            <span>felipevieira962@gmail.com</span>
            <span>+ 55 ( 27 ) 99651-4712</span>
          </div>
        </div>

        <footer className="bg-greyblack -mx-6 flex h-48">
          <div className="flex flex-col justify-around text-white p-3 underline underline-offset-8">
            <span className="font-semibold text-2xl">Sobre Mim:</span>

            <span>Estudo principalmente pela Alura e RocktSeat</span>
            <span>Estou no 5° semestre de engenharia de software</span>
            <span>No momento estou lendo: Mona Lisa Overdrive</span>
          </div>
        </footer>
      </section>

      <aside className="flex flex-col justify-around min-w-1/2 px-6 bg-aside items-center">
        <h3 className="flex gap-1">
          Faça sua<p className="font-semibold">SPA, Desktop e Mobile apps</p>{" "}
          com <p className="font-semibold">Design Systems</p>
          incríveis
        </h3>

        <span>Alguns dos meus trabalhos:</span>

        <div className="grid grid-cols-2 gap-20">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <p>
          Sou apaixonado pelo processo de criação de aplicações do UX até o
          deploy
        </p>

        <div>
          Olhar o desenvolvimento deste portifólio <div></div>
        </div>
      </aside>
    </main>
  );
}
