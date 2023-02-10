import styles from '../modules/Project.module.css';
import { useRef, useEffect, useState } from 'react';

function Project(props) {

    const divzinha = useRef(null)  
    const h2zinho = useRef(null)  
    const h1zinho = useRef(null)  
    const pzinho = useRef(null)  

    let view = !props.view

    const handleMouseEnter = () =>{
        setTimeout(function () {
            
            divzinha.current.style.backgroundColor = '#27272A';
            h2zinho.current.style.color = 'white';
            h1zinho.current.style.color = 'white';
            pzinho.current.style.color = '#A1A1AA';
          }, 0.1);

    };
    const handleMouseLeave = () =>{

        setTimeout(function() {
            divzinha.current.style.backgroundColor = '#1F1F23';
            h2zinho.current.style.color = '#858588';
            h1zinho.current.style.color = '#858588';
            pzinho.current.style.color = '#5C5C63';
          }, 0.1);

      };

    const geral = {
        backgroundColor: view ? '#27272A' : '#1F1F23',
        padding: '15px 23px',
        transition: 'all 0.3s'
    };
      
    const tech = {
        color: view ? '#ffffff' : '#858588',
        fontSize: '13px',
        fontWeight: 'bold',
        marginBottom: '25px',
        transition: 'all 0.3s',
        letterSpacing: '1px'
    }
    
    const title = {
        color: view ? '#ffffff' : '#858588',
        fontSize: '30px',
        transition: 'all 0.3s'
    }
    
    const text = {
        color: view ? '#A1A1AA' : '#5C5C63',
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


export default Project;
