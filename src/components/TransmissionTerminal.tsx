import { useState } from "react";
import { 
  Scroll, 
  FlaskConical, 
  Globe, 
  AlertTriangle, 
  GitBranch, 
  Database, 
  Search, 
  BookOpen, 
  Lock,
  ArrowRight,
  RefreshCw,
  Terminal,
  Cpu
} from 'lucide-react';

// --- Types ---
type ModuleType = 'solomonic' | 'alchemy' | 'eastern';

// --- Data ---
const solomonicData = {
  title: "Vector A: Solomonic Textual Drift",
  subtitle: "Stemma Codicum & Scribal Corruption",
  description: "In the Grimoiric tradition, 'secrets' are often just copy-errors. A single Hebrew letter mistranscribed in the 14th century renders a 19th-century talisman inert. This is a supply chain failure.",
  examples: [
    {
      id: 'pentacle',
      title: "The Second Pentacle of Mars",
      issue: "The 'Resh/Daleth' Error",
      context: "The key divine name 'Adonai' requires the letter Daleth (ד). Many manuscripts have a Resh (ר) due to visual similarity.",
      visual: {
        correct: "ד",
        corrupt: "ר",
        consequence: "The name changes from 'Lord' (ADNI) to a nonsense phoneme (ARNI), breaking the semantic link."
      }
    },
    {
      id: 'mathers',
      title: "The Mathers Filter (1889)",
      issue: "Victorian Censorship/Omission",
      context: "S.L. MacGregor Mathers' edition of the 'Key of Solomon' is the standard for modern occultism, but he edited out 'black' magic sections and simplified geometry.",
      visual: {
        correct: "Full Operational Protocol",
        corrupt: "Sanitized Public Release",
        consequence: "Modern practitioners use an incomplete instruction set believing it is the archetype."
      }
    }
  ]
};

const alchemyData = {
  title: "Vector B: Alchemical Encryption",
  subtitle: "Decknamen (Cover Names) & Lost Keys",
  description: "European Alchemy used 'Decknamen'—code words—to hide operative chemistry from the church and the uninitiated. When the oral key was lost, the chemical formulas were misinterpreted as purely spiritual metaphors.",
  codes: [
    {
      term: "The Green Lion",
      esoteric: "The ego devouring the sun; a stage of spiritual purification.",
      operative: "Raw Antimony Ore (Stibnite) or Iron Vitriol",
      mechanism: "When mixed with nitric acid, it creates a green solution that dissolves gold (devours the Sun).",
      status: "RECOVERED"
    },
    {
      term: "Philosophical Mercury",
      esoteric: "The fluid mind; the principle of volatility.",
      operative: "Ethyl Alcohol (in spagyrics) or specific amalgams",
      mechanism: "A solvent extraction medium, not the element Hg (Quicksilver).",
      status: "PARTIAL"
    },
    {
      term: "Caput Mortuum",
      esoteric: "The dead head; the dark night of the soul.",
      operative: "Iron Oxide (Rust/Residue)",
      mechanism: "The inert solid matter left in the retort after distillation.",
      status: "RECOVERED"
    }
  ]
};

const easternData = {
  title: "Vector C: The Eastern Bandwidth Gap",
  subtitle: "Volume vs. Translation Velocity",
  description: "The 'Secret' here is purely quantitative. The specific psychophysiological engineering manuals (Sadhana) of India and Tibet exist in massive quantities but remain untranslated due to lack of technical philologists.",
  stats: [
    {
      collection: "Tibetan Kangyur & Tengyur",
      total: "~230,000 pages",
      translated: "approx. 5-10%",
      implication: "We are missing 90% of the technical documentation for Vajrayana mind-tech."
    },
    {
      collection: "Sanskrit Agamas & Tantras",
      total: "Millions of Shlokas",
      translated: "< 3%",
      implication: "Most 'Tantra' in the West is based on a tiny fraction of texts, often filtered through Victorian colonial morality."
    }
  ]
};

const TerminalHeader = () => (
  <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6 bg-slate-900 p-4 rounded-t-lg">
    <div className="flex items-center space-x-2 text-emerald-500">
      <Terminal className="w-5 h-5" />
      <span className="font-mono text-sm tracking-widest font-bold">ARCHITECT_OS // TRANSMISSION_AUDIT_V1.0</span>
    </div>
    <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
      <div className="flex items-center">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
        SYSTEM ONLINE
      </div>
      <div>SECURE CONNECTION</div>
    </div>
  </div>
);

const SolomonicView = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
      <h3 className="text-xl font-bold text-slate-100 flex items-center mb-2">
        <GitBranch className="w-5 h-5 mr-2 text-amber-500" />
        {solomonicData.subtitle}
      </h3>
      <p className="text-slate-400 font-mono text-sm">{solomonicData.description}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {solomonicData.examples.map((ex, idx) => (
        <div key={idx} className="bg-slate-900 border border-slate-700 p-4 rounded-lg relative overflow-hidden group hover:border-amber-500/50 transition-all">
          <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20">
            <AlertTriangle className="w-16 h-16 text-amber-500" />
          </div>
          <h4 className="text-amber-400 font-bold mb-2 font-mono">{ex.title}</h4>
          <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">ERR: {ex.issue}</div>
          
          <div className="bg-slate-950 p-4 rounded mb-4 flex justify-between items-center border border-slate-800">
             <div className="text-center">
               <div className="text-xs text-slate-500 mb-1">ORIGINAL</div>
               <div className="text-3xl font-serif text-emerald-400">{ex.visual.correct}</div>
             </div>
             <ArrowRight className="text-slate-600" />
             <div className="text-center">
               <div className="text-xs text-slate-500 mb-1">CORRUPT</div>
               <div className="text-3xl font-serif text-red-400">{ex.visual.corrupt}</div>
             </div>
          </div>
          
          <p className="text-sm text-slate-300 mb-2 border-l-2 border-amber-500 pl-3 italic">
            "{ex.context}"
          </p>
          <div className="mt-3 text-xs font-mono text-red-300 bg-red-950/30 p-2 rounded">
            &gt; IMPACT: {ex.visual.consequence}
          </div>
        </div>
      ))}
    </div>
    
    <div className="bg-amber-950/20 border border-amber-900/50 p-4 rounded text-xs font-mono text-amber-200/80">
      SYSTEM NOTE: To restore function, one must bypass the printed editions (Mathers, Waite) and compare the original manuscripts (British Library Lansdowne MSS, Bibliothèque de l'Arsenal) to triangulate the original operator.
    </div>
  </div>
);

const AlchemyView = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
      <h3 className="text-xl font-bold text-slate-100 flex items-center mb-2">
        <Lock className="w-5 h-5 mr-2 text-cyan-500" />
        {alchemyData.subtitle}
      </h3>
      <p className="text-slate-400 font-mono text-sm">{alchemyData.description}</p>
    </div>

    <div className="space-y-3">
      {alchemyData.codes.map((code, idx) => (
        <div key={idx} className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden flex flex-col md:flex-row">
          <div className="p-4 md:w-1/3 bg-slate-950 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700">
            <div className="text-xs text-cyan-500 font-mono mb-1">CIPHER TERM</div>
            <div className="text-xl font-bold text-slate-100">{code.term}</div>
            <div className="mt-2 text-xs font-mono px-2 py-1 bg-emerald-950 text-emerald-400 rounded w-max border border-emerald-900">
              STATUS: {code.status}
            </div>
          </div>
          
          <div className="p-4 md:w-2/3 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-500 mb-1 flex items-center">
                  <BookOpen className="w-3 h-3 mr-1" /> EXOTERIC (Public)
                </div>
                <div className="text-sm text-slate-400 italic">"{code.esoteric}"</div>
              </div>
              <div>
                <div className="text-xs text-cyan-500 mb-1 flex items-center">
                  <FlaskConical className="w-3 h-3 mr-1" /> OPERATIVE (Hidden)
                </div>
                <div className="text-sm text-cyan-300 font-mono">{code.operative}</div>
              </div>
            </div>
            <div className="pt-2 mt-2 border-t border-slate-800 text-xs text-slate-500">
              <span className="font-bold text-slate-400">Mechanism:</span> {code.mechanism}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const EasternView = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
      <h3 className="text-xl font-bold text-slate-100 flex items-center mb-2">
        <Database className="w-5 h-5 mr-2 text-purple-500" />
        {easternData.subtitle}
      </h3>
      <p className="text-slate-400 font-mono text-sm">{easternData.description}</p>
    </div>

    <div className="grid grid-cols-1 gap-6">
      {easternData.stats.map((stat, idx) => (
        <div key={idx} className="bg-slate-900 border border-slate-700 p-6 rounded-lg">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-purple-400 font-mono text-sm font-bold">{stat.collection}</div>
              <div className="text-xs text-slate-500 mt-1">Total Volume: {stat.total}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 mb-1">Access Rate</div>
              <div className="text-2xl font-bold text-white">{stat.translated}</div>
            </div>
          </div>

          <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-purple-600 relative" 
              style={{width: stat.translated.replace('approx. ', '').replace('< ', '')}}
            >
              <div className="absolute top-0 right-0 h-full w-1 bg-white/50 animate-pulse"></div>
            </div>
          </div>

          <div className="flex items-start space-x-3 text-sm text-slate-300 bg-slate-950 p-3 rounded border border-slate-800">
            <Search className="w-4 h-4 text-purple-500 mt-1 shrink-0" />
            <span>{stat.implication}</span>
          </div>
        </div>
      ))}
    </div>
    
    <div className="flex items-center justify-center p-8 border-2 border-dashed border-slate-700 rounded-lg text-slate-500 font-mono text-xs">
      <RefreshCw className="w-4 h-4 mr-2 animate-spin-slow" />
      AWAITING NEURAL MACHINE TRANSLATION INTEGRATION...
    </div>
  </div>
);

export default function TransmissionTerminal() {
  const [activeModule, setActiveModule] = useState<ModuleType>('solomonic');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 font-sans selection:bg-emerald-900 selection:text-white">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl shadow-2xl border border-slate-800 overflow-hidden">
        <TerminalHeader />

        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[600px]">
          {/* Navigation Sidebar */}
          <div className="bg-slate-950 border-r border-slate-800 p-4 space-y-2">
            <div className="text-xs font-mono text-slate-500 mb-4 px-2">SECTOR SELECT</div>
            
            <button
              onClick={() => setActiveModule('solomonic')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeModule === 'solomonic' 
                  ? 'bg-amber-950/40 text-amber-400 border border-amber-900' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <Scroll className="w-4 h-4" />
              <div className="text-left">
                <div className="text-sm font-bold">SOLOMONIC</div>
                <div className="text-[10px] opacity-70">Textual Drift</div>
              </div>
            </button>

            <button
              onClick={() => setActiveModule('alchemy')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeModule === 'alchemy' 
                  ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-900' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <div className="text-left">
                <div className="text-sm font-bold">ALCHEMY</div>
                <div className="text-[10px] opacity-70">Lost Ciphers</div>
              </div>
            </button>

            <button
              onClick={() => setActiveModule('eastern')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeModule === 'eastern' 
                  ? 'bg-purple-950/40 text-purple-400 border border-purple-900' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <Globe className="w-4 h-4" />
              <div className="text-left">
                <div className="text-sm font-bold">EASTERN</div>
                <div className="text-[10px] opacity-70">Data Latency</div>
              </div>
            </button>
            
            <div className="mt-8 p-4 bg-slate-900/50 rounded border border-slate-800">
               <div className="flex items-center text-xs text-slate-500 mb-2">
                  <Cpu className="w-3 h-3 mr-1" /> SYS_STATUS
               </div>
               <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500/50 w-2/3"></div>
               </div>
               <div className="text-[10px] text-slate-600 mt-1 font-mono">
                 ARCHIVE_INTEGRITY: 67%
               </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-1 md:col-span-3 bg-slate-900 p-6 md:p-8">
            <div className="h-full">
              {activeModule === 'solomonic' && <SolomonicView />}
              {activeModule === 'alchemy' && <AlchemyView />}
              {activeModule === 'eastern' && <EasternView />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}