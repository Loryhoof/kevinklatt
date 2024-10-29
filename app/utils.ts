import React from 'react';
import {
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiRust,
  SiCsharp,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiDigitalocean,
  SiVuedotjs,
  SiNuxtdotjs,
  SiDirectus,
  SiThreedotjs,
  SiNodedotjs,
} from 'react-icons/si';

const getIcon = (name: string, color: string): React.ReactNode | null => {
  const size = 30;

  switch (name) {
    case 'React':
      return React.createElement(SiReact, { className: `inline-block ${color}`, size });
    case 'Next.js':
      return React.createElement(SiNextdotjs, { className: `inline-block ${color}`, size });
    case 'JavaScript':
      return React.createElement(SiJavascript, { className: `inline-block ${color}`, size });
    case 'TypeScript':
      return React.createElement(SiTypescript, { className: `inline-block ${color}`, size });
    case 'Tailwind':
      return React.createElement(SiTailwindcss, { className: `inline-block ${color}`, size });
    case 'Express.js':
      return React.createElement(SiExpress, { className: `inline-block ${color}`, size });
    case 'PostgreSQL':
      return React.createElement(SiPostgresql, { className: `inline-block ${color}`, size });
    case 'MongoDB':
      return React.createElement(SiMongodb, { className: `inline-block ${color}`, size });
    case 'Rust':
      return React.createElement(SiRust, { className: `inline-block ${color}`, size });
    case 'Three.js':
      return React.createElement(SiThreedotjs, { className: `inline-block ${color}`, size });
    case 'Node.js':
      return React.createElement(SiNodedotjs, { className: `inline-block ${color}`, size });
    case 'C#':
      return React.createElement(SiCsharp, { className: `inline-block ${color}`, size });
    case 'Docker':
      return React.createElement(SiDocker, { className: `inline-block ${color}`, size });
    case 'Kubernetes':
      return React.createElement(SiKubernetes, { className: `inline-block ${color}`, size });
    case 'AWS':
      return React.createElement(SiAmazonaws, { className: `inline-block ${color}`, size });
    case 'DigitalOcean':
      return React.createElement(SiDigitalocean, { className: `inline-block ${color}`, size });
    case 'Vue.js':
      return React.createElement(SiVuedotjs, { className: `inline-block ${color}`, size });
    case 'Nuxt.js':
      return React.createElement(SiNuxtdotjs, { className: `inline-block ${color}`, size });
    case 'Directus':
      return React.createElement(SiDirectus, { className: `inline-block ${color}`, size });
    default:
      return null;
  }
};

export { getIcon };
