/* Composant Collapse qui affiche un titre avec une flèche qui s'ouvre et se ferme pour laisser voir ou non les informations qu'il contient */
import './collapse.css';
import React, { useRef, useState } from 'react';
import chevronDown from '../../images/ChevronDown.png';
import chevronUp from '../../images/ChevronUp.png';

function Collapse({ title, texte }){

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const contentRef = useRef();

    return(
        <div className='collapseDivBox'>
            <div className='collapseDivTitle primaryBackground'>
                <h1 className='collapseTitle'>{title}</h1>
                <p className='buttonUpDown' onClick={toggle}>
                    {!open ? <img src={chevronDown} alt="Chevron down" /> : <img src={chevronUp} alt="Chevron up" /> }
                </p>
            </div>
            <div className="content-parent secondary" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <div className='primary toggleParagraph'>{texte}</div>
            </div>

        </div>
    )

}



export default Collapse