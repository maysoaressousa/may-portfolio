import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const StatsSection = styled.section`
  padding: 5rem 8%;
  background: var(--bg-primary);
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--accent-purple);
  }
`;

const NumberText = styled.div`
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--accent-green);
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--accent-purple);
  }
`;

const Label = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
`;

const Counter = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const stepTime = Math.max(Math.floor(duration / target), 30);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const Stats = () => {
  const statsData = [
    { target: 15, label: 'Projetos Concluídos', suffix: '+' },
    { target: 10, label: 'Clientes Satisfeitos', suffix: '+' },
    { target: 2, label: 'Anos de Experiência', suffix: '+' },
    { target: 15, label: 'Tecnologias Utilizadas', suffix: '+' },
  ];

  return (
    <StatsSection>
      <Container>
        {statsData.map((stat, index) => (
          <StatItem
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <NumberText>
              <Counter target={stat.target} suffix={stat.suffix} />
            </NumberText>
            <Label>{stat.label}</Label>
          </StatItem>
        ))}
      </Container>
    </StatsSection>
  );
};