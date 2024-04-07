import React from 'react';import Product from './courseProd';

var title =[
    {titleName:"Angular Course" ,author:"angular",duration:33,price:500,discount:false,available:false,quantity:0},
    {titleName:"React Course" ,author:"React",duration:33,price:500,discount:true,available:true,quantity:0},
    {titleName:"Node JS Course" ,author:"Node JS",duration:33,price:500,discount:true,available:true,quantity:0},
    {titleName:"Express Js Course" ,author:"Express JS",duration:33,price:500,discount:false,available:true,quantity:0}
]

const increment=(data,index)=>{
  var prod = [...title];
  let quantity=prod[index].quantity;
  prod[index].quantity++;
  title=[...prod];
  console.log("on click from child the event from child to parent is called")
}
const coursesCart = ()=>{
   return(
    <div className="container">
        <div className="title-container m-2">
        <h5 className="title">One Land to sell and purchase the courses</h5>

        </div>

    <div className="child-parent row">
        {title.map((data,index)=>{
            return( <Product key={index} id={index} title={data.titleName} author={data.author} discount={data.discount} available={data.available} price={data.price} quantity={data.quantity}
             onIncrement={()=>increment(data,index)}/>
            // when onIcrement(method that has to be called from child to emit changes or call method in parent) method is called in child component increment() method in parent component is called 
            )
        })}
    </div>
    </div>
   )
}

export default coursesCart;