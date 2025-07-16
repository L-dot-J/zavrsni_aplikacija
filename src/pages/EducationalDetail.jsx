import { useParams, Link } from 'react-router-dom';
import Image from '../assets/cover.png';
import { cardsData } from '../data/educationalData';
import Footer from '../components/Footer';
import Unity from '../components/Unity';

// Tailwind mapping for block types
function renderContentBlock(block, idx) {
  switch (block.type) {
    case 'callout':
      return (
        <div key={idx} className="bg-gradient-to-r from-blue-900 to-blue-700 text-yellow-300 p-5 rounded-xl font-semibold shadow mb-6">
          {block.value}
        </div>
      );
    case 'heading':
      return (
        <h2 key={idx} className="text-yellow-300 text-2xl font-bold mt-8 mb-4">
          {block.value}
        </h2>
      );
    case 'list':
      return (
        <ul key={idx} className="ml-6 text-lg leading-relaxed list-disc mb-4">
          {block.value.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case 'fact':
      return (
        <div key={idx} className="bg-neutral-900 border-l-4 border-yellow-300 p-4 rounded-lg my-4 text-base">
          {block.value}
        </div>
      );
    case 'paragraph':
      return (
        <div key={idx} className="text-base text-neutral-200 mb-2">
          {block.value}
        </div>
      );
    case 'image':
      return (
        <img key={idx} src={block.value} alt={block.alt} className="w-full rounded-xl shadow my-6" />
      );
    case 'image_small':
      return (
        <img key={idx} src={block.value} alt={block.alt} className="w-32 mx-auto my-4 rounded-lg shadow" />
      );
    case 'unity':
      return <Unity key={idx} build={block.build} />;
    case 'q&a':
      return (
        <div key={idx} className="bg-blue-900/80 text-yellow-300 font-semibold rounded-xl px-4 py-3 my-3 shadow flex items-center gap-2">
          <span className="text-xl">💡</span> <span dangerouslySetInnerHTML={{ __html: block.value }} />
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
