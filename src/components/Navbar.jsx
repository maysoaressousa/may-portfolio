import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &.scrolled {
    height: 70px;
    background: rgba(13, 13, 13, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--text-white);
  cursor: pointer;

  span {
    color: var(--accent-purple);
  }

  strong {
    color: var(--accent-green);
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100vh;
    background: var(--bg-secondary);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  }
`;

const NavItem = styled.li`
  a {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
    position: relative;

    &:hover,
    &.active {
      color: var(--accent-purple);
    }

    &.active::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--accent-purple);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 1.2rem;
    }
  }
`;

const ToggleIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: var(--text-white);
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'Sobre', target: 'sobre' },
    { name: 'Tecnologias', target: 'tecnologias' },
    { name: 'Projetos', target: 'projetos' },
    { name: 'Experiência', target: 'experiencia' },
    { name: 'Contato', target: 'contato' },
  ];

  return (
    <Nav className={scrolled ? 'scrolled' : ''}>
      <Logo>
        <Link to="home" smooth={true} duration={500}>
          Mayara<span>.</span><strong>dev</strong>
        </Link>
      </Logo>

      <ToggleIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </ToggleIcon>

      <NavMenu $isOpen={isOpen}>
        {navLinks.map((link) => (
          <NavItem key={link.target}>
            <Link
              to={link.target}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          </NavItem>
        ))}
      </NavMenu>
    </Nav>
  );
};