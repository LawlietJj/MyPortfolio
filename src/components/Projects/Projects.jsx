import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import northhavenImage from "./northhaven.png";
import clearanceImage from "./clearance system.png";
import campusConnectImage from "./campuusconnect.png";
import autoworldimage from "./auto.png"
import examImage from "./examparser.png"
import skyImage from "./skyimage.png"
import checklosImage from "./checklos.png"
import exoticImage from "./exotic.png"

const githubProfile = "https://github.com/LawlietJj";

const projects = [
  {
    number: "01",
    title: "Campus Connect",
    subtitle: "Enterprise Student Platform",
    image: campusConnectImage,
    description:
      "A modern university platform connecting students and administrators through announcements, safety alerts, academic services and real-time communication.",
    stack: [
      "Flutter",
      "ASP.NET Core",
      "MySQL",
      "REST API",
      "Azure",
    ],
    github: githubProfile,
  },

  {
    number: "02",
    title: "AutoWorld",
    subtitle: "Automotive Marketplace",
    image: autoworldimage,
    description:
      "A modern automotive platform that enables users to explore vehicle listings, compare specifications and browse detailed car information.",
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
      "CarQuery API",
    ],
    github: githubProfile,
  },

  {
    number: "03",
    title: "Sky Inventory",
    subtitle: "ERP & Inventory",
    image: skyImage,
    description:
      "Inventory and sales management platform with authentication, dashboards and cloud deployment.",
    stack: [
      "Django",
      "Azure",
      "MySQL",
      "Python",
    ],
    github: githubProfile,
  },

  {
    number: "04",
    title: "North Haven",
    subtitle: "Corporate Website",
    image: northhavenImage,
    description:
      "A premium corporate website focused on elegant branding and responsive user experience.",
    stack: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Vite",
    ],
    github: githubProfile,
    live: "https://northhaven.com.ng/",
  },

  {
    number: "05",
    title: "ExamParser",
    subtitle: "AI Exam Processing Platform",
    image: examImage,
    description:
      "AI powered OCR platform for converting scanned examination papers into structured digital content.",
    stack: [
      "React",
      "PHP",
      "Gemini AI",
      "OCR",
      "Tailwind",
    ],
    github: githubProfile,
  },

  {
    number: "06",
    title: "Online Clearance",
    subtitle: "University Clearance System",
    image: clearanceImage,
    description:
      "A university clearance platform connecting departments through automated approvals and status tracking.",
    stack: [
      "HTML",
      "CSS",
      "PHP",
      "JavaScript",
      "MySQL",
    ],
    github: githubProfile,
  },

  {
    number: "07",
    title: "Checklos",
    subtitle: "African Marketplace",
    image: checklosImage,
    description:
      "An e-commerce platform connecting makers of African products with customers around the world.",
    stack: ["TypeScript", "Next.js","Express",  "AWS Cloud"],
    github: githubProfile,
    live: "https://www.checklos.com/products",
  },

  {
    number: "08",
    title: "Exotic Collections",
    subtitle: "Kidswear POS & Inventory",
    image: exoticImage,
    description:
      "A point-of-sale and inventory system built for a children's clothing business.",
    stack: ["MySQL", "React", "Express", "Node.js", "Hostinger"],
    github: githubProfile,
    live: "https://pos.exoticcollections.com.ng/login",
  },
];

export default function Projects() {

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const project = projects[current];

  useEffect(() => {

    if (paused) return;

    const timer = setInterval(() => {

      setCurrent(prev => (prev + 1) % projects.length);

    }, 10000);

    return () => clearInterval(timer);

  }, [paused]);

  const nextProject = () =>
    setCurrent(prev => (prev + 1) % projects.length);

  const previousProject = () =>
    setCurrent(prev => (prev - 1 + projects.length) % projects.length);

  return (

<section
    id="projects"
    className="min-h-screen flex items-center py-20 lg:py-0"
>

<div className="w-full">

<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">

<motion.p

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

className="uppercase tracking-[0.35em] text-center text-sm text-white/35 mb-5"
>

Featured Work

</motion.p>

<motion.h2

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

className="text-4xl sm:text-5xl lg:text-6xl text-center font-light leading-tight max-w-4xl mx-auto"
>

Building products

<br/>

that solve real problems.

</motion.h2>

</div>

<div className="w-[94vw] max-w-[1700px] mx-auto">

{/* ===================== DESKTOP ===================== */}

<div className="hidden lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">

<motion.div

initial={{opacity:0,x:-60}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}
>

<p className="text-6xl xl:text-7xl font-extralight text-white/20 mb-10">

{project.number}

</p>

<h3 className="text-5xl xl:text-6xl font-light leading-none mb-5">

{project.title}

</h3>

<p className="text-xl text-white/45 mb-8">

{project.subtitle}

</p>

<p className="leading-8 text-white/55 max-w-lg">

{project.description}

</p>

<div className="grid grid-cols-2 gap-y-4 gap-x-10 mt-12">

{project.stack.map(item=>(

<div
key={item}
className="flex items-center gap-3"
>

<div className="w-1.5 h-1.5 rounded-full bg-white/25"/>

<span className="uppercase tracking-[0.22em] text-sm text-white/40">

{item}

</span>

</div>

))}

</div>

<div className="flex gap-8 mt-14">

{project.live && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="uppercase tracking-[0.22em] text-sm text-white/35 hover:text-white transition"
  >
    Live Site ↗
  </a>
)}

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="uppercase tracking-[0.22em] text-sm text-white/35 hover:text-white transition"
>

GitHub ↗

</a>
<Link
  to="/projects"
  className="text-white hover:text-white/70 transition"
>
  View All Projects →
</Link>

</div>

</motion.div>{/* ===================== DESKTOP PREVIEW ===================== */}

<div className="hidden lg:flex justify-end">

  <AnimatePresence mode="wait">

    <motion.div
      key={current}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{
        duration: .55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        w-170
        h-107.5
        rounded-3xl
        overflow-hidden
        border
        border-white/10
        bg-white/3
        backdrop-blur-2xl
        shadow-[0_30px_80px_rgba(0,0,0,.25)]
      "
    >

      {/* Browser Bar */}

      <div className="h-12 border-b border-white/10 bg-white/4 flex items-center px-5">

        <div className="flex gap-2">

          <div className="w-3 h-3 rounded-full bg-red-400/80" />

          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />

          <div className="w-3 h-3 rounded-full bg-green-400/80" />

        </div>

        <div className="mx-auto uppercase tracking-[0.25em] text-xs text-white/25">

          {project.title}

        </div>

      </div>

      <img
        src={project.image}
        alt={project.title}
        className="
          w-full
          h-[calc(100%-48px)]
          object-cover
          object-top
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

    </motion.div>

  </AnimatePresence>

</div>

</div>

{/* ===================== DESKTOP NAVIGATION ===================== */}

<div className="hidden lg:flex justify-between items-center mt-12">

  <button
    onClick={previousProject}
    className="
      uppercase
      tracking-[0.22em]
      text-sm
      text-white/35
      hover:text-white
      transition
    "
  >
    ← Previous
  </button>

  <div className="flex gap-3">

    {projects.map((_, index) => (

      <div
        key={index}
        className={`
          h-0.5
          transition-all
          duration-500
          ${
            current === index
              ? "bg-white w-12"
              : "bg-white/15 w-8"
          }
        `}
      />

    ))}

  </div>

  <button
    onClick={nextProject}
    className="
      uppercase
      tracking-[0.22em]
      text-sm
      text-white/35
      hover:text-white
      transition
    "
  >
    Next →
  </button>

</div>

{/* ===================== MOBILE / TABLET ===================== */}

<div className="lg:hidden mt-16">

  <AnimatePresence mode="wait">

    <motion.div
      key={current}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: .5,
      }}
      className="
        rounded-[28px]
        border
        border-white/10
        bg-white/3
        backdrop-blur-2xl
        overflow-hidden
      "
    >

      {/* Image */}

      <div className="relative">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-65
            object-cover
            object-top
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-6">

          <p className="text-5xl font-extralight text-white/60">

            {project.number}

          </p>

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-3xl font-light">

          {project.title}

        </h3>

        <p className="text-white/45 mt-2">

          {project.subtitle}

        </p>

        <p className="text-white/55 leading-7 mt-6">

          {project.description}

        </p>

        <div className="grid grid-cols-2 gap-y-4 mt-8">

          {project.stack.map(item => (

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />

              <span className="text-sm text-white/50">

                {item}

              </span>

            </div>

          ))}

        </div>

        <div className="flex justify-between ">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-10 uppercase tracking-[0.22em] text-sm text-white/35 hover:text-white transition"
            >
              Live Site ↗
            </a>
          )}

          <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            mt-10
            uppercase
            tracking-[0.22em]
            text-sm
            text-white/35
            hover:text-white
            transition
          "
        >
            GitHub ↗
          </a>
          <Link
              to="/projects"
              className="text-white hover:text-white/70 transition mt-10 text-[13px]"
            >
              View All Projects →
          </Link>

        </div>



      </div>

    </motion.div>

  </AnimatePresence>
</div>{/* ===================== MOBILE NAVIGATION ===================== */}

<div className="lg:hidden mt-10">

  <div className="flex items-center justify-between">

    <button
      onClick={previousProject}
      className="
        h-12
        w-12
        rounded-full
        border
        border-white/10
        bg-white/3
        text-xl
        text-white/60
        hover:bg-white/6
        hover:text-white
        transition-all
      "
    >
      ←
    </button>

    <div className="flex items-center gap-2">

      {projects.map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`
            rounded-full
            transition-all
            duration-500
            ${
              current === index
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }
          `}
        />

      ))}

    </div>

    <button
      onClick={nextProject}
      className="
        h-12
        w-12
        rounded-full
        border
        border-white/10
        bg-white/3
        text-xl
        text-white/60
        hover:bg-white/6
        hover:text-white
        transition-all
      "
    >
      →
    </button>

  </div>

  <p className="mt-5 text-center text-white/25 uppercase tracking-[0.25em] text-xs">

    {current + 1} / {projects.length}

  </p>

</div>

</div>

</div>

</section>

  );

}