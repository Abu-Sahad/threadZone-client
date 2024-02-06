import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faNotEqual } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const TemplateSingle = (params) => {
     const { userInfo } = useContext(AuthContext);
     const { _id, name, email } = userInfo
     const { id, image, category, productName, price, discount, totalReview, rating, totalSell, shopId, shopName, discription, color, quantity, size, totalVisit, updateDate } = params.item;
     const currentDate = new Date();
     const month = currentDate.getMonth() + 1;
     const day = currentDate.getDate();
     const year = currentDate.getFullYear().toString().substr(-2);
     const formattedDate = `${day}-${month}-${year}`;
     const productInfo = {
          productId: params.item._id,
          productName,
          image,
          quantity: 1,
          available: quantity,
          userId: _id,
          userName: name,
          shopId,
          shopName,
          status: 'approved',
          addReview: '',
          isReturn: false,
          date: formattedDate,
          category,
          price,
          size
     }

     const handleAddProduct = () => {
          console.log("product is submitted ");
          axios.post('https://thread-zone-server-abu-sahad.vercel.app/orderSubmit', productInfo)
               .then(res => {
                    console.log("product is added", res.data);
                    Swal.fire({
                         icon: 'success',
                         title: 'Success',
                         text: 'Product now add to Cart',
                    })
               })
               .then(err => {
                    console.log(err);
               })
     }
     //console.log("Id =>",id)
     // const wordsArray = discription.split(/\s+/);
     // const first20WordsArray =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad error nesciunt placeat unde blanditiis aliquid sit? Voluptatibus, eius incidunt.";
     // const description = first20WordsArray.join(' ');

     const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad error nesciunt placeat unde blanditiis aliquid sit? Voluptatibus, eius incidunt.";

     return (
          <div className="flex flex-col overflow-hidden bg-white rounded shadow-xl group md:flex-row">
               <div className="relative w-3/5 my-5 ms-10">
                    <img src={image} className="w-full shadow-md h-80" />

                    <div className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100 ">
                         <a href="view.html" className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-cDarkBlue hover:bg-gray-800 " >
                              <FontAwesomeIcon icon={faNotEqual} />

                         </a>
                         <a href="#" className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-cDarkBlue hover:bg-gray-800 "  >
                              <FontAwesomeIcon icon={faHeart} />
                         </a>
                    </div>
               </div>

               <div className="items-center pt-8 pb-3">
                    <Link to={`../product/productDetails/${id}`} className='flex items-center w-full' >
                         <h4 className="mx-auto mb-2 text-xl font-medium text-gray-800 uppercase transition h-18 hover:text-primary">{productName} </h4>
                    </Link>

                    <div className="flex justify-center mb-1 space-x-2 " >
                         <p className="text-xl font-semibold text-primary font-roboto "> {price} </p>
                         <p className="text-sm text-gray-400 line-through font-roboto "> {discount}%</p>
                    </div>
                    <p className='text-center text-gray-600 font-xl font-poppins'>Stock Available : {quantity}</p>
                    <div className="flex flex-col items-center gap-4 w-88">
                         <div className='flex flex-row justify-start'>
                              <div className="flex gap-1 text-sm text-yellow-400 ">
                                   {Array.from({ length: rating }).map((item, index) => <FontAwesomeIcon key={index} icon={faStar} />)}

                              </div>
                              <div className="mt-1 ml-3 text-xs text-gray-500">Review : {totalReview}</div>
                              <div className="mt-1 ml-3 text-xs text-gray-500">Sells : {totalSell}</div>
                         </div>

                         <div className='flex flex-row'>
                              <div className="mt-1 ml-3 text-xs text-gray-500">Category : {category}</div>
                              <div className="mt-1 ml-3 text-xs text-gray-500">Color : {color}</div>
                              <div className="mt-1 ml-3 text-xs text-gray-500">Shop Name : {shopName}</div>
                         </div>
                         <div className='flex flex-row'>
                              <div className="mt-1 ml-3 text-xs text-gray-500">Size : {size}</div>
                              <div className="mt-1 ml-3 text-xs text-gray-500">totalVisit : {totalVisit}</div>
                         </div>
                         <div className='px-5 py-3 text-center font-poppins'><span className='font-bold'>Description : </span>{description}</div>
                    </div>
                    <button onClick={handleAddProduct} className="block w-32 py-1 mx-auto font-medium text-center text-white transition border rounded-b bg-cDarkBlue border-cLightBlue hover:bg-transparent hover:text-primary " >
                         Add To Cart
                    </button>
               </div>


          </div>
     );
};

export default TemplateSingle;