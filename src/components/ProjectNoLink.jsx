import styles from '../modules/Project.module.css';
import { useRef, useEffect, useState } from 'react';

function ProjectNoLink(props) {

    const divzinha = useRef(null)  
    const h2zinho = useRef(null)  
    const h1zinho = useRef(null)  
    const pzinho = useRef(null)  

    let view = !props.view

    const handleMouseEnter = () =>{
        setTimeout(function () {
            
            divzinha.current.style.backgroundColor = 'var(--dark)';
            h2zinho.current.style.color = 'var(--yellow)';
            h1zinho.current.style.color = 'var(--yellow)';
            pzinho.current.style.color = 'white';
          }, 0.1);

    };
    const handleMouseLeave = () =>{

        setTimeout(function() {
            divzinha.current.style.backgroundColor = 'var(--darker)';
            h2zinho.current.style.color = '#A1A1AA';
            h1zinho.current.style.color = '#A1A1AA';
            pzinho.current.style.color = '#A1A1AA';
          }, 0.1);

      };

      const geral = {
        backgroundColor: view ? 'var(--dark)' : 'var(--darker)',
        padding: '15px 23px',
        transition: 'all 0.3s',
        borderRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.50) 0px -50px 36px -28px inset'
    };
      
    const tech = {
        color: view ? 'var(--yellow)' : '#A1A1AA',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '25px',
        transition: 'all 0.3s',
        letterSpacing: '1px'
    }
    
    const title = {
        color: view ? 'white' : '#A1A1AA',
        fontSize: '30px',
        transition: 'all 0.3s'
    }
    
    const text = {
        color: view ? 'white' : '#A1A1AA',
        fontSize: '14px',
        marginTop: '30px',
        maxWidth: '500px',
        fontWeight: '100',
        transition: 'all 0.3s'
    }

    return (
        <div ref={divzinha} style={geral} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 ref={h2zinho} style={tech}>{props.tech} </h2>
            <h1 ref={h1zinho} style={title}>{props.title}</h1>
            <p ref={pzinho} style={text}>{props.description}</p>
        </div>
    )

};


export default ProjectNoLink;
