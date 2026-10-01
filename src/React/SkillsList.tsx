import { useState } from "react";

const CategoryIcons = {
  "Web Application Pentesting": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  "CTFs & Offensive Security": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
  ),
  "Tooling & Automation": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Application Pentesting": [
      "OWASP Top 10 vulnerability assessment",
      "XSS, CSRF, SSRF & SQL Injection",
      "Path Traversal, RCE & authentication bypass",
    ],
    "CTFs & Offensive Security": [
      "Web exploitation & cryptography challenges",
      "Active on Root-Me and TryHackMe",
      "Vulnerability discovery & exploitation",
    ],
    "Tooling & Automation": [
      "Custom web vulnerability scanner",
      "Python, Java & Selenium automation",
      "Burp Suite, Nmap, ffuf, Sqlmap",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category as keyof typeof CategoryIcons]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
