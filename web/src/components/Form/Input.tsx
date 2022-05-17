interface Props {
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function Input({ label, value, onChange }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label className="text-sm">{label}</label>
      <input
        type="text"
        className="bg-zinc-800 text-sm h-12 rounded px-4 text-slate-300 outline-none text-md"
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  );
}