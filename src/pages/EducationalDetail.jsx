import { useParams, Link } from 'react-router-dom';
import Image from '../assets/cover.png';
import { cardsData } from '../data/educationalData';
import Footer from '../components/Footer';
import Unity from '../components/Unity';


function renderContentBlock(block, idx) {
  switch (block.type) {
    case 'callout':
      return (
        <div key={idx} className="bg-gradient-to-r from-[rgba(118,172,204,0.3)] to-[rgba(53,95,197,0.3)]  text-[#f5cfc5] bg-opacity-10 p-5 rounded-xl font-semibold mb-6">
          {block.value}
        </div>
      );
    case 'heading':
      return (
        <h2 key={idx} className="text-zinc-300 text-2xl font-bold mt-8 mb-4">
          {block.value}
        </h2>
      );
    case 'list':
      return (
        <ul key={idx} className="ml-6 text-lg leading-relaxed list-disc mb-4 text-zinc-300">
          {block.value.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case 'fact':
      return (
        <div key={idx} className="bg-[rgba(245,207,197,0.3)] border-l-8 border-[#f5cfc5] p-4 rounded-lg my-4 text-base text-zinc-300">
          {block.value}
        </div>
      );
    case 'paragraph':
      return (
        <div key={idx} className=" text-zinc-300 mb-2 text-lg">
          {block.value}
        </div>
      );
    case 'image':
      return (
        <img key={idx} src={block.value} alt={block.alt} className="w-11/12 rounded-xl my-6" />
      );
    case 'image_small':
      return (
        <img key={idx} src={block.value} alt={block.alt} className="w-8/12 mx-auto my-4 rounded-lg" />
      );
    case 'unity':
      return <Unity key={idx} build={block.build} />;
    case 'unity_intro':
      return (
        <div key={idx} className="bg-zinc-950  text-zinc-500 bg-opacity-10 p-2 font-sans  mt-6 mb-0">
          {block.value}
        </div>
      );
    case 'q':
      return (
           <div key={idx} className="group bg-slate-950 text-red-400 font-semibold rounded-lg p-1 my-2 shadow flex items-center justify-center cursor-default ml-auto transition-all duration-200 ease-out w-12 h-12 hover:h-auto hover:w-auto hover:px-3 hover:py-2 overflow-hidden">
      <span className="text-2xl transition-opacity duration-200 ease-out group-hover:opacity-0 absolute">❓</span>
      <span className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 pl-2 wrap-normal">
        {block.value.replace('❓', '')}
      </span>
    </div>
      );
      case 'a':
      return (
           <div key={idx} className="group bg-slate-950 text-green-400 font-semibold rounded-lg p-1 my-2 shadow flex items-center justify-center cursor-default ml-auto transition-all duration-200 ease-out w-12 h-12  hover:h-auto hover:w-auto hover:px-3 hover:py-2 overflow-hidden">
      <span className="text-2xl transition-opacity duration-200 ease-out group-hover:opacity-0 absolute">✅</span>
      <span className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 pl-2 wrap-normal">
        {block.value.replace('✅ ', '')}
      </span>
    </div>
      );
    default:
      return null;
  }
}

export default function EducationalDetail() {
  const { id } = useParams();
  const card = cardsData.find(c => String(c.id) === String(id));

  if (!card) return <div className="p-8 text-zinc-300">Materijal nije pronađen.</div>;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-0" style={{ backgroundImage: `url(${Image})` }}>
      <div className=" bg-zinc-950/90 rounded-3xl shadow-lg px-6 xl:px-20 py-10 max-w-11/12 xl:max-w-9/12 mt-10 mb-12 mx-2 flex flex-col items-center border border-slate-700">
        <Link to="/educational" className="text-zinc-400 hover:underline mb-6 self-start">&larr; Povratak na materijale</Link>
        <h1 className="text-3xl font-bold mb-4 text-zinc-200 tracking-wide text-center">{card.title}</h1>
        {card.content && card.content.map(renderContentBlock)}
      </div>
      <Footer />
    </div>
  );
}
