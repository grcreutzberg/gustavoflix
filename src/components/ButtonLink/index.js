import React from 'react';
import './style.css'

function ButtonLink(props) {
    //props => {className: "clasName", href: "/"}
    console.log(props);
    return (
        <a className={props.className} href={props.href}>
            Novo vídeo        
        </a>
    );
}

export default ButtonLink;