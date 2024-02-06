import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import TemplateCategory from '../../Shared/Template/TemplateSidebar/TemplateCategory';
import TemplateStar from '../../Shared/Template/TemplateSidebar/TemplateStar';
import TemplatePrice from '../../Shared/Template/TemplateSidebar/TemplatePrice';
import TemplateSize from '../../Shared/Template/TemplateSidebar/TemplateSize';
import TemplateColor from '../../Shared/Template/TemplateSidebar/TemplateColor';
import ProductListTop from './ProductList/ProductListTop';
import { ProductContext } from '../../Contexts/ProductContext';
import TemplateGridView from '../../Shared/Template/TemplateList/TemplateGridView';
import TemplateListView from '../../Shared/Template/TemplateList/TemplateListView';
import axios from 'axios';
import TemplatePagination from '../../Shared/Template/TemplateSidebar/TemplatePagination';

const Product = () => {
  const { state, dispatch, product } = useContext(ProductContext);
  const [view, setView] = useState('grid');
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios.get('https://thread-zone-server-abu-sahad.vercel.app/productInformation')
      .then(res => {
        setProductInfo(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (

    <div className="relative grid items-start w-full gap-4 px-4 pt-4 pb-4 mx-auto lg:grid-cols-4">
      <div className="absolute z-10 col-span-1 px-5 py-5 pb-6 overflow-hidden rounded shadow-lg font-poppins lg:static left-4 top-16 w-72 lg:w-full lg:block ">
        <div className="relative space-y-5 divide-y ">
          {productInfo.ratingList && <TemplateStar starType={productInfo.ratingList} />}
          <TemplateSize />
          <TemplatePrice />
          {productInfo.colorList && <TemplateColor allColor={productInfo.colorList} />}
          {productInfo.categoryList && <TemplateCategory allCategory={productInfo.categoryList} />}
        </div>
      </div>
      {/* //  Product List Start here */}
      <div className="flex flex-col col-span-3">
        <ProductListTop view={view} setView={setView} />
        {view === 'grid' && <TemplateGridView productList={product} />}
        {view === 'list' && <TemplateListView productList={product} />}
        <div className='mx-auto mt-5'>
          <TemplatePagination />
        </div>
      </div>


    </div>
  );
};

export default Product;