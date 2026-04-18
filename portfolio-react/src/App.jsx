import { useState } from 'react'
import './App.css'

// Importações das imagens
import fotoPerfil from './assets/eu2.jpg' 
// Certifique-se de que estas imagens existem na pasta assets ou mude os nomes abaixo:
import imgProjeto1 from './assets/projeto1.png' 
import imgProjeto2 from './assets/projeto2.png'

function App() {
  // Lista dos seus projetos atuais
  const [projetos] = useState([
    { 
      id: 1, 
      titulo: "Portfólio MVP", 
      descricao: "Desenvolvimento de um portfólio responsivo utilizando HTML, CSS e JavaScript puro para praticar conceitos fundamentais.",
      imagem: imgProjeto1 
    },
    { 
      id: 2, 
      titulo: "Interface React", 
      descricao: "Evolução do portfólio para o ecossistema React, utilizando Vite para otimização e componentes dinâmicos.",
      imagem: imgProjeto2 
    }
  ]);

  return (
    <div className="App">
      <header>
        <nav className="container">
          <h1>Marcos Vinicus - Portfólio</h1>
          <ul className="menu">
            <li><a href="#sobre">Sobre mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            {/* Foto de Perfil Centralizada e Redonda via CSS */}
            <img src={fotoPerfil} alt="Marcos Vinicius" className="foto-perfil" />
            <div className="sobre-texto">
              <h2>Sobre mim</h2>
              <p>
                Olá! Sou desenvolvedor web iniciante, apaixonado por criar interfaces simples, 
                funcionais e responsivas. Atualmente moro em José de Freitas - PI.
              </p>
              <p>Tenho foco em aprender tecnologias modernas e entregar soluções com qualidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="projetos">
        <div className="container">
          <h2>Meus Projetos</h2>
          <div className="projetos-grid">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="projeto-card">
                {/* Imagem do Projeto */}
                <img src={projeto.imagem} alt={projeto.titulo} className="projeto-img" />
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contato">
        <div className="container">
          <p>&copy; 2026 Marcos Vinicius Alves Barbosa.</p>
          <div className="redes">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
