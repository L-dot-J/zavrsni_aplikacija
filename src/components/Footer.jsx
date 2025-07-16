
export default function Footer() {
  return (
        <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-2 px-6 py-3 bg-zinc-950/80 text-zinc-400 text-sm fixed bottom-0 left-0 z-30 border-t border-slate-700">
                <span>&copy; {new Date().getFullYear()} LanaApp. Sva prava pridržana.</span>
                <span>
                Slika pozadine: <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-200">Designed by rawpixel.com / Freepik</a>
                </span>
        </footer>
    );
    }