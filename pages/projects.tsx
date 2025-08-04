const projects = [
  {
    title: "Project One",
    description: "Short project description",
    link: "https://github.com/you/project-one"
  }
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(p => (
          <a
            key={p.title}
            href={p.link}
            className="border rounded p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm mt-2">{p.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}