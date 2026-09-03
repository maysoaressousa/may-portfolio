import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-primary);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 15px 35px -10px rgba(139, 92, 246, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 230px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.08);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(13, 13, 13, 0.1) 0%, rgba(13, 13, 13, 0.85) 100%);
  }
`;

const CardContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text-white);
    margin-bottom: 0.8rem;
  }

  p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.8rem;
`;

const Tag = styled.span`
  background: rgba(139, 92, 246, 0.12);
  color: var(--accent-purple);
  border: 1px solid rgba(139, 92, 246, 0.25);
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionBtn = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: var(--accent-purple);
    color: var(--text-white);

    &:hover {
      background: #7c3aed;
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
    }
  }

  &.secondary {
    background: transparent;
    color: var(--text-white);
    border: 1px solid rgba(255, 255, 255, 0.15);

    &:hover {
      border-color: var(--accent-green);
      color: var(--accent-green);
      background: rgba(0, 255, 178, 0.05);
    }
  }

  svg {
    font-size: 1.1rem;
  }
`;

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const LoadMoreBtn = styled.button`
  background: transparent;
  color: var(--text-white);
  border: 1px solid var(--accent-green);
  padding: 0.9rem 2.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
    color: var(--accent-green);
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(0, 255, 178, 0.1);
    box-shadow: 0 0 25px rgba(0, 255, 178, 0.25);
    transform: translateY(-3px);
  }
`;

const projectsData = [
  {
    id: 1,
    title: 'Moth Piercings',
    description: 'Plataforma e-commerce completa voltada para catálogo e venda de piercings, com interface moderna, carrinho dinâmico e gestão de banco de dados.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Next.js', 'Node.js', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Kin Benevides Studio',
    description: 'Website profissional para estúdio de tatuagem e piercing, destacando portfólio de trabalhos, serviços e integração para agendamentos.',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
    github: 'https://github.com/maysoaressousa/site-estudio',
    demo: 'https://www.kinbenevidestattoo.com.br/',
  },
  {
    id: 3,
    title: 'Site de Loja de Construção',
    description: 'Aplicação desenvolvida com foco em catálogo de produtos, páginas institucionais rápidas e layout otimizado para conversão de vendas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/maysoaressousa/loja-construcao',
    demo: 'https://www.r3construcoesloja.com/',
  },
  {
    id: 4,
    title: 'Empresa ArraZe - Eventos',
    description: 'Site institucional sobre decoração locação de itens e cenários para eventos e festas.',
    image: '/arraze-site.png',
    tags: ['React.js', 'Tailwind CSS',],
    github: 'https://github.com/maysoaressousa/arraze-decoracoes',
    demo: 'https://arraze-decoracoes.vercel.app/',
  },
  {
    id: 5,
    title: 'Site Poetisa Val Nalini',
    description: 'Site pessoal da poeta Val Nalini, apresentando seu trabalho literário.',
    image: '/site-amalgama.png',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/maysoaressousa',
    demo: 'https://amalgama-livro.vercel.app/',
  },
  {
    id: 6,
    title: 'Landing Page Advocacia & Consultoria',
    description: 'Página institucional sofisticada para serviços jurídicos e de assessoria, focada em alta conversão e compliance com LGPD.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Styled Components', 'Framer Motion'],
    github: 'https://github.com/maysoaressousa',
    demo: 'https://example.com',
  },
  {
    id: 7,
    title: 'Task & Workflow Manager',
    description: 'Aplicativo Kanban em tempo real para gerenciamento ágil de tarefas e produtividade de equipes de desenvolvimento.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
    github: 'https://github.com/maysoaressousa',
    demo: 'https://example.com',
  },
  {
    id: 8,
    title: 'Portal de Conteúdo & Blog Dark',
    description: 'Arquitetura JAMstack com renderização estática para máxima velocidade, modo escuro nativo e SEO totalmente otimizado.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Markdown', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/maysoaressousa',
    demo: 'https://example.com',
  },
  {
    id: 9,
    title: 'App Oracular & Simbolismo Web',
    description: 'Interface interativa para sorteio e leitura simbólica de arquétipos, com efeitos visuais místicos, transições fluidas e áudio ambiente.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Framer Motion', 'Canvas API', 'CSS Glass'],
    github: 'https://github.com/maysoaressousa',
    demo: 'https://example.com',
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Exibe apenas 3 projetos inicialmente (1 fileira) ou todos os 9 quando expandido
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <ProjectsSection id="projetos">
      <SectionHeader
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Meus <span>Projetos</span></h2>
        <p>Trabalhos em Destaque</p>
      </SectionHeader>

      <ProjectsGrid>
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              layout
            >
              <ImageContainer>
                <img src={project.image} alt={project.title} />
              </ImageContainer>

              <CardContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <TechTags>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TechTags>

                <ButtonGroup>
                  <ActionBtn href={project.github} target="_blank" rel="noopener noreferrer" className="secondary">
                    <FiGithub /> GitHub
                  </ActionBtn>
                  <ActionBtn href={project.demo} target="_blank" rel="noopener noreferrer" className="primary">
                    <FiExternalLink /> Demo
                  </ActionBtn>
                </ButtonGroup>
              </CardContent>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>

      <LoadMoreContainer>
        <LoadMoreBtn onClick={() => setShowAll(!showAll)}>
          {showAll ? (
            <>
              Mostrar Menos <FiChevronUp />
            </>
          ) : (
            <>
              Mostrar Mais Projetos <FiChevronDown />
            </>
          )}
        </LoadMoreBtn>
      </LoadMoreContainer>
    </ProjectsSection>
  );
};