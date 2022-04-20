import React, { useEffect, useState } from 'react';

export default function (): JSX.Element {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('in cart useEffect');
    const fetchCart = async (): Promise<any> => {
      const res = await fetch('/shop/2');
      const cartItems = await res.json();

      setCartItems(cartItems);
      console.log('cartItemsinuseeffect, ', cartItems);
    };
    fetchCart().catch((error) => {
      console.log('error.message', error.message);
      console.error(error);
    });
    console.log('cart item', cartItems);
  }, []);

  console.log('cart item', cartItems);

  /*

  const renderCart = (cartArr): any => {
    return (
    <ul className="collection col s12 m7">
      {cartArr.map((rock) => displayRock(rock))}
    </ul>
    );
  };

  }
  */

  const displayRock = (rock: any) => {
    const { birth_place, count, description, id, image, name, price, total } =
      rock;
    return (
      <li className="collection-item avatar">
        <div style={{ display: 'flex', alignItems: 'space-between' }}>
          <img className="circle responsive-img" src={image} />
          <div style={{ marginLeft: '20px' }}>
            <span className="title">{name}</span>
            <p>
              Description: {description} <br></br>
              Birth place: {birth_place}
            </p>
          </div>
          <div>
            <p>Price: {total}</p>
          </div>
        </div>
      </li>
    );
  };
  const renderCart = (cartArr: any): any => {
    return (
      <ul className="collection col s12 m7">
        {cartArr.map((rock: any) => displayRock(rock))}
      </ul>
    );
  };
  const subtotal = (cartItems: any): any =>
    cartItems.reduce(
      (totalCartPrice: number, currentRock: any) =>
        totalCartPrice + currentRock.total,
      0
    );
  return (
    <div className="row">
      {renderCart(cartItems)}
      {/* <ul className="collection col s12 m7">{cartItemsArr}</ul> */}
      <div className="col s12 m5">
        <div className="card">
          {/* <div className="card-image"> */}
          <div className="card-content">
            <h1 style={{ fontSize: '200px' }}>&#129704;&#11088;</h1>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"></img>
            <span className="card-title">Card Title</span> */}
          </div>
          <div className="card-content">
            {/* <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p> */}
            <p>
              {/* <span className="card-title">Subtotal: {subtotal()}</span> */}
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
