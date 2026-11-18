import type { ProjectStatus } from "@/data/projects";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className="rounded-full border px-2.5 py-1 font-mono text-[11px]" style={{ borderColor: "var(--border)" }}>{status}</span>;
}
