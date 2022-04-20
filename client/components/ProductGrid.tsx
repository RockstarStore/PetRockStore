import React, { useEffect, useState } from 'react';

export default function (): JSX.Element {
  const [page, setPage] = useState(1);
  // make call to database for item list

  const products: any = [];
  for (let i = 0; i < 30; i++) {
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

  const handlePageClick = (event: any) => {
    const oldPage = page;
    let newPage = event.target.innerText;
    console.log(newPage);
    if (newPage === 'chevron_right') newPage = oldPage + 1;
    if (newPage === 'chevron_left') newPage = oldPage - 1;
    newPage = parseInt(newPage);
    if (newPage === 5) {
      console.log('hi');
      document
        .getElementById('chevron_right')!
        .setAttribute('class', 'disabled');
    } else
      document
        .getElementById('chevron_right')!
        .setAttribute('class', 'waves_effect');
    if (newPage === 1) {
      document
        .getElementById('chevron_left')!
        .setAttribute('class', 'disabled');
    } else
      document
        .getElementById('chevron_left')!
        .setAttribute('class', 'waves_effect');
    document
      .getElementById(`page-${oldPage}`)!
      .setAttribute('class', 'waves-effect');
    document.getElementById(`page-${newPage}`)!.setAttribute('class', 'active');
    setPage(newPage);
  };

  useEffect(() => {
    document.dispatchEvent(new Event('parallax'));
  });

  return (
    <>
      <div className="parallax-container">
        <div className="parallax">
          <img src="https://www.mcgill.ca/oss/files/oss/styles/hd/public/pebble-3215317_1920_1.jpeg?itok=dJy0SPKE&timestamp=1601650822"></img>
        </div>
      </div>
      <div className="row">{products.slice((page - 1) * 6, page * 6)}</div>
      <ul className="pagination center">
        <li onClick={handlePageClick} id="chevron_left" className="disabled">
          <a>
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        <li id="page-1" className="active">
          <a onClick={handlePageClick}>1</a>
        </li>
        <li id="page-2" className="waves-effect">
          <a onClick={handlePageClick}>2</a>
        </li>
        <li id="page-3" className="waves-effect">
          <a onClick={handlePageClick}>3</a>
        </li>
        <li id="page-4" className="waves-effect">
          <a onClick={handlePageClick}>4</a>
        </li>
        <li id="page-5" className="waves-effect">
          <a onClick={handlePageClick}>5</a>
        </li>
        <li id="chevron_right" className="waves-effect">
          <a onClick={handlePageClick}>
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
