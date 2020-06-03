import React from 'react';

//propriedades do componente header, se botasse ? na frente do title seria não obrigatorio, ex: title?: string
interface HeaderProps {
    title: string;
}


//constante do tipo React.FC. este FC é de Function Component
//adicionado o parametro para a função que é as propriedades do componente
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;