import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiServer, 
  FiGlobe, 
  FiLayout, 
  FiCpu, 
  FiSettings 
} from 'react-icons/fi';

const ServicesSection = styled.section`
  padding: 8rem 8%;
  background: var(--bg-secondary);
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
      color: var(--accent-purple);
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--bg-primary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;

  .icon-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: rgba(0, 255, 178, 0.08);
    color: var(--accent-green);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-white);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 15px 30px -10px rgba(139, 92, 246, 0.25);

    .icon-wrapper {
      background: var(--accent-purple);
      color: var(--text-white);
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    }
  }
`;

const servicesData = [
  {
    icon: <FiCode />,
    title: 'Desenvolvimento Front-end',
    description: 'Criação de interfaces web responsivas, dinâmicas e otimizadas com React, TypeScript e Tailwind CSS.'
  },
  {
    icon: <FiServer />,
    title: 'Desenvolvimento Back-end',
    description: 'Construção de APIs robustas e escaláveis utilizando Node.js, Express e integração com bancos de dados.'
  },
  {
    icon: <FiGlobe />,
    title: 'APIs RESTful',
    description: 'Arquitetura e implementação de endpoints limpos, seguros e bem documentados para integração de sistemas.'
  },
  {
    icon: <FiLayout />,
    title: 'Landing Pages High-End',
    description: 'Páginas institucionais e promocionais de alta conversão, com visual refinado e animações fluidas.'
  },
  {
    icon: <FiCpu />,
    title: 'Sistemas Web Sob Medida',
    description: 'Desenvolvimento de dashboards interativos, e-commerces e plataformas completas focadas na regra de negócio.'
  },
  {
    icon: <FiSettings />,
    title: 'Manutenção & Consultoria',
    description: 'Otimização de performance de código, refatoração, acessibilidade e correção de problemas técnicos.'
  }
];

export const Services = () => {
  return (
    <ServicesSection id="servicos">
      <SectionHeader
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Meus <span>Serviços</span></h2>
        <p>Soluções Digitais</p>
      </SectionHeader>

      <Grid>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="icon-wrapper">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </Grid>
    </ServicesSection>
  );
};