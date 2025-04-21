import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { skills } from './data/skills';
import { cn } from "../../../lib/utils";

export function MesCompetencesMobile() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 150%"],
    smooth: 1
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });

  const backgroundColor = useTransform(
    springProgress,
    [0, 1],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-16 px-4"
    >
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{ backgroundColor }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={cn(
              "text-3xl font-light tracking-tight text-white relative antialiased"
            )}>
              <span className="relative text-white">
                Mes Compétences
              </span>
            </h2>

            {/* Ligne de séparation */}
            <div className="w-full max-w-[20rem] relative mx-auto">
              <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/100 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/80 to-transparent h-px w-3/4" />
            </div>

            <p className="mt-3 text-sm text-[#86868b] font-light tracking-wide">
              Technologies et outils que j'utilise au quotidien
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              className={cn(
                "relative rounded-2xl p-4",
                "bg-gradient-to-br from-white/[0.03] to-white/[0.01]",
                "backdrop-blur-sm border border-white/[0.05]",
                "shadow-[0_0_30px_-12px_rgba(176,141,87,0.1)]"
              )}
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2 text-white">
                  {skill.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 