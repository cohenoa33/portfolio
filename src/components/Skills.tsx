import { skillCategories } from "../data";
import { ReactElement } from "react";



export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400">
              02
            </span>
            <div className="h-px flex-1 bg-gray-800"></div>
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
                <span className="text-6xl tracking-tighter opacity-20 group-hover:opacity-40 transition-opacity">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl tracking-tight">{category.title}</h3>
              </div>
              <div className="space-y-3 pl-20">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform"
                  >
                    <div className="w-1 h-1 bg-white group-hover/item:w-8 transition-all duration-300"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}