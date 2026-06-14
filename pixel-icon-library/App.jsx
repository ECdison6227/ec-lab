import React from 'react';

const Header = () => (
  <header className="flex justify-between items-start mb-12 px-2">
    <div>
      <h1 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-1">
        EC LAB <span className="text-rose-400 text-sm">●</span>
      </h1>
      <p className="text-gray-500 text-sm mt-1">ec 的实验室</p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-rose-400 rounded-xl flex items-center justify-center text-white shadow-sm">
        <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
      </div>
      <div>
        <h2 className="text-sm font-bold text-gray-900 leading-tight">Pixel Icon Library</h2>
        <p className="text-xs text-gray-400">Built for Creativity</p>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="flex justify-between items-end mt-16 px-2 pb-12">
    <div>
      <h1 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-1">
        EC LAB
      </h1>
      <p className="text-gray-500 text-sm mt-1">ec 的实验室</p>
    </div>
    <div className="text-right">
      <p className="text-sm text-gray-600 font-medium mb-1">Record. Explore. Share.</p>
      <p className="text-sm text-rose-400 font-medium">ec.edisonc.top</p>
    </div>
  </footer>
);

const CategoryCard = ({ title, description, count, number, icons, isBanner }) => {
  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 mb-4 transition-transform hover:-translate-y-1 duration-300">
      
      {/* Left side: Icons or Banner */}
      <div className="flex-1 w-full md:w-auto mb-6 md:mb-0 pr-0 md:pr-8 flex flex-wrap gap-4 items-center">
        {isBanner ? (
          <div className="w-full h-32 md:h-40 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
            {/* Banner Deco elements */}
            <div className="absolute top-4 left-6 text-4xl opacity-50">📚</div>
            <div className="absolute bottom-4 right-8 text-4xl opacity-50">🧁</div>
            <div className="absolute top-6 right-24 text-2xl opacity-50">🌋</div>
            
            <div className="text-center z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-widest" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                VECTOR
              </h2>
              <p className="text-blue-200 font-bold tracking-widest text-sm md:text-base mt-1">ITEM TIERS</p>
            </div>
            
            <div className="absolute top-4 right-4 bg-white text-blue-900 text-xs font-black px-2 py-1 rounded-lg">
              750+<br/><span className="text-[8px] leading-none">ICONS</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 md:gap-5 px-2 md:px-4">
            {icons.map((icon, idx) => (
              <span key={idx} className="text-3xl md:text-4xl drop-shadow-sm filter hover:scale-110 transition-transform cursor-pointer">
                {icon}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right side: Info */}
      <div className="w-full md:w-[35%] lg:w-[30%] flex justify-between items-center pl-2 md:pl-6 md:border-l border-gray-100">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
          <p className="text-xs text-rose-400 mt-3 font-semibold">{count} icons</p>
        </div>
        
        {/* Far Right: Number */}
        <div className="text-right text-gray-100 text-3xl font-bold pr-2 self-start md:self-center select-none">
          {number}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const categories = [
    {
      title: "Weapons",
      description: "Pistols, rifles and blasters.",
      count: "6",
      number: "01",
      icons: ["🔫", "🏹", "🪓", "💣", "🧨", "🗡️"]
    },
    {
      title: "Swords",
      description: "Blades of power and elements.",
      count: "6",
      number: "02",
      icons: ["🗡️", "⚔️", "🔪", "🤺", "🛠️"]
    },
    {
      title: "Tools",
      description: "Essential for building and crafting.",
      count: "5",
      number: "03",
      icons: ["🔍", "🪚", "🔨", "⛏️", "⚒️"]
    },
    {
      title: "Consumables",
      description: "Potions, food and boosts.",
      count: "5",
      number: "04",
      icons: ["🧪", "🍏", "🍯", "⏳", "🌽"]
    },
    {
      title: "Miscellaneous",
      description: "Items and collectibles.",
      count: "20",
      number: "05",
      icons: ["❤️", "🌼", "⭐", "🍪", "🎀", "🎁", "🪙", "💎", "📜", "✉️", "💍", "🔮"]
    },
    {
      title: "Emojis",
      description: "Express every mood.",
      count: "36",
      number: "06",
      icons: ["😀", "😃", "😄", "😅", "😆", "🥹", "🥶", "🤢", "🤡", "💩"]
    },
    {
      title: "Armor",
      description: "Protect yourself in style.",
      count: "18",
      number: "07",
      icons: ["🛡️", "🪖", "👕", "🥋", "🦺"]
    },
    {
      title: "Resources",
      description: "Gather, mine and collect.",
      count: "9",
      number: "08",
      icons: ["🪨", "🔥", "🧱", "🪙", "🪵", "🧀", "🪶"]
    },
    {
      title: "Vector Item Tiers",
      description: "High quality icon pack.",
      count: "1",
      number: "09",
      icons: [],
      isBanner: true,
      countLabel: "banner"
    },
    {
      title: "Buildings",
      description: "Construct and upgrade.",
      count: "12",
      number: "10",
      icons: ["🏠", "🏚️", "🛖", "🏭", "🏰", "⛺", "🏦", "⛩️"]
    },
    {
      title: "Terrain",
      description: "Build your world.",
      count: "13",
      number: "11",
      icons: ["🟩", "🟫", "⛰️", "🏕️", "🏞️", "🏝️"]
    },
    {
      title: "Nature",
      description: "Elements of the wild.",
      count: "15",
      number: "12",
      icons: ["🧊", "💎", "💠", "🌲", "🍄", "🪴", "🍁"]
    },
    {
      title: "UI Elements",
      description: "Interface and indicators.",
      count: "14",
      number: "13",
      icons: ["🖱️", "👆", "⚔️", "⚙️", "✨", "💬", "🔔"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafc] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-rose-200">
      <div className="max-w-5xl mx-auto">
        <Header />
        
        <main className="space-y-6">
          {categories.map((cat, index) => (
            <CategoryCard 
              key={index}
              title={cat.title}
              description={cat.description}
              count={cat.count}
              number={cat.number}
              icons={cat.icons}
              isBanner={cat.isBanner}
            />
          ))}
        </main>

        <Footer />
      </div>
    </div>
  );
}
