import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import { OrderContext } from '../../../../Contexts/OrderContext';
import axios from 'axios';
import {AuthContext} from '../../../../Providers/AuthProvider';

const CustomerOrder = () => {
  const [products,setProducts] = useState([]);
  const { userInfo } = useContext(AuthContext);
 // console.log("user Info ",userInfo);
  useEffect(()=>{
    axios.post('http://localhost:5000/getCustomerOrderList',{userId:userInfo._id})
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err));
  },[])

   console.log("customer orderList ",products)
    return (
  <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Shop Name</th>
        <th>Delivery Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        products.map((product,index)=>
          <tr key={index}>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.productName}</div>
              <div className="text-sm opacity-50">{product.userName}</div>
            </div>
          </div>
        </td>
        <td>
          
          <span className="badge badge-ghost badge-sm">{product.shopName}</span>
        </td>
        <td>{product.date}</td>
        <th>
          <button className={`btn btn-ghost  hover:text-black ${product.status==='warehouse'?'bg-blue-500' : 'bg-green-500'} text-white btn-xs` }>
           {product.status==='warehouse'?'Warehouse':'Delivered'}
            </button>
        </th>
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
    );
};

export default CustomerOrder;