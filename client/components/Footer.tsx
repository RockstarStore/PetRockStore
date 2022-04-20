import React from 'react';

export default function (): JSX.Element {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © 2022 RockStar LLC
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/RockstarStore/PetRockStore"
            target="_blank"
          >
            <img src="https://img.shields.io/github/stars/RockstarStore/PetRockStore?style=social"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
