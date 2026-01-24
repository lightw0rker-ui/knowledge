export type Section = { id: string; label: string; desc: string };
export type Module = { id: string; title: string; subtitle: string; sections: Section[] };

export const CURRICULUM: Module[] = [
  {
    id: "MODULE_01_AXIOMATICS_LOGOS",
    title: "MODULE_01_AXIOMATICS_LOGOS",
    subtitle: "Mathematics & Metaphysics",
    sections: [
      { id: "01-00", label: "SEC_00 [00-09] :: Metaphysical_Foundations", desc: "Ontology, Void, Emanation" },
      { id: "01-01", label: "SEC_01 [10-19] :: Formal_Logic_Set_Theory", desc: "ZFC, Incompleteness, Modal" },
    ],
  },
  {
    id: "MODULE_02_HYLOMORPHIC_SUBSTRATE",
    title: "MODULE_02_HYLOMORPHIC_SUBSTRATE",
    subtitle: "Physics & Matter",
    sections: [
      { id: "02-00", label: "SEC_00 [00-09] :: Classical_Mechanics", desc: "Lagrangian, Resonance" },
      { id: "02-01", label: "SEC_01 [10-19] :: Electromagnetism_Optics", desc: "Maxwell, Photonics, Waves" },
    ],
  },
];
