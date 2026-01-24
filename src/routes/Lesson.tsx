import { Link, useParams } from "react-router-dom";
import { CURRICULUM } from "../data/curriculum";

export default function Lesson() {
  const { id } = useParams();

  const flat = CURRICULUM.flatMap((m) =>
    m.sections.map((s) => ({ ...s, module: m }))
  );
  const idx = flat.findIndex((x) => x.id === id);
  const item = idx >= 0 ? flat[idx] : null;

  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  if (!item) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 p-6 font-mono">
        <Link to="/" className="underline text-slate-400">
          ← home
        </Link>
        <div className="mt-6">Unknown lesson: {id}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6">
          <Link
            to="/"
            className="px-3 py-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800"
          >
            ← home
          </Link>

          <div className="text-xs text-slate-500">{item.module.title}</div>

          <div className="flex gap-2">
            {prev ? (
              <Link
                to={`/lesson/${prev.id}`}
                className="px-3 py-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800"
              >
                ← prev
              </Link>
            ) : (
              <span className="px-3 py-2 rounded bg-slate-950 border border-slate-900 text-slate-700">
                ← prev
              </span>
            )}

            {next ? (
              <Link
                to={`/lesson/${next.id}`}
                className="px-3 py-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800"
              >
                next →
              </Link>
            ) : (
              <span className="px-3 py-2 rounded bg-slate-950 border border-slate-900 text-slate-700">
                next →
              </span>
            )}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="text-sm text-slate-400 mb-2">{item.id}</div>
          <h1 className="text-xl font-bold text-slate-100 mb-2">{item.label}</h1>
          <div className="text-slate-400 mb-6">{item.desc}</div>

          <div className="text-slate-300">
            Replace this with the Gemini-generated lesson content for this section.
          </div>
        </div>
      </div>
    </div>
  );
}
