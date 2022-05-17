export function Header() {
  return (
    <header className="flex flex-col items-center gap-5 object-fill">
      <img
        className="h-10 w-10"
        src="/assets/logo.svg"
        alt="Logo"
      />
      <h1 className="font-bold text-xl text-center text-sky-500">my<span className="text-slate-200">Tracodes</span></h1>
    </header>
  );
}