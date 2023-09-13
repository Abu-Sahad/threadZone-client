import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import TemplateStar from '../../Shared/Template/TemplateSidebar/TemplateStar';
import TemplatePrice from '../../Shared/Template/TemplateSidebar/TemplatePrice';
import TemplateSize from '../../Shared/Template/TemplateSidebar/TemplateSize';
import TemplateColor from '../../Shared/Template/TemplateSidebar/TemplateColor';
import ProductListTop from '../Product/ProductList/ProductListTop';
import TemplateGridView from '../../Shared/Template/TemplateList/TemplateGridView';
import TemplateListView from '../../Shared/Template/TemplateList/TemplateListView';
import TemplatePagination from '../../Shared/Template/TemplateSidebar/TemplatePagination';
import { ProductContext} from '../../Contexts/ProductContext';
import { useParams } from 'react-router-dom';

const Category = () => {
    const [product, setProduct] = useState([]);
    const [totalProduct, setTotalProduct] = useState(1);
    const [view,setView] = useState('grid');
    const {dispatch,state} = useContext(ProductContext);
    const [ratingList,setRatingList] = useState([]);
    const [sizeList,setSizeList] = useState([]);
    const [colorList,setColorList] = useState([]);
    const params = useParams();

     useEffect(() => {

       axios.post('http://localhost:5000/categoryInformation',{categoryName:params.categoryName,type:'category'})
      .then(res => {
        setColorList(res.data.colorList);
        setSizeList(res.data.sizeList);
        setRatingList(res.data.ratingList);
          console.log(" res data ",res.data.colorList);
      })
      .catch(err => console.log(err));

      axios.post('http://localhost:5000/getProducts', state)
      .then((res) => {
        setTotalProduct(res.data.totalProduct);
        // console.log("res data ",res.data.totalProduct)
        setProduct(res.data.productArray);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
     }, [state]);

    useEffect(() => {
      dispatch({type:'FILTER_BY_CATEGORY',payload:params.categoryName});
    },[params.categoryName])

        return ( 
        <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative pb-4"> 
         {/* SideBar Start here  */}
            <div className="col-span-1 font-poppins pb-6 shadow-lg rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block px-5 py-5 ">
             <div className=" divide-y space-y-5 relative">
              { ratingList && <TemplateStar  starType={ratingList} />}
              <TemplatePrice /> 
             { colorList && <TemplateColor   allColor={colorList}/> }  
             </div>
            </div>
            {/* //  Product List Start here */}
            <div className="col-span-3 flex flex-col">
                <ProductListTop view={view} setView={setView}/>
               {view==='grid' &&  <TemplateGridView productList={product}/> } 
              { view ==='list' && <TemplateListView productList={product} /> }
             <div className='mt-5 mx-auto'>
              <TemplatePagination />
             </div>
            </div>
            
        </div>
    );
};

export default Category;