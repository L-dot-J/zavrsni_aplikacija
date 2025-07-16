import React from 'react';
import Image from '../assets/cover.png'; 
import ImageTeam from '../assets/team.jpg'; 
import Footer from '../components/Footer';

export default function About() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="bg-zinc-950 text-center rounded-4xl shadow-lg p-8 max-w-7xl w-full overflow-y-auto max-h-[90vh]">
        <h1 className="text-4xl font-bold mb-4 text-zinc-400">O NAMA</h1>
        <p className="text-lg text-zinc-300 text-justify space-y-4">
          Dobrodošli na edukativnu platformu posvećenu razumijevanju <strong>mehanike fluida</strong>, jednog od najizazovnijih područja fizike za učenike i studente.
          <br /><br />
          Naša web aplikacija osmišljena je s ciljem da <strong>učini učenje pristupačnijim, zanimljivijim i vizualno razumljivijim</strong>, bez obzira na predznanje korisnika. Poseban fokus stavili smo na <strong>statiku fluida</strong>, koja često traži apstraktno razmišljanje i razumijevanje kompleksnih zakona fizike.
          <br /><br />
          Kroz <strong>interaktivne simulacije</strong>, korisnici mogu unositi različite parametre poput volumena, gustoće i drugih faktora, a aplikacija će odmah prikazati kako ti unosi utiču na ponašanje fluida. Sve to je praćeno <strong>jasnim tekstualnim objašnjenjima</strong>, koja dodatno olakšavaju učenje.
          <br /><br />
          Aplikacija je organizirana po tematskim cjelinama, uključujući:
          <br />
          – <em>Uvod u mehaniku fluida</em><br />
          – <em>Statiku fluida</em> 
          <br /><br />
          Osim što pomaže učenicima i studentima, aplikacija je ovdje kako bih svatko tko želi proširiti svoje znanje o mehanici fluida mogao lako i brzo pronaći potrebne informacije. Naša platforma je dizajnirana da bude <strong>pristupačna i intuitivna</strong>, omogućujući korisnicima da se fokusiraju na učenje bez tehničkih prepreka.
          <br /><br />
          U budućnosti planiramo aplikaciju proširiti na nove teme i razviti <strong>mobilnu verziju</strong>, kako bismo omogućili učenje kad god i gdje god to korisniku odgovara.
        </p>
         <div className="mt-10">
          <h2 className="text-3xl mb-4 font-bold text-zinc-300">NAŠ TIM</h2>
          <img
            src={ImageTeam}
            alt="Tim"
            className="w-full max-h-[800px] object-cover rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
      <Footer />
 
    </div>
  );
}
