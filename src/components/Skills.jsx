import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCss3Alt } from 'react-icons/fa';
import { 
  SiHtml5, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiDocker 
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 8rem 8%;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 5%;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-white);

    span {
      color: var(--accent-green);
    }
  }

  p {
    color: var(--gray-dark);
    margin-top: 0.5rem;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: var(--bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.8rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  svg {
    font-size: 2.8rem;
    color: var(--text-muted);
    transition: all 0.3s ease;
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-white);
    transition: color 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(135deg, var(--accent-purple), var(--accent-green));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.25);

    &::before {
      opacity: 1;
    }

    svg {
      color: var(--accent-green);
      transform: scale(1.1);
    }

    span {
      color: var(--accent-purple);
    }
  }
`;

const skillsData = [
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Docker', icon: <SiDocker /> },
];

export const Skills = () => {
  return (
    <SkillsSection id="tecnologias">
      <SectionHeader
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Minhas <span>Tecnologias</span></h2>
        <p>Ferramentas & Ecossistema</p>
      </SectionHeader>

      <Grid>
        {skillsData.map((skill, index) => (
          <SkillCard
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <span>{skill.name}</span>
          </SkillCard>
        ))}
      </Grid>
    </SkillsSection>
  );
};