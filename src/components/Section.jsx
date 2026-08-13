export default function Section() {
  return (
    <section className="w-full p-5 bg-amber-100 flex">
      <div className="flex-1">
        <span className="font-semibold">Tech Stack:</span>
        <ul className="list-inside list-disc">
          <li>Vite</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
        </ul>
      </div>
    </section>
  );
}