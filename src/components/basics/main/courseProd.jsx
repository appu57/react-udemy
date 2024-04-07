import React, { Component ,useState} from 'react';
import {Link, NavLink}  from 'react-router-dom'

// export default class ProductClass extends Component
// {
//     render(){
//         this.props;
//         return <div>Product {this.props}</div>
//     }
// }

//Above is the way to capture the data sent from parent to child using props => within class
const prefixBasedOnTag=(discount) =>{
    if(discount)
    {
    return <p>Flat {discount} off on our courses Just for you !!</p>
    }
    
}

const checkDiscount=(available)=>{
   if(available)
   {
       return <button className="btn btn-success">Add to Cart</button>
   }
   else{
        return <button className="btn btn-primary">Notify Me</button>
   }
}
const Product=({id,title,author,discount,available,price,onIncrement,quantity})=>{ //within functions
   //const [cart] = useState(0); //use state used to set initial value of a state (state is a variable that is used within render to show the data)

  return(

      <div className="card m-2 col-lg-4 col-md-5 col-sm-5">
         <div className="card-header">
             {/* image  */}
         </div>
         <div className="card-body">
             <div className="card-title"> 
                 <NavLink to={`/product/${id}`}  className="nav-link"><h5>{title}</h5></NavLink> {/* routing */}

             </div>
             <p className="author">{author}</p>
             <p>{prefixBasedOnTag(discount,price)}</p>
             <p>Purchase our course at just {price} /-</p>
         </div>
         <div className="card-footer">
         <p>{quantity}</p>
         <h6 onClick={onIncrement}>{checkDiscount(available)}</h6>
         </div>
      </div>
  )
}

export default Product;