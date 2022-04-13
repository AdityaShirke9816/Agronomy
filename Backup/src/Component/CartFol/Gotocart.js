import React, { useState,useEffect} from "react";
import GetProducts from "../CustomerFol/GetProducts";
function GoTocart()
{
   // {cartItems,setCartItem}

    
 // const viewcart=JSON.parse(localStorage.getItem("cartItems"));
  //const[prod,setProd]=useState([...viewcart]);




  const cartFromLocalStorage=JSON.parse(localStorage.getItem('cartItems')|| '[]');
  const[cartItems,setCartItem]=useState(cartFromLocalStorage);
    

   useEffect(()=> {
      localStorage.setItem("cartItems",JSON.stringify(cartItems));
    },[cartItems]);
    


       // debugger;
    const clearCart=()=>{
        setCartItem([]);
    };


  const remove=(prodid)=>{
    /* setProd(
    
        prod.filter((prod) => prod.prodid !==prodid)
      );*/
       
      setCartItem(
    
        cartItems.filter((cartItems) => cartItems.prodid !==prodid)
      );

 };



const getTotalSum =()=>{
    return  cartItems.reduce((sum,{price,quantity})=>sum+price*quantity,0);
};


return(
    <div>
        <h1>cart to be displayed</h1>

        <div>
              
            
              <h1>Products Page</h1>
              
              <div class="iconShoping">
                 <button><a href="/customerhome">Home</a></button> &nbsp; &nbsp; &nbsp; &nbsp; <button>Checkout</button>
                 &nbsp; &nbsp; &nbsp; &nbsp; 
                  <button onClick={clearCart}>ClearCart</button>
              
  
              </div>
              <table className="table">
              <tr>
                  <th> Product Name  </th>
                  
                  <th> Company Name  </th>
                  <th> Var Model </th>
                  <th> Description  </th>
                  <th> Price  </th>
                  <th>Quantity</th>
              </tr>
             
              {
                cartItems.map((v)=>{
                      return(
                          <tr>
                             <td>{v.prodid}</td> 
                             
                             <td>{v.prodname}</td> 
                             <td>{v.compname}</td>
                             <td>{v.varmodel}</td>
                             <td> Rs.{v.price} </td> 
                             <td>{v.quantity}</td>
                             <td>
                             <form>
                                {/* <input type="number" name="qty" min="1" defaultValue={1}/>*/}
                                     <button onClick={()=>remove(v.prodid)}>Remove</button>
                             </form>

                             </td>
                          </tr>
                      )
                  })
              }
          </table>
         
  
      </div>      
                    

                <div>Total Cost : {getTotalSum()}</div>


    </div>
   
);

}
export default GoTocart;