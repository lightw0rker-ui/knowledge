import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Module } from "../data/curriculum";

export default function DirectoryTree({ modules }: { modules: Module[] }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return modules;

    return modules
      .map((m) => ({
        ...m,
        sections: m.sections.filter((s) =>
          (s.label + " " + s.desc).toLowerCase().includes(query)
        ),
      }))
      .filter((m) => m.sections.length > 0);
  }, [modules, q]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="text-slate-400 text-xs mb-3">ROOT_DIRECTORY:</div>
        <div className="text-2xl font-bold tracking-widest mb-6">
          QUANTUM_META_GOD_ARCHITECT/
        </div>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="search modules / sections…"
          className="w-full mb-6 px-4 py-3 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-600"
        />

        <div className="space-y-4">
          {filtered.map((m) => {
            const isOpen = open[m.id] ?? true;
            return (
              <div
                key={m.id}
                className="border border-slate-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpen((p) => ({ ...p, [m.id]: !isOpen }))}
                  className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-slate-100 font-semibold">
                        {m.title}/
                      </div>
                      <div className="text-xs text-slate-500">
                        [{m.subtitle}]
                      </div>
                    </div>
                    <div className="text-xs text-slate-500">
                      {isOpen ? "—" : "+"}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 py-3 bg-slate-950">
                    <div className="space-y-2">
                      {m.sections.map((s) => (
                        <div
                          key={s.id}
                          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                        >
                          <div className="text-slate-300">
                            <span className="text-slate-500">├── </span>
                            <span>{s.label}</span>
                            <span className="text-slate-600"> ({s.desc})</span>
                          </div>
                          <Link
                            to={`/lesson/${s.id}`}
                            className="text-xs px-3 py-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 w-max"
                          >
                            open
                          </Link>
                        </div>
                      ))}
                      {m.sections.length === 0 && (
                        <div className="text-xs text-slate-600">no matches</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
