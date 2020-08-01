import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
          <a>
              <img className="Logo" src={Logo} alt="GustavoFlix Logo" />
          </a>
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
