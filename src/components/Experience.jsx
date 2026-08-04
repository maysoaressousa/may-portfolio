import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiAward, FiUsers } from 'react-icons/fi';

const ExperienceSection = styled.section`
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
  margin-bottom: 5rem;

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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      var(--accent-purple) 0%,
      var(--accent-green) 50%,
      transparent 100%
    );

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${({ $position }) => ($position === 'left' ? 'flex-end' : 'flex-start')};
  padding-bottom: 3.5rem;
  position: relative;
  width: 50%;
  left: ${({ $position }) => ($position === 'left' ? '0' : '50%')};

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 50px;
    justify-content: flex-start;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  ${({ $position }) => ($position === 'left' ? 'right: -15px;' : 'left: -15px;')}
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 2px solid var(--accent-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-green);
  font-size: 0.85rem;
  z-index: 2;
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);

  @media (max-width: 768px) {
    left: 5px;
  }
`;

const TimelineContent = styled.div`
  background: var(--bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.8rem;
  width: 90%;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-purple);
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemRole = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 0.3rem;
`;

const ItemCompany = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-purple);
  margin-bottom: 0.8rem;
`;

const PeriodTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--accent-green);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1rem;
  background: rgba(0, 255, 178, 0.08);
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
`;

const Description = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const experienceData = [
  {
    id: 1,
    role: 'Desenvolvedora Web & Freelancer',
    company: 'Projetos Autônomos & Clientes',
    period: '2025 – Presente',
    icon: <FiBriefcase />,
    description: 'Criação de e-commerces, landing pages e aplicações web sob medida utilizando React, Next.js e Node.js. Foco em UX sofisticado, integração com APIs e banco de dados.',
    position: 'left',
  },
  {
    id: 2,
    role: 'Voluntária de Comunidades Tech',
    company: 'House JS Fortaleza & Front End Ceará',
    period: '2025 – Presente',
    icon: <FiUsers />,
    description: 'Atuação ativa na organização e engajamento da comunidade de tecnologia do Ceará, apoiando eventos de ecossistema JavaScript e compartilhamento de conhecimento.',
    position: 'right',
  },
  {
    id: 3,
    role: 'Participação em Hackathon',
    company: '3ª Edição Hackathon M. Dias Branco / UniforHub',
    period: 'Mai – Jun / 2025',
    icon: <FiAward />,
    description: 'Desenvolvimento intensivo de soluções tecnológicas focadas em problemas corporativos reais em equipe multidisciplinar, aplicando prototipagem rápida e desenvolvimento ágil.',
    position: 'left',
  },
  {
    id: 4,
    role: 'Formação Desenvolvedora Full Stack',
    company: 'Geração Tech 2.0 – IEL-CE',
    period: 'Mar – Jun / 2025',
    icon: <FiBriefcase />,
    description: 'Capacitação prática em desenvolvimento web de ponta a ponta, abrangendo construção de APIs, modelagem de banco de dados e arquitetura de interfaces modernas.',
    position: 'right',
  },
];

export const Experience = () => {
  return (
    <ExperienceSection id="experiencia">
      <SectionHeader
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Minha <span>Trajetória</span></h2>
        <p>Experiência & Histórico</p>
      </SectionHeader>

      <TimelineContainer>
        {experienceData.map((item) => (
          <TimelineItem
            key={item.id}
            $position={item.position}
            initial={{ opacity: 0, x: item.position === 'left' ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
            viewport={{ once: true }}
          >
            <TimelineDot $position={item.position}>{item.icon}</TimelineDot>
            <TimelineContent>
              <ItemRole>{item.role}</ItemRole>
              <ItemCompany>{item.company}</ItemCompany>
              <PeriodTag>
                <FiCalendar /> {item.period}
              </PeriodTag>
              <Description>{item.description}</Description>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ExperienceSection>
  );
};