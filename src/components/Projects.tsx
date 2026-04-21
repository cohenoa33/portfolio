import { ExternalLink } from "lucide-react";
import { projects } from "../data";
import { ReactElement } from "react";
import { SiGithub } from "react-icons/si";
import { MdWebAsset } from "react-icons/md";

const icons: ReactElement[] = [<MdWebAsset size={20} />, <SiGithub size={20} />];


export function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-24 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-[0.3em] uppercase text-(--text-primary)/30">
              03
            </span>
            <div className="h-px flex-1 bg-(--ring)"></div>
          </div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter">
            Projects
          </h2>
        </div>

        <div className="gap-10 max-w-4xl">
          {/* Project */}
          {projects.map((project) => (
            <div>
              <h3 className="space-y-6 text-2xl tracking-tight uppercase text-foreground">
                {project.name}
              </h3>

              <div key={project.name}>
                {project.description.map((p, index) => (
                  <p
                    className="text-lg leading-relaxed mb-2 text-foreground"
                    key={`${project.name}-desc-${index+1}`}
                  >
                    {p}
                  </p>
                ))}
              </div>  
              <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                {project.links.map((link, index) => (
                  <a
                    key={`${link.name}-${index + 1}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-6 border-2 border-(--ring) text-(--text-primary) hover:bg-(--bg-secondary) hover:text-(--text-secondary) transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      {icons[index]}
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase opacity-60 mb-1">
                          {link.name}
                        </p>
                        <p className="text-lg tracking-tight">{link.value}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="sr-only">{link.span}</span>
                  </a>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
