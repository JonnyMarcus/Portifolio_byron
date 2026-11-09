import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-orange-50 text-black py-3 sm:py-4 border-b border-orange-200/60 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <Link
          className="flex items-center gap-2.5 sm:gap-3 hover:opacity-90 transition-opacity"
          href="/"
        >
          <Image
            src="/receitas/logo-receitas-cortado.png"
            alt="Logo Receitas Deliciosas"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <span className="text-2xl sm:text-3xl">
            <span className="font-semibold tracking-tight text-orange-500">
              Receitas
            </span>{" "}
            <span className="italic text-stone-800 tracking-wide">
              Deliciosas
            </span>
          </span>
        </Link>

        <nav className="flex gap-4 sm:gap-6 items-center text-sm sm:text-base font-medium">
          <Link
            className="px-2 py-1 text-stone-700 hover:text-orange-600 transition-colors"
            href="/"
          >
            Início
          </Link>
          <Link
            className="px-2 py-1 text-stone-700 hover:text-orange-600 transition-colors"
            href="/receitas"
          >
            Todas as Receitas
          </Link>
        </nav>
      </div>
    </header>
  );
}
