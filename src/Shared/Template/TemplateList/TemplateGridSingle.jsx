import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faCartShopping, faStreetView } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { faSellsy } from '@fortawesome/free-brands-svg-icons';

const TemplateGridSingle = (params) => {
     const { userInfo } = useContext(AuthContext);
     const { _id, name, email } = userInfo
     const { id, image, category, productName, price, discount, totalReview, rating, totalSell, shopId, shopName, quantity, size, totalVisit } = params.item;
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
          size,
     }

     const handleAddProduct = () => {
          console.log("product is submitted ");
          axios.post('https://thread-zone-server-abu-sahad.vercel.app/orderSubmit', productInfo)
               .then(res => {
                    console.log("product is added", res.data);
                    Swal.fire({
                         icon: 'success',
                         title: 'Approve',
                         text: 'Product now add to Product List',
                    })
               })
               .catch(err => {
                    console.log(err);
               })
     }
     return (
          <div className="bg-white rounded shadow-xl group">
               <div className="relative ">
                    <img src={image[0]} className="w-full divide-x-2 h-60 " />
                    <div className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100 ">
                         <Link to={`productDetails/${params.item._id}`} className="flex items-center justify-center text-base text-white transition rounded-full w-9 h-9 bg-cDarkBlue hover:bg-gray-800 " >
                              <FontAwesomeIcon icon={faEye} />
                         </Link>
                         <Link href="#" className="flex items-center justify-center text-lg text-white transition rounded-full w-9 h-9 bg-cDarkBlue hover:bg-gray-800 " onClick={handleAddProduct}  >
                              <FontAwesomeIcon icon={faCartShopping} />
                         </Link>
                    </div>
               </div>

               <div className="px-4 pt-4 pb-8">
                    <Link to={`../product/productDetails/${params.item._id}`}>
                         <h4 className="text-lg font-medium text-gray-800 h-18 hover:text-primary">{productName} </h4>
                    </Link>
                    <p className="text-sm text-gray-500">{category}</p>
                    <div className="flex items-baseline mb-1 space-x-2 " >
                         <p className="text-base font-semibold text-blue-600 font-roboto "> ${price} </p>
                         <p className="text-sm text-red-400 line-through font-roboto "> ${discount}</p>
                    </div>
                    <div className="flex flex-row justify-between mx-5"> 
                     <div className="flex flex-row">
                        <FontAwesomeIcon icon={faEye} className='mr-2 text-red-500'/> 
                        <p className='text-sm font-light text-gray-500'> {totalVisit} </p>
                     </div>
                     <div className="flex flex-row">
                        <FontAwesomeIcon icon={faStreetView} className='mr-2 text-green-500'/> 
                        <p className='text-sm font-light text-gray-500'> {totalReview} </p>
                     </div>
                     <div className="flex flex-row">
                        <FontAwesomeIcon icon={faSellsy} className='mr-2 text-blue-500'/> 
                        <p className='text-sm font-light text-gray-500'> {totalSell} </p>
                     </div>
                    </div>
               </div>
          </div>

     );
};

export default TemplateGridSingle;