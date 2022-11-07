/* Composant Collapse qui affiche un titre avec une flèche qui s'ouvre et se ferme pour laisser voir ou non les informations qu'il contient */
import './collapse.css';
import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';

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
                    {!open ? <FaChevronDown /> : <FaChevronUp /> }
                </p>
            </div>
            <div className="content-parent secondary" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <p className='primary toggleParagraph'>{texte}</p>
            </div>

        </div>
    )

}

Collapse.propTypes = {
    title : propTypes.string.isRequired,
    texte : propTypes.string.isRequired,
}

export default Collapse