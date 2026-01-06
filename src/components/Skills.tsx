import { skillCategories, skillsGeneral } from "../data";

export function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-24 bg-(--bg-secondary) text-(--text-secondary) transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-[0.3em] uppercase text-(--text-secondary)/30">
              02
            </span>
            <div className="h-px flex-1 bg-(--ring)"></div>
          </div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter">
            Skills & Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-6xl tracking-tighter opacity-40 group-hover:opacity-65 transition-opacity">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl tracking-tight">{category.title}</h3>
              </div>
              <div className="space-y-3 pl-20 text-(--text-secondary)">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform "
                  >
                    <div className="w-0 h-1 hover:w-8 group-hover/item:w-8 transition-all duration-300 bg-(--bg-primary) rounded-[50px]"></div>
                    <span className="group-hover/item:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-lg text-(--text-secondary) opacity-80 max-w-3xl mx-auto text-center">
          {skillsGeneral}
        </p>
      </div>
    </section>
  );
}
