import React, { useRef, useState } from 'react';
import {Carousel} from 'react-responsive-carousel';
import img2 from '../../../assets/Slider Image/image-2.png';
import img3 from '../../../assets/Slider Image/image-3.png';
import img4 from '../../../assets/Slider Image/image-4.png';
import img5 from '../../../assets/Slider Image/image-5.png';

export default function TemplateDetailsImage(params) {  
   const image = params.image;
    // console.log("image params",image[0]);
  return(
     <Carousel className=''>
            
            {
                image.map(img=>
                <div key={img}>
                <img className="single-img cursor-pointer border border-primary" src={img} />
                </div>
                )
            }

        </Carousel>
  );
}



