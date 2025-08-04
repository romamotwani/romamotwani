import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Internships() {
  const section = useScrollFadeIn<HTMLDivElement>();
  return (
    <div className="max-w-4xl mx-auto px-4 py-16" ref={section.ref}>
      <h1 className="text-3xl font-bold mb-4">Internship Experience</h1>
      <p>Add your internship details here…</p>
    </div>
  );
}