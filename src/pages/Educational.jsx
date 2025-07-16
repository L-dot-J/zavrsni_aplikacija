import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/cover.png';
import { cardsData } from '../data/educationalData';

const topics = [
  { value: '', label: 'Sve teme' },
  { value: 'general', label: 'Opće o mehanici fluida' },
  { value: 'static', label: 'Statika fluida' },
];
const dates = [
  { value: '', label: 'Bilo koji datum' },
  { value: 'newest', label: 'Najnovije' },
  { value: 'oldest', label: 'Najstarije' },
];

export default function Educational() {
  const [topic, setTopic] = useState('');
  const [date, setDate] = useState('');
  const [search, setSearch] = useState('');

  let filtered = cardsData.filter(card =>
    (!topic || card.topic === topic) &&
    (!search || card.title.toLowerCase().includes(search.toLowerCase()))
  );
  if (date === 'newest') filtered = filtered.sort((a, b) => b.date.localeCompare(a.date));
  if (date === 'oldest') filtered = filtered.sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-0" style={{ backgroundImage: `url(${Image})` }}>
      <div className="w-full bg-zinc-950/90 rounded-b-3xl shadow-lg px-6 py-8 max-w-7xl mt-0 mb-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-zinc-300 tracking-wide">EDUKACIJSKI MATERIJALI</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mb-4">
          <select value={topic} onChange={e => setTopic(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-700 bg-zinc-900 text-zinc-300 focus:outline-none">
            {topics.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <select value={date} onChange={e => setDate(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-700 bg-zinc-900 text-zinc-300 focus:outline-none">
            {dates.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <input
            type="text"
            placeholder="Pretraži po nazivu..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-slate-700 bg-zinc-900 text-zinc-300 focus:outline-none w-64"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-6 pb-10">
        {filtered.map(card => (
          <Link
            key={card.id}
            to={`/educational/${card.id}`}
            className="bg-zinc-950/90 rounded-3xl shadow-xl p-6 flex flex-col items-center hover:scale-105 hover:bg-zinc-900 transition-transform cursor-pointer group border border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-2 text-center group-hover:text-zinc-200 text-zinc-300 tracking-wide">{card.title}</h3>
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-xl mb-2 border border-slate-700" />
            <p className="text-zinc-400 text-center mb-4">{card.description}</p>
            <span className="mt-auto inline-block px-4 py-2 bg-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-700 transition">Saznaj više</span>
          </Link>
        ))}
      </div>
      <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-2 px-6 py-3 bg-zinc-950/80 text-zinc-400 text-sm fixed bottom-0 left-0 z-30 border-t border-slate-700">
        <span>&copy; {new Date().getFullYear()} EduApp. Sva prava pridržana.</span>
        <span>
          Slika pozadine: <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-200">Designed by rawpixel.com / Freepik</a>
        </span>
      </footer>
    </div>
  );
}
