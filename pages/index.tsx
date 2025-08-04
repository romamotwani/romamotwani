import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Home() {
  const intro = useScrollFadeIn<HTMLDivElement>();
  return (
    <section
      ref={intro.ref}
      className="max-w-4xl mx-auto px-4 flex flex-col gap-6 justify-center h-[calc(100vh-4rem)]"
    >
      <h2 className="text-brand text-lg">Hi, my name is</h2>
      <h1 className="text-4xl sm:text-6xl font-extrabold">Your Name</h1>
      <p className="max-w-2xl">
        I'm a software developer who loves building delightful user experiences.
      </p>
    </section>
  );
}