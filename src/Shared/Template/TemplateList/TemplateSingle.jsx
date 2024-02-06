import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faHeart,faNotEqual} from '@fortawesome/free-solid-svg-icons'

const TemplateSingle = (params) => {
    const {image,productName,price,discount,totalReview,rating,totalSell} = params.item;
    return (
      <div className="overflow-hidden bg-white rounded shadow-xl group ">
     <div className="relative ">
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

    <div className="px-4 pt-4 pb-3 ">
         <a href="view.html" >
              <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition h-18 hover:text-primary ">{productName} </h4> 
         </a>

        <div className="flex items-baseline mb-1 space-x-2 " >
         <p className="text-xl font-semibold text-primary font-roboto "> ${price} </p>
         <p className="text-sm text-gray-400 line-through font-roboto "> ${discount}</p>
        </div> 
        <div className="flex items-center ">
             <div className="flex gap-1 text-sm text-yellow-400 ">
               {Array.from({ length: rating }).map((item,index)=> <FontAwesomeIcon key={index} icon={faStar} />)} 
              
             </div>
             <div className="mt-1 ml-3 text-xs text-gray-500">Review : {totalReview}</div>
             <div className="mt-1 ml-3 text-xs text-gray-500">Sells : {totalSell}</div>

        </div>
    </div>

    <a href="#" className="block w-full py-1 font-medium text-center text-white transition border rounded-b bg-cDarkBlue border-cLightBlue hover:bg-transparent hover:text-primary " >
         Add To Cart 
    </a>  
</div>
    );
};

export default TemplateSingle;