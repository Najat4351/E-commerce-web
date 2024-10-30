
import React,{useState} from 'react'
function Card(props) {
  const [source2, setsource2] = useState()
  const SecondImages=['./cleanser2.jpg','./eyecream.jpg','./moisturizer2.jpg','./primer.jpg','./sunscreen2.jpg','./toner.webp']
  const FirstImages=['./cleanser1.jpg','./eyecream1.jpg','./moisturzer1.jpg','./primer1.jpg','./sunscreen1.jpg','./toner2.jpg']
  const handlesourceleft=(event)=>{
    const Id=event.target.dataset.value;
    const found2=SecondImages.find((secondimage,index)=>index==Id)
    setsource2(found2);
  }

  const handlesourceright=(event)=>{
    const Id=event.target.dataset.value;
    const found1=FirstImages.find((secondimage,index)=>index==Id)
    setsource2(found1);
  }
  
 

  
 
  return (
    <div className='min-w-fit m-auto mt-10 h-full justify-evenly text-center rounded-l bg-white p-10'>
     <div className='flex flex-row gap-x-8 items-center'>
      <button type='button' onClick={handlesourceleft} data-value={props.id} className='bg-violet-200 pr-2 pl-2 text-white rounded-full text-center hover:bg-violet-500'>&lt;</button>
        <img src={source2} className='h-40 w-40 items-start' ></img>
        <button type='button' onClick={handlesourceright} data-value={props.id} className='bg-violet-200 pr-2 pl-2 text-white rounded-full text-center  hover:bg-violet-500'>&gt;</button>
        </div>
        <div className='flex flex-row justify-between'>
      <h4 className={`${props.name}`}>{props.name}</h4>
      <p onClick={props.addfavoriteHandler}>♡</p>
      </div>
      <p className='text-center w-40'>{props.description}</p>
      <div className='flex flex-row text-center justify-between'>
      <h6 className=''>{props.price}</h6>
      <button type='button' onClick={props.cartHandler} data-value={props.id} className='mx-5 bg-violet-500  text-white rounded-xl p-3 text-center '>Add to Cart</button>
      </div>
    </div>
  );
}
export default Card
