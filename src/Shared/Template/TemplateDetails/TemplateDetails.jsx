import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsImage from './TemplateDetailsImage';
import ProductDetailsInformation from './TemplatetDetailsInformation';
import TemplateReviews from './TemplateReviews';
import axios from 'axios';
import TemplateDescription from './TemplateDescription';
const TemplateDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.post('http://localhost:5000/getSingleProduct', { productId: params.productId })
      .then(res => {
        setProduct(res.data);
         console.log(" image check ", res.data)
      })
      .catch(err=>{console.log(err)});
    },[])
 return (
  
   <>
   <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6 ">
    {product.image &&  <ProductDetailsImage image={product.image} />}
      <ProductDetailsInformation productData={product}/>  
   </div> 

    {/* <TemplateDescription details={product.discription } /> */}


      <TemplateDescription details={product.discription} />

      <TemplateReviews productId={params.id} />
    </>

  );
};

export default TemplateDetails;