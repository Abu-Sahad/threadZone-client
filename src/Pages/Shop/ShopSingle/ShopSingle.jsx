import React from 'react';
import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import TemplateStar from '../../../Shared/Template/TemplateSidebar/TemplateStar';
import TemplatePrice from '../../../Shared/Template/TemplateSidebar/TemplatePrice';
import TemplateColor from '../../../Shared/Template/TemplateSidebar/TemplateColor';
import ProductListTop from '../../Product/ProductList/ProductListTop';
import TemplateGridView from '../../../Shared/Template/TemplateList/TemplateGridView';
import TemplateListView from '../../../Shared/Template/TemplateList/TemplateListView';
import TemplatePagination from '../../../Shared/Template/TemplateSidebar/TemplatePagination';
import {ProductContext} from '../../../Contexts/ProductContext';
import {useParams} from 'react-router-dom';

const ShopSingle = ({shopId}) => {
   const [product, setProduct] = useState([]);
    const [totalProduct, setTotalProduct] = useState(1);
    const [view,setView] = useState('grid');
    const {dispatch,state} = useContext(ProductContext);
    const [ratingList,setRatingList] = useState([]);
    const [sizeList,setSizeList] = useState([]);
    const [colorList,setColorList] = useState([]);
    const params = useParams();

     useEffect(() => {
       axios.post('http://localhost:5000/shopInformation',{shopId})
      .then(res => {
        setColorList(res.data.colorList);
        setSizeList(res.data.sizeList);
        setRatingList(res.data.ratingList);
        //  console.log(" res data ",res.data);
      })
      .catch(err => console.log(err));

      axios.post('http://localhost:5000/getProducts', state)
      .then((res) => {
        setTotalProduct(res.data.totalProduct);
        setProduct(res.data.productArray);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
     }, [state]);

    useEffect(() => {
      dispatch({type:'SET_SHOP',payload:shopId});
    },[shopId]) 

        return ( 
        <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative pb-4"> 
         {/* SideBar Start here  */}
           { product.length>0 &&  <div className="col-span-1 font-poppins pb-6 shadow-lg rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block px-5 py-5 ">
           <div className=" divide-y space-y-5 relative">
              { ratingList && <TemplateStar  starType={ratingList} />}
              <TemplatePrice /> 
             { colorList && <TemplateColor   allColor={colorList}/> }  
             </div>
            </div>  }
            {/* //  Product List Start here */}
            {product.length<1 && <div className='text-3xl text-center col-span-3    '>No product in this shop</div>}
            {product.length>0 &&  <div className="col-span-3 flex flex-col">
                <ProductListTop view={view} setView={setView}/>
               {view==='grid' &&  <TemplateGridView productList={product}/> } 
              { view ==='list' && <TemplateListView productList={product} /> }
             <div className='mt-5 mx-auto'>
              <TemplatePagination />
             </div>
            </div> }
            
        </div>
    );
};

export default ShopSingle;