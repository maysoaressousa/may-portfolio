import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FiArrowUp, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: #000000;
  padding: 3rem 8%;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-white);

  span {
    color: var(--accent-purple);
  }

  strong {
    color: var(--accent-green);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bg-secondary);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--accent-green);
      border-color: var(--accent-green);
      transform: translateY(-3px);
      box-shadow: 0 0 15px rgba(0, 255, 178, 0.2);
    }
  }
`;

const BackToTop = styled(Link)`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--accent-purple);
  color: var(--accent-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-purple);
    color: var(--text-white);
    transform: translateY(-4px);
    box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);
  }
`;

const Copyright = styled.div`
  color: var(--gray-dark);
  font-size: 0.85rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  width: 100%;
  padding-top: 1.5rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <Logo>
          Mayara<span>.</span><strong>dev</strong>
        </Logo>

        <SocialLinks>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FiInstagram />
          </a>
        </SocialLinks>

        <BackToTop to="home" smooth={true} duration={600} offset={-80} aria-label="Voltar ao topo">
          <FiArrowUp />
        </BackToTop>
      </ContentWrapper>

      <Copyright>
        © {new Date().getFullYear()} Mayara. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};