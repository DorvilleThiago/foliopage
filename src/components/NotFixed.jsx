import Project from './Project.jsx';
import ProjectNoLink from './ProjectNoLink.jsx';
import styles from '../modules/NotFixed.module.css'
import { useRef, useEffect, useState, useContext } from 'react';
import { lugarContext } from '../App.jsx';

const desc_p4 = 'Página de portfólio para apresentar a mim como desenvolvedor web, os códigos e aparência dos projetos e compartilhar mídias sociais como Linkedin e Github';
const no_desc = 'Ainda nada aqui :)'
const desc_p1 = 'Recriação do jogo "Termo" no terminal python utilizando arquivos .txt para salvar dados de partidas de jogadores'
const desc_p2 = 'Prática de estilização de páginas no framework Next.js utilizando métodos de estilização reutilizáveis (In-line CSS, Modules, Styled Components)'
const desc_p3 = 'Mini-projeto da universidade requisitada pelo professor Matheus Lobo, consiste de um jogo de adivinhação em que o jogador deve adivinhar um valor de 1 a 100, o sistema dá dicas mostrando quais foram os extremos já adivinhados.'

function NotFixed() {

    function sendToPage(link) {
        window.open(link, '_blank');
    }

    const projetus = useRef(null);
    const exp = useRef(null);
    const teqi = useRef(null);

    const [width, setWidth] = useState(window.innerWidth);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const { lugar, setLugar } = useContext(lugarContext);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
      };
    
    const handleMouseLeave = () => {
        setIsMouseOver(false);
    };

    const title = {
        fontSize: '16px',
        letterSpacing: '1px',
        color: 'white'
    }
    const mediaQuery = window.matchMedia('(max-width: 1125px)');

    useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    useEffect(() => {
        if (width < 1125) {
        setShowTitle(true);
        } else {
        setShowTitle(false);
        }
    }, [width]);

    useEffect(() => {
            const mediaQuery = window.matchMedia('(max-width: 1125px)');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (mediaQuery.matches) {
                    handleMouseLeave();
                    }
                    else if (entry.isIntersecting) {
                    handleMouseLeave();
                    setLugar('projetos');
                    } else {
                    handleMouseEnter();
                    }
            });
        }, { threshold: [0.444] });
            observer.observe(projetus.current);
            return () => {
            observer.disconnect();
            };
        }, []);
    
    useEffect(() => {
            const mediaQuery = window.matchMedia('(max-width: 1125px)');
            const observer2 = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                if (mediaQuery.matches) {
                    exp.current.style.opacity = '1'
                    exp.current.style.color = 'var(--yellow)'
                }
                else if (entry.isIntersecting) {
                    exp.current.style.opacity = '1'
                    exp.current.style.color = 'var(--yellow)'
                    setLugar('experiencia');
                } else {
                    exp.current.style.opacity = '0.5'
                    exp.current.style.color = 'var(--white)'
                }
            });
        }, { threshold: [1] });
            observer2.observe(exp.current);
            return () => {
            observer2.disconnect();
            };
        }, []);
    
    useEffect(() => {
            const mediaQuery = window.matchMedia('(max-width: 1125px)');
            const observer3 = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                if (mediaQuery.matches) {
                    teqi.current.style.opacity = '1'
                    console.log("a")
                }
                else if (entry.isIntersecting) {
                    teqi.current.style.opacity = '1'
                    setLugar('tecnologias');
                } else {
                    teqi.current.style.opacity = '0.5'
                }
            });
            }, { threshold: [0.9] });
            observer3.observe(teqi.current);
            return () => {
            observer3.disconnect();
            };
        }, []);

    return (
        <div id="projetos" className={styles.NotFixedStuff}>
            <section ref={projetus} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                { mediaQuery.matches ? (<h2 style={title}>PROJETOS</h2>) : <></>}
                <Project link={"https://github.com/DorvilleThiago/foliopage"} view={isMouseOver} tech='JAVASCRIPT, REACT, CSS, JSX, HOOKS' title='Portfólio' description={desc_p4}></Project>
                <Project link={"https://github.com/DorvilleThiago/React-Login"} view={isMouseOver} tech='JAVASCRIPT, REACT, CSS, JSX, NEXT.JS' title='Página de Login' description={desc_p2}></Project>
                <Project link={"https://github.com/DorvilleThiago/Termoo-by-Thiago"} view={isMouseOver} tech='PYTHON, .TXT DATABASE, MODULES' title='Term.ooo' description={desc_p1}></Project>
                <Project link={"https://github.com/DorvilleThiago/jogo-de-adivinhacao"} view={isMouseOver} tech='PYTHON, PROGRAMMING LOGIC' title='Jogo de Adivinhação' description={desc_p3}></Project>
                <ProjectNoLink view={isMouseOver} tech='...' title='...' description={no_desc}></ProjectNoLink>
            </section>
            <span ref={exp} id="experiencia">
                <div>
                { mediaQuery.matches ? (<h2 style={title}>EXPERIÊNCIA</h2>) : <></>}
                    <h1>Spigot Developer</h1>
                    <p>Autônomo/Freelance</p>
                    <h2>~ 1 ANO</h2>
                </div>
            </span>
            { mediaQuery.matches ? (<h2 style={title}>TECNOLOGIAS</h2>) : <></>}
            <main ref={teqi} id="technologias" className={styles.tecno}>
                
                <div>
                    <h2>JavaScript</h2>
                    <h2>TypeScript</h2>
                    <h2>Python</h2>
                    <h2>CSS</h2>
                    <h2>JSX</h2>
                </div>
                <div>
                    <h2>React</h2>
                    <h2>Next.js</h2>
                    <h2>Html</h2> 
                    <h2>Java</h2>
                    <h2>ReactNative</h2>
                </div>
            </main>
        </div>
    )
}
export default NotFixed;