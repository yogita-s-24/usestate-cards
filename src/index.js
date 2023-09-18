import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductCard from './ProductCard';
import Img from './image-1.jpg';
import Image from './image-2.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <h1 className="title">Product Card</h1>
 <div className="main-container">
 <ProductCard img={Img} title="Onion Hair Oil for Hair Regrowth and Hair Fall" prize="₹ 999" btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>}/>
 <ProductCard img={Image} title="wqwe" prize="₹ 999" btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>}/>
 <ProductCard img={Image} title="wqwe" prize="₹ 977" btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>}/>
 <ProductCard img={Image} title="wqwe" prize="₹ 999" btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>}/>
 </div>
 </>
);

