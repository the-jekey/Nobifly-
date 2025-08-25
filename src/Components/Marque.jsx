import React from 'react'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from './LogoLoop';

const techLogos = [
       { node: <SiReact />, title: "React", href: "https://react.dev" },
       { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
       { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
       { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
       { src: "./logo-4.png", alt: "Company 1", href: "" },
       { src: "./logo-2.png", alt: "Company 2", href: "" },
       { src: "./logo-3.png", alt: "Company 3", href: "" },
];
const Marque = () => {
       return (
              <div className='bg-[#f1f1f1]' style={{ height: '', position: 'relative', overflow: 'hidden' }}>
                     <LogoLoop
                            logos={techLogos}
                            speed={120}
                            direction="left"
                            logoHeight={52}
                            gap={40}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#f1f1f1       "
                            ariaLabel="Technology partners"
                     />
              </div>
       )
}

export default Marque
