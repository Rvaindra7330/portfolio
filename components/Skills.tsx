export default function Skills() {
  const skills = [
    "NextJS","ReactJS","JavaScript","TypeScript",
    "Prisma","Postgres","Tailwind","NodeJS",
    "Express","Git","Turborepo","Redis","Docker",
  ];

  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
