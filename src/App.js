import { useEffect, useState, useCallback, useRef } from 'react';
import RepoManager from './components/repoManager';
import Notification from './components/notification';
import './App.css';

function App() {
  const [progressBar, setProgressBar] = useState(0);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const progressTimerRef = useRef(null);
  const EMAIL = 'csebas459@gmail.com';

  // Función memoizada para copiar al portapapeles
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(EMAIL)
      .then(() => {
        setProgressBar(5); // Iniciar en 5 para mostrar progreso inmediato
        setIsNotificationVisible(true);
      })
      .catch(error => {
        console.error('Error al copiar email:', error);
      });
  }, []);

  // Efecto para manejar la animación de la barra de progreso
  useEffect(() => {
    // Limpiar cualquier temporizador existente
    if (progressTimerRef.current) {
      clearTimeout(progressTimerRef.current);
    }

    if (isNotificationVisible) {
      if (progressBar <= 100) {
        // Continuar incrementando la barra de progreso
        progressTimerRef.current = setTimeout(() => {
          setProgressBar(prev => prev + 2);
        }, 50);
      } else {
        // Restablecer cuando llegue al 100%
        setIsNotificationVisible(false);
        setProgressBar(0);
      }
    }

    // Limpieza al desmontar el componente
    return () => {
      if (progressTimerRef.current) {
        clearTimeout(progressTimerRef.current);
      }
    };
  }, [progressBar, isNotificationVisible]);

  return (
    <div className="app-container">
      <Notification 
        width={progressBar} 
        isVisible={isNotificationVisible} 
        message="Email copied to clipboard!" 
      />
      
      <main className="profile-wrapper">
        <div className="profile-card">
          <div className="profile-image-container">
            <img 
              src="https://media.licdn.com/dms/image/C4D03AQHiyWCncDOFFA/profile-displayphoto-shrink_200_200/0/1652410523882?e=2147483647&v=beta&t=wcx39M1BvXNyJ1WTheCIKf4jkVFd4dTF8_yPk8mwby4" 
              title="Sebastian Camacho" 
              alt="Sebastian Camacho" 
              className="profile-image" 
            />
          </div>
          
          <h1 className="name-heading">Sebastian Camacho</h1>
          <h2 className="title-heading">Software Engineer</h2>
          
          <ul className="social-links">
            <li className="social-item">
              <a 
                href="https://github.com/sebas-cc" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub Profile"
                className="social-link github"
              >
                <img src="https://skillicons.dev/icons?i=github" title="GitHub Link" alt="GitHub Link" className="social-icon" />
                <span className="social-text">GitHub</span>
              </a>
            </li>
            <li className="social-item">
              <a 
                href="https://www.linkedin.com/in/sebastian-camacho-71a862239" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn Profile"
                className="social-link linkedin"
              >
                <img src="https://skillicons.dev/icons?i=linkedin" title="LinkedIn Link" alt="LinkedIn Link" className="social-icon" />
                <span className="social-text">LinkedIn</span>
              </a>
            </li>
            <li className="social-item">
              <button 
                className="social-link email" 
                onClick={copyToClipboard} 
                aria-label="Copy email to clipboard"
              >
                <img src="https://skillicons.dev/icons?i=gmail" title="Email" alt="Email" className="social-icon" />
                <span className="social-text">Email Me</span>
              </button>
            </li>
          </ul>
        </div>
        
        <div className="bio-container">
          <div className="bio-content">
            <h2 className="bio-heading">About Me</h2>
            <p className="bio-text">
              Hi everyone! I'm a software engineer specializing in both front-end and back-end development, 
              including Salesforce technologies. I'm constantly seeking new opportunities to expand my 
              skills and grow my professional network.
            </p>
            <p className="bio-text highlight">
              A quick chat may be the start of a new beginning — don't hesitate to reach out!
            </p>{/*
            <div className="cta-container">
              <button className="cta-button primary">View Projects</button>
              <button className="cta-button secondary">Download CV</button>
            </div>*/}
          </div>
        </div>
      </main>
      
      <RepoManager />
    </div>
  );
}

export default App;