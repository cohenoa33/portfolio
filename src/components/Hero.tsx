import { Download, ArrowDown } from "lucide-react";
import { about } from "../data";

export function Hero() {
  const handleDownloadResume = () => {

    const resumeUrl = "/Noa_Rabin_Cohen_-_Full-Stack_Software_Engineer.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Noa_Rabin_Cohen_-_Full-Stack_Software_Engineer.pdf";
    link.click();
  };

  const handleClick = (
    e: React.MouseEvent<Element>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
   return (
     <section
       id="home"
       className="min-h-screen flex flex-col justify-between px-6 md:px-12 py-12 pt-32 relative"
     >
       {/* Main Content */}
       <div className="flex-1 flex items-center">
         <div className="max-w-6xl w-full">
           {/* Large Name Display */}
           <div className="mb-12">
             <div className="overflow-hidden mb-2">
               <h1 className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tighter">
                 NOA
               </h1>
             </div>
             <div className="overflow-hidden mb-2">
               <h1 className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tighter">
                 RABIN
               </h1>
             </div>
             <div className="overflow-hidden">
               <h1 className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tighter">
                 COHEN
               </h1>
             </div>
           </div>
           {/* Bio Grid */}
           <div className="gap-10 max-w-4xl">
             <div>
               <div className="mb-4 flex items-center gap-2">
                 <div className="w-12 h-px bg-black"></div>
                 <span className="text-sm tracking-[0.3em] uppercase">
                   About
                 </span>
               </div>
               {about.map(p => <p className="text-lg leading-relaxed mb-2" key={p}>{p}</p>)}
               <button
                 onClick={handleDownloadResume}
                 className="group relative px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto"
               >
                 <span className="flex items-center justify-center gap-3 tracking-wider uppercase text-sm">
                   <span>Download Resume</span>
                   <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                 </span>
               </button>
             </div>
           </div>
         </div>
       </div>

       {/* Scroll Indicator */}
       <div className="flex justify-center animate-bounce">
         <ArrowDown className="w-6 h-6"  onClick={(e) => handleClick(e, "#skills")}/>
       </div>
     </section>
   );
}