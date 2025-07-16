import Image from '../assets/cover.png';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
      <div className="relative z-10 text-center text-zinc-300">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">OTKRIJ SVIJET MEHANIKE FLUIDA</h1>
        <h2 className="text-2xl md:text-3xl font-light drop-shadow">Uči svojim tempom i u svoje vrijeme!</h2>
      </div>
    <Footer />
    </div>
  );
}
