import React, { useEffect, useState } from 'react';

export default function (): JSX.Element {
  const [page, setPage] = useState(1);
  // make call to database for item list

  let products: any = [];
  useEffect(() => {
    document.dispatchEvent(new Event('parallax'));
    products = [];
    for (let i = 0; i < 6; i++) {
      products.push(
        <div className="col s12 m6 l4">
          <div className="z-depth-3 card">
            <div className="card-image">
              <img src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2016/01/thumb_720_450_f_28.jpg"></img>
              <span className="card-title">Product Title {i}</span>
            </div>
            <div className="card-content">
              <p>Product price and short description</p>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn-small">Add to Cart</a>
              <a className="waves-effect waves-light btn-small">More Info</a>
            </div>
          </div>
        </div>
      );
    }
  });

  const handlePageClick = () => {
    setPage(parseInt(window.location.hash.split('#')[1]));
  };

  return (
    <>
      <div className="parallax-container">
        <div className="parallax">
          <img src="https://www.mcgill.ca/oss/files/oss/styles/hd/public/pebble-3215317_1920_1.jpeg?itok=dJy0SPKE&timestamp=1601650822"></img>
        </div>
      </div>
      <div className="row">{products}</div>
      <ul className="pagination center">
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        <li className="active">
          <a onClick={handlePageClick} href="#1">
            1
          </a>
        </li>
        <li className="waves-effect">
          <a href="#2">2</a>
        </li>
        <li className="waves-effect">
          <a href="#3">3</a>
        </li>
        <li className="waves-effect">
          <a href="#4">4</a>
        </li>
        <li className="waves-effect">
          <a href="#5">5</a>
        </li>
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>

      <div className="parallax-container">
        <div className="parallax">
          <img src="https://decider.com/wp-content/uploads/2019/08/5-original-rocky-movies-are-on-netflix.jpg?quality=80&strip=all"></img>
        </div>
      </div>
    </>
  );
}
