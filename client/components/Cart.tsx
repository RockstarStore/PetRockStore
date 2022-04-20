import React from 'react';

export default function (): JSX.Element {
  const cartItems = [];
  for (let i = 0; i < 4; i++) {
    cartItems.push(
      <li className="collection-item avatar">
        <i className="material-icons circle">folder</i>
        <span className="title">Title</span>
        <p>
          First Line <br />
          Second Line
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">grade</i>
        </a>
      </li>
    );
  }
  return (
    <div className="row">
      <ul className="collection col s12 m7">{cartItems}</ul>
      <div className="col s12 m5">
        <div className="card">
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"></img>
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}
