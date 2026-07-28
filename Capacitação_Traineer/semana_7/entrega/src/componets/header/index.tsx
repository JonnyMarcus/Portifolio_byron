import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="w-full bg-white text-black py-4 border-t border-slate-200 drop-shadow-lg">
      <div className="flex justify-around container mx-auto items-center">
        <Link
          className="flex items-center gap-3 hover:scale-105 transition-all"
          href="/"
        >
          <Image
            src="/receitas/logo-receitas-cortado.png"
            alt="Logo Receitas Deliciosas"
            width={56}
            height={56}
            className="w-14 h-14 object-contain"
          />
          <span className="text-3xl">
            <span className="font-poppins font-semibold tracking-tight text-orange-500">
              Receitas
            </span>{" "}
            <span className="font-serif_display italic text-stone-800 tracking-wide">
              Deliciosas
            </span>
          </span>
        </Link>

        <nav className="flex gap-6 items-center">
          <Link className="hover:text-orange-500 transition-colors" href="/">
            Inicio
          </Link>
          <Link
            className="hover:text-orange-500 transition-colors"
            href="/receitas"
          >
            Receitas
          </Link>
        </nav>
      </div>
    </header>
  );
}
