import arhimed from '../assets/arhimed.png';
import fluid from '../assets/fluid.jpg';
import mol from '../assets/mol.jpg';
import pascal from '../assets/pascal.png';
import staticc from '../assets/static.jpg';
import Arhimed  from '../assets/arhimedimage.jpg';

import pascalimage from '../assets/pascalslika.jpg';
import pascalgif from '../assets/pascalgif.gif';
import razlika from '../assets/razlika.jpg';

import portreti from '../assets/portreti.png';
import heart from '../assets/heart.jpg';
import formula from '../assets/formula.jpg';
import meteo from '../assets/meteorologija.jpeg';
import pipeline from '../assets/pipeline.jpg'; 
import pressure from '../assets/pressure.jpg';
import staticwater from '../assets/staticwater.jpg';
import hidraulic from '../assets/hidraulic.jpg';
import arhimedsile from '../assets/arhimedsile.png';


export const cardsData = [
  
  {
    id: 1,
    title: 'Uvod u mehaniku fluida',
    topic: 'general',
    date: '2025-07-01',
    image: fluid,
    description: 'Opći pojmovi i pojašnjenje što je mehanika fluida i zašto je važna.',
    content: [
      { type: 'callout', value: 'Mehanika fluida je grana fizike koja proučava ponašanje fluida (tvari koje mogu teći, odnosno tekućina i plinova) pod utjecajem sila i u različitim uvjetima.' },
      { type: 'image', value: fluid, alt: 'slika fluida' },
      { type: 'fact', value: 'Fluidi se mogu nalaziti u mirovanju (hidrostatika/statika fluida) ili u gibanju (kinematika i dinamika fluida). Za razliku od čvrstih tijela koja se deformiraju samo pod određenom silom, fluidi se deformiraju kontinuirano pod utjecajem čak i najmanje sile. Upravo ta osobina čini fluide posebnima i zahtijeva poseban matematičko-fizikalni pristup.' },
      { type: 'heading', value: '📜 Povijesni razvoj' },
      { type: 'paragraph', value: 'Proučavanje fluida ima duboke povijesne korijene. Još u antičkoj Grčkoj, Arhimed je formulirao prvi zakon koji se bavi silama u fluidima tj. zakon uzgona. Tijekom 17. stoljeća, Blaise Pascal proučava prijenos tlaka u zatvorenim sustavima, dok kasnije Bernoulli, Navier i Stokes razvijaju diferencijalne jednadžbe koje se i danas koriste u numeričkom modeliranju fluida (CFD = Computational Fluid Dynamics). Danas, mehanika fluida je ključna disciplina u gotovo svim inženjerskim i prirodnim znanostima. Od razvoja zrakoplova, medicinskih uređaja, do razumijevanja globalnih klimatskih pojava, sve to temelji se na pravilima koja definira ova grana fizike.' },
      { type: 'image', value: portreti, alt: 'slika fluida' },
      { type: 'heading', value: 'Podjela mehanike fluida' },
      { type: 'list', value: [
        '💧 <b>Statika fluida</b> se bavi proučavanjem fluida u mirovanju.',
        '🌀 <b>Kinematika fluida</b> se bavi analiziranjem gibanja fluida bez razmatranja sila.',
        '🌊 <b>Dinamika fluida</b> se bavi silama koje uzrokuju gibanje fluida i interakcijom fluida s čvrstim tijelima.'
      ] },
      { type: 'heading', value: 'Zašto je važno razumjeti mehaniku fluida?' },
      { type: 'list', value: [
        '🫀 Zdravstvo: Srčanožilni sustav čovjeka koristi hidrauličke principe.'
      ] },
      { type: 'image_small', value: heart, alt: 'srčanožilni sustav' },
      { type: 'list', value: [
        '✈️ Zrakoplovstvo i automobilska industrija: Oblik zrakoplova ili automobila optimiziran je za minimalni otpor zraka što je rezultat temeljitog proučavanja dinamike fluida.'
      ] },
      { type: 'image_small', value: formula, alt: 'aerodinamika vozila' },
      { type: 'list', value: [
        '🏗️ Građevinarstvo: Konstrukcija brana, mostova, tunela i sustava odvodnje mora uzeti u obzir sile koje fluidi (poput vode) mogu proizvesti.'
      ] },
      { type: 'image_small', value: pipeline, alt: 'građevinski sustavi' },
      { type: 'list', value: [
        '🌦️ Meteorologija: Kretanje zraka u atmosferi, nastanak oblaka, kiše i ciklona, sve su to pojave objašnjive zakonima mehanika fluida.'
      ] },
      { type: 'image_small', value: meteo, alt: 'meteorološke pojave' },
      { type: 'heading', value: 'Ključni pojmovi u mehanici fluida' },
      { type: 'list', value: [
        '<b>Tlak (p):</b> Omjer sile koja djeluje okomito na površinu i veličine te površine. Osnovna jedinica je Pascal (Pa).',
        '<b>Gustoća (ρ):</b> Masa fluida po jedinici volumena. Veća gustoća znači i veći hidrostatski tlak.',
        '<b>Viskoznost (μ):</b> Mjera „unutarnjeg trenja“ fluida. Viskozna tekućina (npr. med) teče sporije od rijetke (npr. voda).',
        '<b>Uzgon:</b> Sila koja djeluje suprotno od gravitacije kada je tijelo uronjeno u fluid.'
      ] },
      { type: 'heading', value: 'Stvarni primjeri primjene' },
      { type: 'list', value: [
        '🏊‍♂️ Plivanje ili ronjenje u bazenu: Kada ronimo, osjećamo veći tlak na uši jer tlak raste s dubinom = zakon hidrostatike.',
        '🚗 Kočenje u automobilu: Pritiskom na papučicu, hidraulički sustav prenosi tlak do kotača = primjena Pascalova zakona.',
        '✈️ Leteći avion: Oblik krila omogućuje razliku u tlaku s gornje i donje strane krila = uzgon prema Bernoullijevom principu.',
        '❤️ Rad srčane pumpe: Srce koristi tlak da „gura“ krv kroz žile = sustav sličan zatvorenoj cijevi.'
      ] },
    ]
  },

  {
    id: 2,
    title: 'Osnovna svojstva fluida',
    topic: 'general',
    date: '2025-06-15',
    image: mol,
    description: 'Što je fluid, gustoća i kohenzivna sila te koja je razlika između tekućina i plinova.',
    content: [
      { type: 'q', value: '❓ 1.Zašto tekućina "traži" svoj oblik u svakoj posudi u koju je ulijemo?' },
      { type: 'q', value: '❓ 2.Zašto med teče sporije od vode?' },
      { type: 'callout', value: 'Fluidi su tvari koje se mogu gibati i nemaju čvrsti oblik. Mogu biti tekućine ili plinovi. Za razliku od čvrstih tijela, fluide karakterizira stalna deformacija čak i pod malim silama te ne stlačivost (vrlo mala pod vrlo velikim silama). Njihovo ponašanje ovisi o njihovim fizičkim svojstvima.' },
      { type: 'unity_intro', value: 'Upute: Kretanje žlice: Pomičite žlicu desnim klikom miša kako bi sakupili molekule fluida. Interakcija s molekulama: Pomičite žlicu kroz fluid da vidite kako se lagano pomiču pod silom, primijetite da su nestlačive. Oblikovanje fluida: Lijevim klikom miša crtajte proizvoljne oblike koje će molekule popuniti - fluidi nemaju vlastiti oblik!' },
      { type: 'unity', build: 'Build1' },
      { type: 'heading', value: 'Osnovna svojstva fluida' },
      { type: 'list', value: [
        '<b>Gustoća (ρ):</b> Masa fluida po jedinici volumena. Gustoća vode iznosi približno 1000 kg/m³.',
        '<b>Specifična težina (γ):</b> Težina po jedinici volumena. Povezana s gustoćom preko sile gravitacije (γ = ρ · g).',
        '<b>Stlačivost:</b> Svojstvo fluida da mijenja volumen pod djelovanjem tlaka. Plinovi su jako stlačivi, dok su tekućine uglavnom nestlačive.',
        '<b>Viskoznost (μ):</b> Mjera unutarnjeg trenja među slojevima fluida. Med ima veću viskoznost od vode.',
        '<b>Površinska napetost:</b> Uzrokovana je međumolekulskim silama na površini fluida. Omogućuje kapljicama da zadržavaju oblik.',
        '<b>Kohenzivne sile:</b> Djeluju među molekulama unutar fluida. Ove sile utječu na ponašanje fluida u malim cijevima i kapilarama.',
        '<b>Adhezivne sile:</b> Djeluju između molekula fluida i druge površine (npr. stakla), što je vidljivo u kapilarnom usponu.'
      ] },
      { type: 'unity_intro', value: 'Upute: Podešavanje gustoće: Povlačenjem klizača mijenjajte gustoću lignje i okolnog fluida. Ovisno o omjeru gustoća, lignja će: potonuti ako je gušća od fluida, stajati na mjestu ako je pri neutralnoj gustoći, isploviti ako je rjeđa od fluida (da se radi o neživom objektu on bih potonuo do dna čim bih gustoća objekta bila veća od gustoće fluida).' },
      { type: 'unity', build: 'Build4' },
      { type: 'fact', value: 'ZANIMLJIVOST: Lignje postižu uzgon kombinacijom metoda: Pohranjuju tekućine niske gustoće (npr. amonijak) u specijaliziranim tkivima, koriste mlazni pogon za vertikalno kretanje, vrste iz porodice Cranchiidae pohranjuju amonijak u posebnim šupljinama, dok ga druge vrste drže u vakuolama mišićnog tkiva. Amonijak (nusproizvod prehrane) pomaže im postići neutralni uzgon.' },
      { type: 'heading', value: 'Tekućine vs. Plinovi' },
      { type: 'list', value: [
        '💧 <b>Tekućine:</b> Imaju stalan volumen, ali mijenjaju oblik. Slabo stlačive.',
        '💨 <b>Plinovi:</b> Nemaju stalni oblik ni volumen. Visoko stlačivi. Ispunjavaju sav dostupan prostor.'
      ] },
      { type: 'image', value: razlika, alt: 'prikaz molekula fluida' },
      { type: 'heading', value: 'Ključni pojmovi' },
      { type: 'list', value: [
        '<b>Gustoća (ρ)</b>',
        '<b>Viskoznost (μ)</b>',
        '<b>Površinska napetost</b>',
        '<b>Kohenzivne i adhezivne sile</b>',
        '<b>Stlačivost</b>'
      ] },
      { type: 'heading', value: 'Stvarni primjeri primjene' },
      { type: 'list', value: [
        '🔧 Ulje u motoru automobila mora imati optimalnu viskoznost za podmazivanje svih dijelova, posebno pri različitim temperaturama.',
        '🌱 Kapilarni učinak omogućuje vodi da putuje uz stabljiku biljke do lišća, unatoč gravitaciji.',
        '🎈 Balon s helijem lebdi jer helij ima manju gustoću od zraka.',
        '🚗 Zračni jastuk u automobilu koristi stlačivost plinova za brzo punjenje i ublažavanje udara.',
        '🍃 Kapljice vode na površini lista oblikuju se zbog površinske napetosti koja fluide zadržava u sferičnom obliku.'
      ] },
      { type: 'a', value: '✅ 1.Zato što fluidi nemaju vlastiti oblik, oni preuzimaju oblik posude zbog toga što čestice fluida mogu slobodno kliziti jedna preko druge. To je jedno od osnovnih svojstava fluida: tekućnost i prilagodljivost obliku.' },
      { type: 'a', value: '✅ 2.Med ima veću viskoznost od vode, što znači da su sile unutarnjeg trenja među česticama veće. Viskoznost je jedno od osnovnih svojstava fluida i pokazuje koliko lako (ili teško) tekućina teče.' },
    ]
  },
 
  {
    id: 3,
    title: 'Uvod u statika fluida',
    topic: 'static',
    date: '2025-05-20',
    image: staticc,
    description: 'Opći pojmovi statike fluida i kako se primjenjuje u praksi.',
    content: [
      { type: 'callout', value: 'Statika fluida je dio mehanike fluida koji proučava fluide u mirovanju. Ne uzima se u obzir gibanje fluida, već samo sile koje djeluju dok je fluid u stanju ravnoteže.' },
      { type: 'image', value: staticwater, alt: 'prikaz fluida u mirovanju' },
      { type: 'paragraph', value: 'Kada je fluid u mirovanju, jedine sile koje djeluju su gravitacija i unutarnji tlak. S dubinom u fluidu povećava se tlak jer svaki sloj fluida „nosi“ težinu slojeva iznad sebe.' },
      { type: 'heading', value: 'Ključni pojmovi u statici fluida' },
      { type: 'list', value: [
        'Tlak (p): sila po jedinici površine. Jedinica je Pascal (Pa).',
        'Hidrostatski tlak: tlak uzrokovan težinom fluida iznad točke mjerenja. Računa se po formuli p = ρgh.',
        'Površinski tlak: tlak koji djeluje na površinu fluida, npr. atmosferski tlak.',
        'Otvoreni i zatvoreni sustavi: otvoreni su pod utjecajem atmosferskog tlaka, dok zatvoreni imaju vlastiti unutarnji tlak.'
      ] },
      { type: 'heading', value: 'Važnost statike fluida u praksi' },
      { type: 'paragraph', value: 'Razumijevanje ravnoteže i djelovanja tlaka u fluidima omogućuje dizajn sigurnih sustava, od rezervoara za vodu, preko brana, do ronilačke opreme. Također je važno kod određivanja koliki pritisak krv vrši na stijenke krvnih žila u medicinskim primjenama.' },
      { type: 'image_small', value: pressure, alt: 'prikaz fluida u mirovanju' },
      { type: 'heading', value: 'Stvarni primjeri primjene' },
      { type: 'list', value: [
        '🏊‍♂️ Prilikom ronjenja, ronioci osjećaju sve veći tlak na uši i pluća kako se spuštaju, to je rezultat rasta hidrostatskog tlaka.',
        '📐 Proračun visine vodenog stupa u vodoopskrbnim sustavima koristi formulu za hidrostatski tlak kako bi se osigurao dovoljan tlak u slavini.',
        '🧱 U dizajnu brana mora se pažljivo proračunati raspodjela tlaka duž površine brane kako bi se spriječilo pucanje.',
        '🐠 Prilikom gradnje akvarija ili spremnika za tekućine, debljina stakla mora biti usklađena s količinom tlaka koji će djelovati na stijenke.',
        '🌡️ U meteorologiji, razlike u atmosferskom tlaku određuju smjer i brzinu vjetrova, viši tlak „gura“ zrak prema nižem.'
      ] },
      { type: 'fact', value: 'ZANIMLJIVOST: Tlak koji vrši statička tekućina ovisi samo o dubini, gustoći i gravitaciji, a ne o ukupnoj masi ili volumenu tekućine. Mala posuda s vodom na određenoj dubini vrši isti tlak kao i ogromno jezero na istoj dubini, sve dok su gustoće iste.' },
    ]
  },
  
  {
    id: 4,
    title: 'Pascalov zakon',
    topic: 'static',
    date: '2025-06-20',
    image: pascal,
    description: 'Što je Pascalov zakon i kako se primjenjuje u mehanici fluida.',
    content: [
      { type: 'q', value: '❓ Kako Pascalov zakon omogućuje podizanje auta pomoću dizalice?' },
      { type: 'q', value: '❓ Zašto su kočnice u automobilima učinkovitije s hidrauličkim sustavom?' },
      { type: 'unity_intro', value: 'Upute: Kada nanesete tlak u jednoj točci probajte pogoditi koliki je u drugoj! Desnim klikom miša nanesite početni tlak a lijevim saznajte tlak u odabranoj točci.' },
      { type: 'unity', build: 'Build2' },
      { type: 'heading', value: 'Pascalov zakon' },
      { type: 'paragraph', value: 'Pascalov zakon jedan je od temeljnih zakona statike fluida. Formulirao ga je francuski matematičar i fizičar Blaise Pascal, a zakon glasi: “Tlak koji se primjenjuje na zatvoreni fluid prenosi se ravnomjerno u svim smjerovima.” Ako pritisnemo fluid unutar zatvorenog sustava, taj pritisak će se prenijeti jednako na sve dijelove sustava i djelovat će okomito na sve stijenke.' },
      { type: 'image_small', value: pascalimage, alt: 'prikaz Pascalovog zakona' },
      { type: 'fact', value: 'ZANIMLJIVOST: Blaise Pascal je, osim svojih znanstvenih postignuća, izumio jedan od prvih mehaničkih kalkulatora, Pascaline, što je bio značajan korak prema razvoju modernog računarstva.' },
      { type: 'heading', value: 'Ključni pojmovi' },
      { type: 'list', value: [
        'Zatvoreni sustav: fluid se nalazi unutar sustava gdje ne može slobodno istjecati, npr. cilindar s klipovima.',
        'Hidraulička sila: rezultat primjene Pascalovog zakona; mala početna sila može uzrokovati veću izlaznu silu.',
        'Površina i tlak: Ako se na manju površinu primijeni tlak, on se ravnomjerno prenosi na veću površinu uz veću silu (F = p × A).'
      ] },
      { type: 'image', value: pascalgif, alt: 'prikaz Pascalovog zakona',  },
      { type: 'paragraph', value: 'U primjeru, u svakom od tri slučaja guramo lijevi cilindar površine A_1 prema dolje, stvaramo tlak u vodi koji gura desne cilindre (A_1, A_2, A_3) prema gore. Pomak desnih cilindara obrnuto je proporcionalan njihovoj površini. Ako na svaki lijevi cilindar djelujemo istom silom, sile na desnim cilindrima bit će proporcionalne površini presjeka desnog cilindra.' },
      { type: 'heading', value: 'Praktična primjena Pascalovog zakona' },
      { type: 'paragraph', value: 'Zahvaljujući ovom zakonu razvijeni su sustavi koji omogućuju podizanje, guranje ili stiskanje velikih tereta pomoću male ulazne sile. Primjene sežu od medicinskih instrumenata, preko automobilskih sustava, pa sve do industrijskih strojeva.' },
      { type: 'image_small', value: hidraulic, alt: 'prikaz pascalovog zakona' },
      { type: 'heading', value: 'Stvarni primjeri primjene' },
      { type: 'list', value: [
        '🛠️ Hidraulička dizalica u autoservisu: Mehaničar koristi malu silu na ručici, a dizalica podiže cijeli automobil zahvaljujući prijenosu tlaka.',
        '🚗 Kočioni sustavi u vozilima: Kada vozač pritisne kočnicu, tlak se prenosi kroz kočionu tekućinu do svih kotača, omogućujući ravnomjerno kočenje.',
        '🏗️ Hidraulična preša: Koristi se u industriji za oblikovanje metala, rezanje ili sabijanje materijala.',
        '🦷 Stomatološke stolice: Podešavanje visine i nagiba koristi Pascalov princip za precizno podizanje i spuštanje stolice.',
        '🚑 Ambulantna nosila s hidrauličnim sustavom: Medicinsko osoblje može podignuti pacijenta pomoću malih pokreta jer sustav koristi prijenos tlaka da olakša rad.'
      ] },
      { type: 'a', value: '✅ Pascalov zakon kaže da se povećanje tlaka u zatvorenom fluidu prenosi jednako u svim smjerovima. U hidrauličkoj dizalici, mala sila na manji klip prenosi se kao veliki tlak na veći klip, što omogućuje podizanje teškog automobila s malim naporom.' },
      { type: 'a', value: '✅ Zato što se pomoću Pascalovog zakona pritisak iz papučice prenosi kroz tekućinu ravnomjerno na sve kočne cilindre, što omogućuje ravnomjerno i snažno kočenje svih kotača bez dodatne sile.' },
    ]
  },
  
  {
    id: 5,
    title: 'Arhimedov zakon',
    topic: 'static',
    date: '2025-07-20',
    image: arhimed,
    description: 'Što je Arhimedov zakon i kako se primjenjuje u mehanici fluida.',
    content: [
      { type: 'q', value: '❓ Zašto brod od čelika ne tone iako je čelik gušći od vode?' },
      { type: 'q', value: '❓ Možemo li otkriti lažni zlatnik pomoću Arhimedovog zakona?' },
      { type: 'paragraph', value: 'Arhimedov zakon jedan je od temeljnih zakona hidrostatike, a formulirao ga je grčki matematičar i izumitelj Arhimed još u 3. stoljeću prije nove ere.' },
      { type: 'callout', value: ' Zakon glasi: “Na svako tijelo uronjeno u fluid djeluje uzgon (Rbottom) jednak težini istisnutog fluida.”' },
      { type: 'paragraph', value: 'Fluid "gura" tijelo prema gore silom koja ovisi o količini istisnutog fluida.Ova sila uzgona je razlog zašto brodovi ne tonu i zašto se osjećamo lakšima kad smo uronjeni u vodu. Arhimed je navodno otkrio zakon dok se kupao u kadi i primijetio da se voda prelijeva, što ga je dovelo do spoznaje da količina istisnute vode odgovara volumenu njegovog tijela. Rtop predstavlja silu gravitacije dok su Rleft i Rright bočne sile koje se međusobno poništavaju' }, 
      { type: 'image_small', value: arhimedsile, alt: 'prikaz Arhimedovog zakona' },
      { type: 'heading', value: 'Ključni pojmovi' },
      { type: 'list', value: [
        'Uzgon: Sila koja djeluje suprotno od gravitacije na tijelo uronjeno u fluid.',
        'Istisnuti volumen: Dio fluida koji tijelo "gura" dok se nalazi uronjeno u njega.',
        'Gustoća fluida: Što je veća gustoća fluida, to je uzgon veći za isti volumen.',
        'Plovnost: Sposobnost tijela da pluta u fluidu, ovisno o odnosu gustoće tijela i fluida.'
      ] },
            { type: 'heading', value: 'Matematički izraz' },
      { type: 'list', value: [
        'Uzgon (F) = ρ × V × g',
        'ρ: gustoća fluida (kg/m³)',
        'V: volumen istisnutog fluida (m³)',
        'g: gravitacijsko ubrzanje (9.81 m/s²)'
      ] },
      { type: 'image_small', value: Arhimed, alt: 'prikaz Arhimedovog zakona' },
      { type: 'fact', value: 'ZANIMLJIVOST: Otkriće zakona potencijalno se dogodilo tijekom Arhimedove kupke, a princip se koristi i za otkrivanje prijevare (provjera autentičnosti zlatnika, nakita i dragulja) te za izračunavanje volumena objekta koji nema pravilan oblik.' },
      { type: 'heading', value: 'Praktična primjena Arhimedovog zakona' },
      { type: 'paragraph', value: 'Zakon se koristi za dizajn brodova, podmornica, mjerenje gustoće nepoznatih materijala i razumijevanje plovnosti tijela. Inženjeri, fizičari i znanstvenici oslanjaju se na Arhimedov zakon pri izradi mnogih uređaja i konstrukcija koje dolaze u dodir s fluidima.' },
      { type: 'unity_intro', value: 'Upute: Mijenjajte volumen kocke po x, y i z osi, a s time i masu. Promatrajte kako se iznaosi mijenjaju.' },
      { type: 'unity', build: 'Build3' },
      { type: 'heading', value: 'Stvarni primjeri primjene' },
      { type: 'list', value: [
        '🚢 Brodovi i tankeri: Iako su građeni od metala, oblik broda omogućuje istiskivanje velike količine vode pa uzgon nadmašuje težinu = brod pluta.',
        '🏊‍♂️ Plivanje: Ljudsko tijelo istiskuje određeni volumen vode. Ako je gustoća tijela manja od vode, tijelo će plutati.',
        '🤿 Podmornice: Pomoću balastnih spremnika podmornica regulira količinu vode u sebi i tako upravlja dubinom uranjanja.',
        '🎈 Zračni baloni: Umjesto vode, baloni istiskuju zrak. Helij ili vrući zrak imaju manju gustoću, pa balon uzlazi.',
        '👑 Mjerenje gustoće krune (legendarni primjer): Arhimed je pomoću zakona dokazao da kruna nije izrađena od čistog zlata, mjereći količinu istisnute vode i uspoređujući s masom krune.'
      ] },
      { type: 'a', value: '✅ Zato što brod ima velik volumen i istiskuje puno vode. Ukupna gustoća broda (uključujući zrak unutar njega) je manja od gustoće vode, pa prema Arhimedovom zakonu uzgon nadjača težinu i brod pluta.' },
      { type: 'a', value: '✅ Da! Ako zlatnik nije od čistog zlata, imat će drugačiju gustoću. Vagajući ga u zraku i vodi, možemo izračunati njegov volumen i gustoću. Ako se ne podudara s gustoćom zlata (19.3 g/cm³), radi se o prijevari.' },
    ]
  },

  
  
  
];
