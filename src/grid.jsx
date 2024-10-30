import React,{useState} from 'react'
import Card from './cards';
import Cart from './cart';

function Grid(){
  const Contents=[{id:0,source:'/cleanser1.jpg',
    name:'cleanser',description:"Cleansers are used to remove dirt, oil, makeup, and impurities from the skin.",price:'10$'},
    {id:1,source:'/eyecream1.jpg',name:'eyecream',
      description:"Eye creams are specially formulated for the delicate skin around the eyes",price:'15$'}, 
    { id:2,source:'/moisturzer1.jpg',name:'moisturizer',
      description:
     "Moisturizers hydrate the skin and create a barrier to lock in moisture",price:'13$'},
    { id:3,source:'/primer1.jpg',name:'primer',
      description:"Primers create a smooth base for makeup, helping it to last longer and look better",price:'15$'},
    { id:4,source:'/sunscreen1.jpg',name:'sunscreen',
      description:"Sunscreens protect the skin from harmful UV rays, preventing sunburn",price:'19$'},
    {id:5 ,source:'/toner2.jpg',name:'toner',
      description:"Toners help to balance the skin's pH and remove any leftover impurities after cleansing",price:'18$'},]
  
  const [carts, setCarts] = useState([]);
  const[showcart,setshowcart]=useState(false)
  const [Back, setBack] = useState(true);

  const addToCart = (contentId) => {
    let contentToAdd= Contents.find(content => content.id ===contentId)
    if (contentToAdd) {
      setCarts(prevcarts => [...prevcarts, contentToAdd]);
      setshowcart(true);
    }
  };

  const handleBack = () => {
      setBack(false);
      setshowcart(false);
   
    }
   

        return (
      <div>
            {showcart?(<>
            < div className='flex flex-row'>
              <h2 className=' text-2xl  text-violet-500  text-center '>cart products</h2>
              {carts.map(function (cart, index) {
                return <Cart id1={index} key={cart.name} name1={cart.name} price1={cart.price} source1={cart.source} 
               />;
              })}
            </div>
            <div className='flex row justify-evenly'>
            <p>Total price:</p>
            <button type='button' className='mx-5 bg-violet-500  text-white rounded-xl p-3 text-center ' >checkout</button></div>
            </>
            ):(
       
              <div className='grid grid-cols-3  bg-violet-200 gap-16 '>
              {Contents.map(function (content, index) {
                return <Card id={content.id} key={content.name} name={content.name} price={content.price} description={content.description} source={content.source} 
                cartHandler={()=>addToCart(content.id)}/>;
              })}
              
            </div>
            )}
         </div>
          );

}
export default Grid