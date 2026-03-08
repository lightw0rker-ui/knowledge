import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Triangle, 
  Atom, 
  Dna, 
  BrainCircuit, 
  Cpu, 
  Wrench, 
  Users, 
  Sparkles, 
  Compass, 
  Infinity,
  Terminal,
  ChevronRight,
  FolderOpen,
  FileText,
  Search,
  Hash
} from 'lucide-react';

// --- Types ---
type Section = {
  id: string;
  range: string;
  title: string;
  tags: string[];
};

type Module = {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  sections: Section[];
};

// --- Data Structure ---
const knowledgeBase: Module[] = [
  {
    id: '01',
    code: 'MOD_01',
    name: 'AXIOMATICS_LOGOS',
    subtitle: 'Mathematics & Metaphysics',
    icon: Triangle,
    sections: [
      { id: '00', range: '00-09', title: 'Metaphysical_Foundations', tags: ['Ontology', 'Void', 'Emanation'] },
      { id: '01', range: '10-19', title: 'Formal_Logic_Set_Theory', tags: ['ZFC', 'Incompleteness', 'Modal'] },
      { id: '02', range: '20-29', title: 'Number_Theory_Arithmetic', tags: ['Primes', 'Crypto', 'Sacred_Num'] },
      { id: '03', range: '30-39', title: 'Algebra_Linear_Systems', tags: ['Vectors', 'Tensors', 'Groups'] },
      { id: '04', range: '40-49', title: 'Geometry_Topology', tags: ['Manifolds', 'Non-Euclidean', 'Sacred_Geo'] },
      { id: '05', range: '50-59', title: 'Calculus_Analysis', tags: ['DiffEq', 'Complex_Analysis'] },
      { id: '06', range: '60-69', title: 'Probability_Statistics', tags: ['Bayesian', 'Stochastic', 'Entropy'] },
      { id: '07', range: '70-79', title: 'Info_Theory_Semiotics', tags: ['Shannon', 'Linguistics', 'Phonemes'] },
      { id: '08', range: '80-89', title: 'Category_Theory', tags: ['Functors', 'Monads', 'Topos'] },
      { id: '09', range: '90-99', title: 'Chaos_Complexity', tags: ['Fractals', 'Attractors', 'Emergence'] },
    ]
  },
  {
    id: '02',
    code: 'MOD_02',
    name: 'HYLOMORPHIC_SUBSTRATE',
    subtitle: 'Physics & Matter',
    icon: Atom,
    sections: [
      { id: '00', range: '00-09', title: 'Classical_Mechanics', tags: ['Lagrangian', 'Resonance'] },
      { id: '01', range: '10-19', title: 'Electromagnetism_Optics', tags: ['Maxwell', 'Photonics', 'Waves'] },
      { id: '02', range: '20-29', title: 'Thermodynamics_StatMech', tags: ['Entropy', 'Phase_Space', 'Boltzmann'] },
      { id: '03', range: '30-39', title: 'Quantum_Mechanics', tags: ['Wave_Functions', 'QFT', 'Standard_Model'] },
      { id: '04', range: '40-49', title: 'Relativity_Cosmology', tags: ['Spacetime', 'Black_Holes'] },
      { id: '05', range: '50-59', title: 'Inorganic_Chemistry', tags: ['Atomic_Struct', 'Bonding'] },
      { id: '06', range: '60-69', title: 'Organic_Biochemistry', tags: ['Synthesis', 'Chirality', 'Carbon'] },
      { id: '07', range: '70-79', title: 'PhysChem_Kinetics', tags: ['Reaction_Rates', 'ElectroChem'] },
      { id: '08', range: '80-89', title: 'Materials_Science', tags: ['Crystals', 'Metallurgy', 'Spagyrics'] },
      { id: '09', range: '90-99', title: 'Condensed_Matter', tags: ['Superconductors', 'Exotic_States'] },
    ]
  },
  {
    id: '03',
    code: 'MOD_03',
    name: 'BIOTIC_SOMATIC_GRAPH',
    subtitle: 'Biology & Body',
    icon: Dna,
    sections: [
      { id: '00', range: '00-09', title: 'Cell_Bio_Genetics', tags: ['DNA', 'Replication', 'Organelles'] },
      { id: '01', range: '10-19', title: 'Evolution_Ecology', tags: ['Selection', 'Systems_Bio'] },
      { id: '02', range: '20-29', title: 'Anatomy_Phys_I', tags: ['Musculoskeletal', 'Biomechanics'] },
      { id: '03', range: '30-39', title: 'Anatomy_Phys_II', tags: ['Cardio', 'Renal', 'GI'] },
      { id: '04', range: '40-49', title: 'Nervous_System', tags: ['Neurons', 'Glia', 'CNS/PNS'] },
      { id: '05', range: '50-59', title: 'Endocrinology', tags: ['Hormones', 'Signaling', 'Receptors'] },
      { id: '06', range: '60-69', title: 'Immunology_Pathology', tags: ['Immunity', 'Inflammation'] },
      { id: '07', range: '70-79', title: 'Pharmacology', tags: ['PK/PD', 'Toxicology', 'Entheogens'] },
      { id: '08', range: '80-89', title: 'Energetic_Physiology', tags: ['Prana', 'Meridians', 'Breath'] },
      { id: '09', range: '90-99', title: 'Clinical_Logic', tags: ['Triage', 'Diagnostics', 'ALS'] },
    ]
  },
  {
    id: '04',
    code: 'MOD_04',
    name: 'NOETIC_CIRCUIT',
    subtitle: 'Mind & Cognition',
    icon: BrainCircuit,
    sections: [
      { id: '00', range: '00-09', title: 'Cognitive_Neuro', tags: ['Cortical_Map', 'Sensory_Proc'] },
      { id: '01', range: '10-19', title: 'Perception_Qualia', tags: ['Psychophysics', 'Reality_Testing'] },
      { id: '02', range: '20-29', title: 'Memory_Learning', tags: ['LTP/LTD', 'Conditioning'] },
      { id: '03', range: '30-39', title: 'Attention_Exec_Func', tags: ['Focus', 'Flow', 'ADHD'] },
      { id: '04', range: '40-49', title: 'Emotion_Affect', tags: ['Limbic', 'Polyvagal', 'Regulation'] },
      { id: '05', range: '50-59', title: 'Developmental_Psych', tags: ['Attachment', 'Neuroplasticity'] },
      { id: '06', range: '60-69', title: 'Social_Psych', tags: ['Bias', 'Dynamics', 'Mimetic'] },
      { id: '07', range: '70-79', title: 'Clinical_Abnormal_Psych', tags: ['Trauma', 'DSM', 'Personality'] },
      { id: '08', range: '80-89', title: 'Altered_States', tags: ['Sleep', 'Dreams', 'Psi_Baseline'] },
      { id: '09', range: '90-99', title: 'Epistemology_Self', tags: ['Ego', 'Shadow', 'Metacognition'] },
    ]
  },
  {
    id: '05',
    code: 'MOD_05',
    name: 'COMPUTATIONAL_CYBERNETIC',
    subtitle: 'Code & AI',
    icon: Cpu,
    sections: [
      { id: '00', range: '00-09', title: 'Algos_DataStructs', tags: ['Complexity', 'Graphs', 'Trees'] },
      { id: '01', range: '10-19', title: 'Arch_Hardware', tags: ['Neuromorphic', 'Memory', 'Logic'] },
      { id: '02', range: '20-29', title: 'Software_Eng', tags: ['Patterns', 'Testing', 'OS'] },
      { id: '03', range: '30-39', title: 'Networks_Distributed', tags: ['Protocol', 'Consensus', 'Cloud'] },
      { id: '04', range: '40-49', title: 'Crypto_Security', tags: ['Encryption', 'Zero_Knowledge'] },
      { id: '05', range: '50-59', title: 'ML_Foundations', tags: ['Regression', 'Optimization'] },
      { id: '06', range: '60-69', title: 'Deep_Learning', tags: ['Neural_Nets', 'Transformers'] },
      { id: '07', range: '70-79', title: 'GenAI_NLP', tags: ['LLMs', 'Diffusion', 'Embeddings'] },
      { id: '08', range: '80-89', title: 'Cybernetics_Control', tags: ['Feedback', 'PID', 'Dynamics'] },
      { id: '09', range: '90-99', title: 'AI_Safety', tags: ['Alignment', 'Interp', 'X-Risk'] },
    ]
  },
  {
    id: '06',
    code: 'MOD_06',
    name: 'TECHNIUM_INFRASTRUCTURE',
    subtitle: 'Engineering',
    icon: Wrench,
    sections: [
      { id: '00', range: '00-09', title: 'Statics_Dynamics', tags: ['Forces', 'Kinematics'] },
      { id: '01', range: '10-19', title: 'Electrical_Eng', tags: ['Circuits', 'Signals', 'Power'] },
      { id: '02', range: '20-29', title: 'Fluid_Thermal', tags: ['HVAC', 'Aero', 'Heat_Transfer'] },
      { id: '03', range: '30-39', title: 'Civil_Structural', tags: ['Materials', 'Geotech'] },
      { id: '04', range: '40-49', title: 'Architecture', tags: ['Spatial_Logic', 'Zoning', 'Design'] },
      { id: '05', range: '50-59', title: 'Manufacturing', tags: ['Lean', 'Six_Sigma', 'Scale'] },
      { id: '06', range: '60-69', title: 'Ag_Permaculture', tags: ['Soil', 'Food_Systems'] },
      { id: '07', range: '70-79', title: 'Energy_Systems', tags: ['Renewables', 'Nuclear', 'Grid'] },
      { id: '08', range: '80-89', title: 'Transport_Logistics', tags: ['Vehicle_Dyn', 'Orbital_Mech'] },
      { id: '09', range: '90-99', title: 'Survival_Field_Eng', tags: ['Water', 'Comms', 'Shelter'] },
    ]
  },
  {
    id: '07',
    code: 'MOD_07',
    name: 'EGREGORE',
    subtitle: 'Society & Law',
    icon: Users,
    sections: [
      { id: '00', range: '00-09', title: 'Economics', tags: ['Micro/Macro', 'Game_Theory'] },
      { id: '01', range: '10-19', title: 'Finance_Acct', tags: ['Valuation', 'Markets', 'Ledger'] },
      { id: '02', range: '20-29', title: 'Law_Contracts', tags: ['Torts', 'IP', 'Governance'] },
      { id: '03', range: '30-39', title: 'PolSci', tags: ['Governance', 'Voting', 'Power'] },
      { id: '04', range: '40-49', title: 'Geopolitics', tags: ['Strategy', 'Geography', 'Deterrence'] },
      { id: '05', range: '50-59', title: 'History', tags: ['Civilizations', 'Cycles', 'Historiography'] },
      { id: '06', range: '60-69', title: 'Sociology_Anthro', tags: ['Culture', 'Ritual', 'Mimesis'] },
      { id: '07', range: '70-79', title: 'Media_Propaganda', tags: ['Narrative', 'Semiotics', 'Attention'] },
      { id: '08', range: '80-89', title: 'Org_Behavior', tags: ['Management', 'Hierarchy', 'Incentives'] },
      { id: '09', range: '90-99', title: 'Intel_Espionage', tags: ['OSINT', 'Deception', 'HUMINT'] },
    ]
  },
  {
    id: '08',
    code: 'MOD_08',
    name: 'OPERATIVE_ESOTERIC',
    subtitle: 'Magical Tech',
    icon: Sparkles,
    sections: [
      { id: '00', range: '00-09', title: 'Hermeticism_Alchemy', tags: ['Kybalion', 'Spagyrics'] },
      { id: '01', range: '10-19', title: 'Qabalah', tags: ['Tree_of_Life', 'Gematria', '4_Worlds'] },
      { id: '02', range: '20-29', title: 'Astrology_Timing', tags: ['Natal', 'Electional', 'Decans'] },
      { id: '03', range: '30-39', title: 'Solomonic_Grimoire', tags: ['Tools', 'Spirits', 'Constraint'] },
      { id: '04', range: '40-49', title: 'Tantra_Mantra', tags: ['Sanskrit', 'Yantra', 'Kundalini'] },
      { id: '05', range: '50-59', title: 'Daoist_Arts', tags: ['Neidan', 'QiGong', 'I_Ching'] },
      { id: '06', range: '60-69', title: 'Buddhist_Esoterics', tags: ['Vajrayana', 'Visualization'] },
      { id: '07', range: '70-79', title: 'Mysticism', tags: ['Sufi', 'Hesychasm', 'Contemplation'] },
      { id: '08', range: '80-89', title: 'Divination', tags: ['Tarot', 'Geomancy', 'Scrying'] },
      { id: '09', range: '90-99', title: 'Ritual_Eng', tags: ['Structure', 'Banishing', 'Egregore'] },
    ]
  },
  {
    id: '09',
    code: 'MOD_09',
    name: 'STRATEGY_SYNTHESIS',
    subtitle: 'Integration',
    icon: Compass,
    sections: [
      { id: '00', range: '00-09', title: 'Systems_Eng', tags: ['Requirements', 'Validation'] },
      { id: '01', range: '10-19', title: 'Design_Aesthetics', tags: ['UX', 'Color', 'Hierarchy'] },
      { id: '02', range: '20-29', title: 'Rhetoric_Comms', tags: ['Trivium', 'Logic', 'Negotiation'] },
      { id: '03', range: '30-39', title: 'Pedagogy', tags: ['Curriculum', 'Memory_Palace'] },
      { id: '04', range: '40-49', title: 'Research_Analysis', tags: ['Sci_Method', 'Stats_Sig'] },
      { id: '05', range: '50-59', title: 'Forensics', tags: ['Digital', 'Root_Cause', 'Interrogation'] },
      { id: '06', range: '60-69', title: 'Security_Risk', tags: ['OpSec', 'Risk_Registers'] },
      { id: '07', range: '70-79', title: 'Logistics_Ops', tags: ['Project_Mgmt', 'Critical_Path'] },
      { id: '08', range: '80-89', title: 'Warfare_Conflict', tags: ['Sun_Tzu', 'OODA', 'Asymmetry'] },
      { id: '09', range: '90-99', title: 'Polymathy', tags: ['Cross_Domain_Mapping'] },
    ]
  },
  {
    id: '10',
    code: 'MOD_10',
    name: 'TELEOLOGY_LIMITS',
    subtitle: 'Philosophy & End',
    icon: Infinity,
    sections: [
      { id: '00', range: '00-09', title: 'Ethics_Axiology', tags: ['Deontology', 'Virtue', 'Meta'] },
      { id: '01', range: '10-19', title: 'Bioethics_AI', tags: ['Transhumanism', 'Personhood'] },
      { id: '02', range: '20-29', title: 'Phil_Mind', tags: ['Consciousness', 'Dualism', 'Panpsych'] },
      { id: '03', range: '30-39', title: 'Comp_Theology', tags: ['Monotheism', 'Non-Dualism'] },
      { id: '04', range: '40-49', title: 'Thanatology', tags: ['Death', 'Grief', 'Bardo'] },
      { id: '05', range: '50-59', title: 'Initiation_Lineage', tags: ['Transmission', 'Vows'] },
      { id: '06', range: '60-69', title: 'The_Great_Work', tags: ['Theosis', 'Moksha', 'Individuation'] },
      { id: '07', range: '70-79', title: 'Existential_Risk', tags: ['Collapse', 'X-Risk'] },
      { id: '08', range: '80-89', title: 'Future_Studies', tags: ['Forecasting', 'Scenarios'] },
      { id: '09', range: '90-99', title: 'Apophatic_Silence', tags: ['Unknowing', 'Limit_Horizon'] },
    ]
  }
];

// --- Components ---

const Header = () => (
  <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6 bg-slate-950 p-4 rounded-t-lg sticky top-0 z-10">
    <div className="flex items-center space-x-2 text-indigo-400">
      <Terminal className="w-5 h-5" />
      <span className="font-mono text-sm tracking-[0.2em] font-bold">ARCHITECT OF THE INVISIBLE</span>
    </div>
    <div className="flex items-center space-x-4 text-xs font-mono text-slate-500">
      <div className="flex items-center">
        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse mr-2"></span>
        SYSTEM READY
      </div>
      <div>SEC_LEVEL: 0</div>
    </div>
  </div>
);

const ModuleCard = ({ module, isActive, onClick }: { module: Module, isActive: boolean, onClick: () => void }) => {
  const Icon = module.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 group relative overflow-hidden ${
        isActive 
          ? 'bg-slate-800 border-indigo-500/50 text-indigo-100 shadow-[0_0_15px_rgba(99,102,241,0.1)]' 
          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-700 hover:text-slate-200'
      }`}
    >
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-md ${isActive ? 'bg-indigo-950/50 text-indigo-400' : 'bg-slate-950 text-slate-600 group-hover:text-slate-400'}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className={`text-[10px] font-mono mb-0.5 tracking-wider ${isActive ? 'text-indigo-400' : 'text-slate-600'}`}>
              {module.code}
            </div>
            <div className="font-bold text-sm">{module.name}</div>
          </div>
        </div>
        {isActive && <ChevronRight className="w-4 h-4 text-indigo-500 animate-pulse" />}
      </div>
      
      {/* Background decoration */}
      {isActive && (
        <div className="absolute right-0 bottom-0 opacity-5">
           <Icon className="w-24 h-24 transform translate-x-4 translate-y-4" />
        </div>
      )}
    </button>
  );
};

const SectionRow = ({ section, moduleId }: { section: Section; moduleId: string }) => (
  <Link to={`/lesson/${moduleId}-${section.id}`} className="block">
    <div className="bg-slate-900 border border-slate-800 p-4 rounded hover:border-slate-700 transition-colors group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <FolderOpen className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
          <span className="font-mono text-xs text-slate-500">SEC_{section.id}</span>
        </div>
        <div className="font-mono text-[10px] text-slate-600 bg-slate-950 px-2 py-1 rounded">
          RANGE: [{section.range}]
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h4 className="text-slate-200 font-medium group-hover:text-white transition-colors">
          {section.title.replace(/_/g, " ")}
        </h4>
        <FileText className="w-4 h-4 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {section.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

export default function ArchitectOfTheInvisible() {
  const [activeId, setActiveId] = useState<string>('01');
  const activeModule = knowledgeBase.find(m => m.id === activeId) || knowledgeBase[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 font-sans selection:bg-indigo-900 selection:text-white">
      <div className="max-w-7xl mx-auto border border-slate-800 rounded-xl bg-slate-900 shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-2rem)]">
        <Header />
        
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Sidebar / Module List */}
          <div className="w-full lg:w-80 bg-slate-950 border-r border-slate-800 flex flex-col overflow-y-auto custom-scrollbar">
            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mb-4 px-1">
                <Search className="w-3 h-3" />
                <span>SELECT_MODULE</span>
              </div>
              {knowledgeBase.map((module) => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  isActive={activeId === module.id}
                  onClick={() => setActiveId(module.id)}
                />
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-slate-900/50 overflow-y-auto custom-scrollbar p-6 lg:p-10">
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300" key={activeId}>
              
              {/* Module Header */}
              <div className="mb-8 pb-6 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-indigo-500 mb-2 font-mono text-sm">
                  <Hash className="w-4 h-4" />
                  <span>{activeModule.code}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
                  {activeModule.name.replace(/_/g, ' ')}
                </h1>
                <p className="text-lg text-slate-400 font-light flex items-center">
                  <span className="w-8 h-[1px] bg-indigo-500/50 mr-3"></span>
                  {activeModule.subtitle}
                </p>
              </div>

              {/* Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeModule.sections.map((section) => (
                  <SectionRow key={section.id} section={section} moduleId={activeModule.id} />
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-12 p-4 rounded bg-slate-950 border border-slate-800/50 text-center">
                <div className="text-xs font-mono text-slate-600">
                  END_OF_MODULE // {activeModule.code} // AWAITING_INPUT
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
