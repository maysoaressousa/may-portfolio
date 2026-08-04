import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = styled.section`
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-white);
    margin-bottom: 1rem;

    span {
      color: var(--accent-purple);
    }
  }

  p {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InfoCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  background: var(--bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  .icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: rgba(139, 92, 246, 0.1);
    color: var(--accent-purple);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .text {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.8rem;
      color: var(--gray-dark);
    }

    strong {
      font-size: 1rem;
      color: var(--text-white);
      font-weight: 600;
    }
  }

  &:hover {
    border-color: var(--accent-purple);
    transform: translateX(5px);

    .icon {
      background: var(--accent-purple);
      color: var(--text-white);
    }
  }
`;

const WhatsAppCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 3.5rem 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 178, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px -10px rgba(0, 255, 178, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: var(--accent-green);
    filter: blur(90px);
    opacity: 0.15;
    pointer-events: none;
  }

  .wa-icon-box {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(0, 255, 178, 0.1);
    border: 1px solid rgba(0, 255, 178, 0.3);
    color: var(--accent-green);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-white);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`;

const WhatsAppButton = styled.a`
  background: var(--accent-green);
  color: #0D0D0D;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 1.1rem 2.2rem;
  border-radius: 12px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 255, 178, 0.3);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 255, 178, 0.5);
    background: #00e6a0;
  }

  svg {
    font-size: 1.4rem;
  }
`;

export const Contact = () => {
  return (
    <ContactSection id="contato">
      <SectionHeader
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Entre em <span>Contato</span></h2>
        <p>Vamos construir algo incrível juntos?</p>
      </SectionHeader>

      <Container>
        <ContactInfo
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Outros <span>Canais</span></h3>
          <p>
            Sinta-se à vontade para me acompanhar ou mandar uma mensagem através dos meus canais oficiais.
          </p>

          <InfoList>
            <InfoCard href="mailto:mayarasoaresdev@gmail.com">
              <div className="icon"><FiMail /></div>
              <div className="text">
                <span>E-mail</span>
                <strong>mayarasoaresdev@gmail.com</strong>
              </div>
            </InfoCard>

            <InfoCard href="https://github.com/maysoaressousa" target="_blank" rel="noopener noreferrer">
              <div className="icon"><FiGithub /></div>
              <div className="text">
                <span>GitHub</span>
                <strong>github.com/maysoaressousa</strong>
              </div>
            </InfoCard>

            <InfoCard href="https://www.linkedin.com/in/mayarasoaressousa/" target="_blank" rel="noopener noreferrer">
              <div className="icon"><FiLinkedin /></div>
              <div className="text">
                <span>LinkedIn</span>
                <strong>linkedin.com/in/mayarasoaressousa/</strong>
              </div>
            </InfoCard>
          </InfoList>
        </ContactInfo>

        <WhatsAppCard
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="wa-icon-box">
            <FaWhatsapp />
          </div>
          <h3>Conversa Direta</h3>
          <p>
            Prefere praticidade? Clique no botão abaixo para iniciar uma conversa diretamente comigo no WhatsApp.
          </p>
          <WhatsAppButton 
            href="https://wa.me/5585981869203?text=Ol%C3%A1%2C%20Mayara!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Falar no WhatsApp <FiArrowUpRight />
          </WhatsAppButton>
        </WhatsAppCard>
      </Container>
    </ContactSection>
  );
};