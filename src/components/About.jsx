import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiUser, 
  FiMapPin, 
  FiBriefcase, 
  FiBookOpen, 
  FiMail, 
  FiDownload 
} from 'react-icons/fi';

const AboutSection = styled.section`
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 380px;
    border: 2px solid var(--accent-purple);
    border-radius: 16px;
    top: 15px;
    left: 15px;
    z-index: 1;

    @media (max-width: 968px) {
      display: none;
    }
  }
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  height: 460px;
  border-radius: 16px;
  overflow: hidden;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(15%) contrast(105%);
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    height: 380px;
  }
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-white);

    span {
      color: var(--accent-green);
    }
  }

  p {
    color: var(--text-muted);
    line-height: 1.8;
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: var(--bg-primary);
  padding: 1.2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-purple);
    transform: translateY(-3px);
  }

  .icon-box {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    background: rgba(139, 92, 246, 0.1);
    color: var(--accent-purple);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .details {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.8rem;
      color: var(--gray-dark);
      margin-bottom: 0.2rem;
    }

    strong {
      font-size: 0.95rem;
      color: var(--text-white);
      font-weight: 600;
    }
  }
`;

const DownloadBtn = styled.a`
  align-self: flex-start;
  background: transparent;
  color: var(--text-white);
  border: 1px solid var(--accent-purple);
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-purple);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35);
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.1rem;
    color: var(--accent-green);
  }

  &:hover svg {
    color: var(--text-white);
  }

  @media (max-width: 580px) {
    width: 100%;
    justify-content: center;
  }
`;

export const About = () => {
  const cardsData = [
    { icon: <FiUser />, label: 'Nome', value: 'Mayara' },
    { icon: <FiMapPin />, label: 'Localização', value: 'Brasil' },
    { icon: <FiBriefcase />, label: 'Experiência', value: 'Desenvolvedora Web' },
    { icon: <FiBookOpen />, label: 'Formação', value: 'Análise e Dev. de Sistemas' },
    { icon: <FiMail />, label: 'E-mail', value: 'contato@mayara.dev' },
  ];

  return (
    <AboutSection id="sobre">
      <SectionHeader
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Sobre <span>Mim</span></h2>
        <p>Conheça minha trajetória</p>
      </SectionHeader>

      <Container>
        <ImageWrapper
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ImageCard>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
              alt="Mayara Soares" 
            />
          </ImageCard>
        </ImageWrapper>

        <TextContent
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Construindo experiências digitais com <span>paixão e precisão</span></h3>
          <p>
            Sou Desenvolvedora Web com sólida experiência no ecossistema JavaScript, especializada na criação de interfaces modernas, acessíveis e focadas na melhor experiência do usuário (UX). Tenho afinidade por arquiteturas limpas, código otimizado e design sofisticado, combinando elegância estética com performance de alto nível.
          </p>

          <CardsGrid>
            {cardsData.map((item, index) => (
              <InfoCard key={index}>
                <div className="icon-box">{item.icon}</div>
                <div className="details">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </InfoCard>
            ))}
          </CardsGrid>

          <DownloadBtn href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
            Download CV <FiDownload />
          </DownloadBtn>
        </TextContent>
      </Container>
    </AboutSection>
  );
};