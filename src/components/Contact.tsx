import {
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";
import { contactInfo, socialLinks } from "../data";
import { ReactElement } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const icons: Record<string, ReactElement> = {
  Mail: <Mail className="w-6 h-6" />,
  Phone: <Phone className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Linkedin: <SiLinkedin size={20} />,
  Github: <SiGithub size={20} />
};

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400">
              03
            </span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter">
            Let's Connect
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl mb-8 tracking-tight">Contact Information</h3>
            <div className="space-y-6">
              {" "}
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center justify-between p-6 flex-col gap-4"
                >
                  <div className="flex items-start gap-4 w-full xs:w-auto">
                    <div className="p-3 border border-black group-hover:bg-black group-hover:text-white transition-colors">
                      {icons[item.icon]}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg hover:opacity-60 transition-opacity inline-block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl mb-8 tracking-tight">Social Links</h3>
            <div className="space-y-6">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {icons[item.icon]}
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase opacity-60 mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg tracking-tight">{item.value}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span className="sr-only">
                    {item.span}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Noa Rabin Cohen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}