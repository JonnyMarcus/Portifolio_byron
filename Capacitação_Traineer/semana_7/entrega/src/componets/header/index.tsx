import Link from "next/link";
export default function Header() {
  return (
    <header className=" w-full bg-white text-black py-4 ">
      <div className=" flex justify-around container mx-auto">
        <Link
          className="text-xl font-bold houver: scale-x-105 transition-all"
          href="/"
        >
          Receitas Deliciosas
        </Link>
        <nav className="flex gap-6">
          <Link className=" houver: text-orange-500 transition-colors" href="/">
            Inicio
          </Link>
          <Link
            className=" houver: text-orange-500 transition-colors"
            href="/receitas"
          >
            Receitas
          </Link>
        </nav>
      </div>
    </header>
  );
}
