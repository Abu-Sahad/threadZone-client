import React, { useEffect, useState } from 'react';
import TemplateGridSingle from './TemplateGridSingle';

const TemplateGridView = ({productList}) => {
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 gap-x-8'>
         {
            productList.map((item,index)=> <TemplateGridSingle key={index} item={item} />)  
         }   
         </div>        
    );
};  

export default TemplateGridView; 