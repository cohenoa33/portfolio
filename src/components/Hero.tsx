import { Download, ArrowDown } from "lucide-react";
import { about } from "../data";

export function Hero() {
  const handleDownloadResume = () => {
    // analytics only — no window.open, no fetch, no programmatic click
    // e.g. track("resume_download");
  };
  const resumeUrl = "/Noa_Rabin_Cohen_-_Full-Stack_Software_Engineer.pdf";

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between px-6 md:px-12 py-12 pt-32 relative transition-colors duration-200"
    >
      {/* Main Content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl w-full">
          {/* Large Name Display */}
          <div className="mb-12">
            <div className="overflow-hidden mb-2">
              <h1 className="text-[clamp(3rem,20vw,10rem)] md:text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tighter ">
                NOA
                <span className="sr-only">
                  Rabin Cohen — Full-Stack Engineer in Seattle
                </span>
              </h1>
              <div className="overflow-hidden mb-2">
                <div className="text-[clamp(3rem,20vw,10rem)] md:text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tighter font-medium text-foreground">
                  RABIN
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="text-[clamp(3rem,20vw,10rem)] md:text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tighter font-medium text-foreground">
                  COHEN
                </div>
              </div>
            </div>
          </div>
          {/* Bio Grid */}
          <div className="gap-10 max-w-4xl">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="w-12 h-px bg-ring"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-foreground">
                  About
                </span>
              </div>
              {about.map((p) => (
                <p
                  className="text-lg leading-relaxed mb-2 text-foreground"
                  key={p}
                >
                  {p}
                </p>
              ))}
              <a href={resumeUrl} download>
                <button
                  onClick={handleDownloadResume}
                  className="group relative px-8 py-4 border-2 border-(--text-primary) hover:border-(--ring) hover:text-(--ring) transition-all duration-300 w-full md:w-auto"
                >
                  <span className="flex items-center justify-center gap-3 tracking-wider uppercase text-sm">
                    <span>Download Resume</span>
                    <Download className="w-4 h-4 group-hover:translate-y-1" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center animate-bounce text-foreground">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}
