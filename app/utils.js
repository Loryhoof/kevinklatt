import { SiPostgresql, SiMongodb, SiReact, SiNextDotJs, SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiRust, SiDotNet, SiNextdotjs, SiThreedotjs, SiTypeform, SiNodedotjs, SiCsharp, SiDocker, SiKubernetes, SiAwslambda, SiAwsamplify, SiWasmcloud, SiAmazon, SiAmazonaws, SiDigitalocean, SiVuedotjs, SiNuxtdotjs, SiDirectus } from 'react-icons/si';


const getIcon = (name, color) => {

    const size = 30; 
  
    switch (name) {
      case "React":
        return <SiReact className={`inline-block ${color}`} size={size} />;
      case "Next.js":
        return <SiNextdotjs className={`inline-block ${color}`} size={size} />;
      case "JavaScript":
        return <SiJavascript className={`inline-block ${color}`} size={size} />;
      case "TypeScript":
        return <SiTypescript className={`inline-block ${color}`} size={size} />;
      case "Tailwind":
        return <SiTailwindcss className={`inline-block ${color}`} size={size} />;
      case "Express.js":
        return <SiExpress className={`inline-block ${color}`} size={size} />;
      case "PostgreSQL":
        return <SiPostgresql className={`inline-block ${color}`} size={size} />;
      case "MongoDB":
        return <SiMongodb className={`inline-block ${color}`} size={size} />;
      case "Rust":
        return <SiRust className={`inline-block ${color}`} size={size} />;
      case "Three.js":
        return <SiThreedotjs className={`inline-block ${color}`} size={size} />;
      case "Node.js":
        return <SiNodedotjs className={`inline-block ${color}`} size={size} />;
      case "Next.js (API Routes)":
        return <SiNextdotjs className={`inline-block ${color}`} size={size} />;
      case "C#":
        return <SiCsharp className={`inline-block ${color}`} size={size} />;
      case "Docker":
        return <SiDocker className={`inline-block ${color}`} size={size} />;
      case "Kubernetes":
        return <SiKubernetes className={`inline-block ${color}`} size={size} />;
      case "AWS":
        return <SiAmazonaws className={`inline-block ${color}`} size={size} />;
      case "DigitalOcean":
        return <SiDigitalocean className={`inline-block ${color}`} size={size} />;
      case "Vue.js":
        return <SiVuedotjs className={`inline-block ${color}`} size={size} />;
      case "Nuxt.js":
        return <SiNuxtdotjs className={`inline-block ${color}`} size={size} />;
      case "Directus":
        return <SiDirectus className={`inline-block ${color}`} size={size} />;
      default:
        return null;
    }
  };

  export {getIcon}