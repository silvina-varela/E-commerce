import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addToCart, getCartByUserId } from '../../redux/actions';
import './DetailCard.css';
import { StarIcon } from '@heroicons/react/20/solid'
import { HashLink } from 'react-router-hash-link';
import { addFavorite, deleteFavorite } from "../../redux/actions";

export const DetailCard = ({ image, name, rank, colors, price, description, stock, id, category }) => {


  const [amount, setAmount] = useState(1);
  // const dispatch = useDispatch();

  // useEffect (() => {
  //   dispatch(getCartByUserId(userId))
  //   console.log('soyelcarrito',cartByUserId)
  // },[]); del global cartByUserId, userId
  const dispatch = useDispatch();
  const { cart, summary,  productComments, favorites} = useSelector( (state) => state);

  const handlePlus = () => {
    const aux = amount+1;
    if (aux<=stock) {
      setAmount(aux);
    };
  };

  const handleLess = () => {
    const aux= amount-1;
    if (aux > 0) {
      setAmount(aux);
    };
  };

  const handleAdd = () => {
    const cartNew = {
      amount: amount,
      id: id,
      name:name,
      price: price,
      stock: stock,
      image: image,
      category: category?category:"",
    };
    localStorage.setItem('cart',JSON.stringify([...cart,cartNew]));
    localStorage.setItem('summary',JSON.stringify(parseInt(summary) + (amount*price)));
    // if( id && cartByUserId) {
    //  dispatch(addToCart(id,cartByUserId));
    // }
  };


  const [checkedColor, setCheckedColor] = useState(undefined)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

  const setFavorites = (option) => {
    option === "add" && dispatch(addFavorite(id));
    option === "erase" && dispatch(deleteFavorite(id));
  };

  return (
    <div>
      <div className="flex flex-row justify-center space-x-20 pt-20">
        <div className="mb-12">
          <img
            src={image}
            alt="product"
            className="w-80 h-80 object-contain"
            onError={(e) => {
              e.target.src =
                "https://cdn.shopify.com/s/files/1/0346/1319/8893/collections/elate1.jpg?v=1590520129";
            }}
          />
        </div>
        <div className="items-start">
          <h3 className="uppercase text-2xl">{name}</h3>
          <div>
            <p className="divDetail_p">

{/* Reviews */}
            <div className="mt-4 mb-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        rank > rating ? 'text-secondary' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{rank} out of 5 stars</p>
                <HashLink to="#comments" className="ml-3 text-sm font-medium text-primary hover:text-secondary">{productComments?.length === 1 ? `${productComments?.length} review` : `${productComments?.length} reviews`}</HashLink>
              </div>
            </div>
            </p>
            <p className="text-lg pb-6">
              <b>$ {price}</b>
            </p>
          </div>

{colors?.length && <div>
  <label>{checkedColor?.length ? `You've picked: ${checkedColor}` : "Pick a color"}<br/>
              { colors?.map((p, index) => {
                return (
                  <span key={index}>
                  <input 
                    type="radio"
                    className="cursor-pointer w-5 h-5"
                    style={{ backgroundColor: `${p.hex_value}` }}
                    name="color"
                    value={p.colour_name}
                    onChange={(e)=>setCheckedColor(e.target.value)}
                  />{" "}
                  </span>
                );
              })}
            </label>
            </div>
          }

          <div className="pt-10 flex items-center">
            <div className="divAddCart_div">
            <button onClick={ handleLess } className='div_button1'>-</button>
            <p className='dic_p'>{amount}</p>
            <button onClick={ handlePlus } className='div_button2'>+</button>
          </div>
         <div className="flex items-center rounded-lg text-white text-3xl bg-secondary">
         <button onClick={ handleAdd } className='p-3 border-r-2 border-white'>ADD TO CART</button>
         {favorites && favorites.includes(id) ? (
                  <button
                    className={`material-icons w-16 text-3xl px-4 text-white`}
                    onClick={() => setFavorites("erase")}
                  >
                    heart_broken_outlined
                  </button>
                ) : (
                 
                  <button
                  className={`material-icons w-16 text-3xl px-4 text-white`}
                  onClick={() => setFavorites("add")}
                >
                    favorite_border
                  </button>
                )}
         </div>
          </div>
        </div>
      </div>
      <p
        className="mx-auto max-w-2xl lg:max-w-screen-lg pt-40 pb-40"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
