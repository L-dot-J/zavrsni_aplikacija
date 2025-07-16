import { useState } from 'react';
import { FaHome, FaBook, FaInfoCircle, FaChevronCircleRight, FaChevronCircleLeft,FaFacebook, FaInstagram, FaMailBulk } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Početna', icon: <FaHome />, path: '/' },
  { name: 'Edukacijski materjiali', icon: <FaBook />, path: '/educational' },
  { name: 'O nama', icon: <FaInfoCircle />, path: '/about' },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  return (
    <aside className={`h-screen  bg-zinc-950 text-zinc-300  flex flex-col  transition-all duration-300 border-e border-slate-700 ${collapsed ? 'w-20' : 'w-64'} fixed left-0 top-0 z-20`}>
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <img src={logo} alt="Logo" className={`transition-all duration-300 ${collapsed ? 'w-12' : 'w-14'}`} />
        <button
          className="ml-2 rounded-full text-3xl hover:bg-slate-700 bg-zinc-950 focus:outline-none"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
        >
          {collapsed ? <FaChevronCircleRight /> : <FaChevronCircleLeft />}
        </button>
      </div>
      <nav className="flex-1 mt-10">
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded transition-colors duration-200 hover:bg-zinc-900 hover:text-zinc-400 ${location.pathname === item.path ? 'bg-zinc-800' : ''}`}
              >
                <span className="text-3xl">{item.icon}</span>
                {!collapsed && <span className="text-base font-medium">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`flex justify-center px-2 mb-15 text-2xl text-zinc-300 border-t border-slate-700 ${collapsed ? 'gap-2' : 'gap-5'}`}>
        <FaFacebook className="cursor-pointer mt-4 hover:text-slate-700 transition" />
        <FaInstagram className="cursor-pointer mt-4 hover:text-slate-700 transition" />
        <FaMailBulk className="cursor-pointer mt-4 hover:text-slate-700 transition" />
      </div>
    </aside>
  );
}
