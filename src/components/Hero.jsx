import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import minhaFoto from '../assets/images/profile.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
  position: relative;
  overflow: hidden;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 50px;
    gap: 3rem;
  }
`;

// Efeitos de iluminação de fundo (Glows e Geometria)
const BackgroundGlow = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  background: var(--accent-purple);
  filter: blur(160px);
  opacity: 0.18;
  border-radius: 50%;
  top: 20%;
  left: -50px;
  pointer-events: none;
`;

const SecondaryGlow = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: var(--accent-green);
  filter: blur(180px);
  opacity: 0.12;
  border-radius: 50%;
  bottom: 10%;
  right: 5%;
  pointer-events: none;
`;

const ContentLeft = styled(motion.div)`
  max-width: 600px;
  z-index: 2;

  @media (max-width: 968px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Greeting = styled.span`
  color: var(--accent-green);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
`;

const Name = styled.h1`
  font-size: 4.2rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-white);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TypewriterContainer = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-muted);
  height: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;

  span {
    color: var(--accent-purple);
  }

  .cursor {
    display: inline-block;
    width: 3px;
    height: 1.8rem;
    background-color: var(--accent-green);
    margin-left: 5px;
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    height: 35px;
  }
`;

const Description = styled.p`
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 520px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryBtn = styled(Link)`
  background: var(--accent-purple);
  color: var(--text-white);
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.25);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.45);
    background: #7c3aed;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SecondaryBtn = styled.a`
  border: 1px solid var(--accent-green);
  color: var(--accent-green);
  background: transparent;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 178, 0.08);
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(0, 255, 178, 0.2);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const ContentRight = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const GeometricWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 280px;
    height: 350px;
  }

  /* Moldura com efeito neon sutil */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    pointer-events: none;
  }

  /* Círculo decorativo ao fundo */
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px dashed rgba(0, 255, 178, 0.25);
    top: -20px;
    right: -20px;
    pointer-events: none;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--bg-secondary);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%) contrast(105%);
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  /* Gradiente escuro sobreposto na parte inferior da imagem */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 60%, var(--bg-primary) 100%);
  }
`;

const titles = [
  'Desenvolvedora Front-end',
  'React Developer',
  'JavaScript Developer',
  'UI Lover',
];

export const Hero = () => {
  // Lógica do Efeito de Digitação (Typewriter)
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === titles[textIndex].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, textIndex, isDeleting]);

  return (
    <HeroSection id="home">
      <BackgroundGlow />
      <SecondaryGlow />

      <ContentLeft
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Greeting>Olá, eu sou</Greeting>
        <Name>Mayara</Name>
        <TypewriterContainer>
          <span>{titles[textIndex].substring(0, subIndex)}</span>
          <div className="cursor" />
        </TypewriterContainer>
        <Description>
          Desenvolvo aplicações modernas, rápidas e intuitivas utilizando tecnologias atuais do ecossistema JavaScript.
        </Description>
        <ButtonGroup>
          <PrimaryBtn to="projetos" smooth={true} duration={500} offset={-70}>
            Ver Projetos <FiArrowUpRight />
          </PrimaryBtn>
          <SecondaryBtn href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
            Download CV <FiDownload />
          </SecondaryBtn>
        </ButtonGroup>
      </ContentLeft>

      <ContentRight
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <GeometricWrapper>
          <ImageContainer>
            <img
              src="src/assets/images/profile.jpg"
              alt="Mayara - Desenvolvedora Web"
            />
          </ImageContainer>
        </GeometricWrapper>
      </ContentRight>
    </HeroSection>
  );
};