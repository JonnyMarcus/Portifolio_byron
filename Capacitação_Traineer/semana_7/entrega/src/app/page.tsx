import Link from "next/link";

export default function Home() {
  return (
    <main className="grow">
      <div className="container mx-auto">
        <section className="flex flex-col gap-4 items-center bg-[url('/receitas/bg_home-receitas.png')] bg-cover bg-center bg-no-repeat py-10">
          <img
            src="receitas/receitas-deliciosas1.png"
            alt="Texto principal do site Receitas deliciosas"
            width={600}
            height={400}
            className=" w-full max-w-md h-auto py-0 px-0"
          />
          <p className="text-xl text-gray-500 ">
            Descubra receitas simples e saborosas para todas as ocasiôes
          </p>

          <Link
            className="bg-orange-500 text-white font-bold rounded-lg px-3 py-2 hover:bg-orange-700 transition-colors "
            href="/receitas"
          >
            Ver todas as receitas
          </Link>
        </section>
      </div>
    </main>
  );
}
