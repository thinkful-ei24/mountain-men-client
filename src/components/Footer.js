import React from 'react';
require('../css/footer.css');
const logoImg = require('../mm-logo.png');

export default function Footer() {
  return (
    <footer className="footer">
      <div className="branding">
        <img id="mm-logo-img" src={logoImg} alt="logo" />
        <h1 id="mm-name">Mountain Men</h1>
      </div>
      <div className="contacts">
        <p className="footer-name">
          Aaron Whitehead
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/WhiteheadAaron">
            <i className="icon-gh fab fa-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/WhiteheadAaron">
            <i className="icon-gh fab fa-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/WhiteheadAaron">
            <i className="icon-gh  fas fa-at"></i>
          </a>
        </p>
        <p className="footer-name">
          Alex Gutierrez
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/alexgutes">
            <i className="icon-gh fab fa-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aaron-whitehead-a2a94785/">
            <i className="icon-gh fab fa-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/WhiteheadAaron">
            <i className="icon-gh fas fa-at"></i>
          </a>
        </p>
        <p className="footer-name">
          Colin Rupp
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/rupp-colin">
            <i className="icon-gh fab fa-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.linkedin.com/in/colin-r-5b790b167/">
            <i className="icon-gh fab fa-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/WhiteheadAaron">
            <i className="icon-gh fas fa-at"></i>
          </a>
        </p>
        <p className="footer-name">
          Sean Phelan
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/phelan97">
            <i className="icon-gh fab fa-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://linkedin.com/in/sean-phelan97">
            <i className="icon-gh fab fa-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://seanphelan.io/">
            <i className="icon-gh  fas fa-crow"></i>
          </a>
        </p>
        <p className="footer-name">
          Shane Lupton
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/slupton89">
            <i className="icon-gh fab fa-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://linkedin.com/in/shane-lupton/">
            <i className="icon-gh fab fa-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://shane-lupton.com">
            <i className="icon-gh fas fa-meteor"></i>
          </a>
        </p>
      </div>
    </footer>
  )
}