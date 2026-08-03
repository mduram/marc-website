type FigureSlotProps = {
  number: string;
  label: string;
  path: string;
  tone?: "orange" | "cyan" | "violet";
  className?: string;
};

const tones = {
  orange: "text-[#ff8a70]",
  cyan: "text-[#a9dce7]",
  violet: "text-[#cfc3f3]",
};

export default function FigureSlot({
  number,
  label,
  path,
  tone = "orange",
  className = "",
}: FigureSlotProps) {
  return (
    <div data-media-path={path} className={`media-field relative min-h-72 border border-white/12 ${className}`}>
      <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.13em] text-white/34">
        <span>{number}</span>
        <span className={tones[tone]}>Media pending</span>
      </div>
      <div className="absolute inset-x-5 bottom-5 z-10">
        <div className="mb-4 h-px w-full bg-white/18" />
        <p className="max-w-sm text-sm leading-6 text-white/58">{label}</p>
      </div>
    </div>
  );
}
