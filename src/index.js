import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductCard from './ProductCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div className='content'>
 <h1 className="title">Product Card</h1>
 <div className="main-container">
 <ProductCard img={"https://images.mamaearth.in/catalog/product/o/i/oil-free-face-wash_1.jpg?fit=contain&height=200"} title="Oil-Free Face Wash with Apple Cider Vinegar" prize="₹ 999" btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>}/>
 <ProductCard img={"https://images.mamaearth.in/catalog/product/m/u/multani_mitti_face_wash_1.jpg?fit=contain&height=200"} title="Multani Mitti Face Wash with Multani Mitti" prize="₹ 999" btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>}/>
 <ProductCard img={"https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?fit=contain&width=200"} title="Rice Face Wash With Rice Control Water, 100ml" prize="₹ 977" btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>}/>
 <ProductCard img={"https://images.mamaearth.in/catalog/product/c/h/charcoal-face-wash-1.jpg?fit=contain&height=200"} title="Charcoal Face Wash for Oil Control, 100ml" prize="₹ 999" btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>}/>
 </div>
 </div>
 </>
);

