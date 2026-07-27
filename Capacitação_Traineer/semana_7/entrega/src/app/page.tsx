import Link from "next/link";

export default function Home() {
  return (
    <main className="grow">
      <div className="container mx-auto">
        <section className="flex flex-col gap-4 items-center bg-orange-50 py-10">
          <h1 className="text-5xl font-bold">Receitas Deliciosas</h1>
          <p className="text-xl text-gray-500">
            Descubra receitas simples e saborosas para todas as ocasiôes
          </p>

          <Link
            className="bg-orange-500 text-white font-bold rounded-lg px-3 py-2"
            href="/receitas"
          >
            Ver todas as receitas
          </Link>
        </section>
      </div>
    </main>
  );
}
