import React, { useEffect, useState } from 'react';
import { Rocks } from '../types';

export default function (): JSX.Element {
  const [page, setPage] = useState<number>(1);
  // make call to database for item list
  // set typing for rocks array...somehow
  const [rocks, setRocks] = useState<Rocks>([]);

  useEffect(() => {
    console.log('In useEffect');
    const fetchRocks = async () => {
      const res = await fetch('/rocks');
      const rocksArr = await res.json();
      console.log(rocksArr);
      setRocks(rocksArr);
    };
    fetchRocks().catch(console.error);
    console.log('rocksinuseeffect: ', rocks);
  }, []);

  const addCart = (productInfo: any) => {
    const optionsObject = {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      // body: JSON.stringify({ rock_id: productInfo, user_id: 2 }),
      // body: JSON.stringify({ rock_id: 3, user_id: 2 }),
    };
    fetch('/shop', optionsObject);
  };

  const products: JSX.Element[] = [];
  for (let i = 0; i < rocks.length; i++) {
    products.push(
      <div className="col s12 m6 l4">
        <div className="z-depth-3 card">
          <div className="card-image">
            <img className="rock-image" src={rocks[i].image} />
            <span className="card-title blue-grey ">{rocks[i].name}</span>
          </div>
          <div style={{ height: '150px' }} className="card-content">
            <p>{rocks[i].description} </p>
            <div>{rocks[i].price}</div>
          </div>
          <div className="card-action">
            <a
              className="waves-effect waves-light btn-small"
              id={`${rocks[i].id}`}
              onClick={(e) => {
                // e.target && addCart(Number(e.target));

                addCart(e);
                console.log('e.target: ', e.target);
                // console.log('e.target: ', e.target.getAttribute('id'));
                console.log(e);
              }}
            >
              Add to Cart
            </a>
            <a className="waves-effect waves-light btn-small">More Info</a>
          </div>
        </div>
      </div>
    );
  }

  const handlePageClick = (event: React.MouseEvent) => {
    const oldPage = page;
    const pageText: string = (event.target as HTMLElement).innerText;

    let newPage: number;
    if (pageText === 'chevron_right') newPage = oldPage + 1;
    else if (pageText === 'chevron_left') newPage = oldPage - 1;
    else newPage = parseInt(pageText);

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
      {/* <div>{rocks}</div> */}
      <div className="parallax-container">
        <div className="parallax">
          <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/30-rock-unresolved-ten-storylines-feature-image.jpg"></img>
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
