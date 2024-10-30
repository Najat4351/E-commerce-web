
function Intro(){
   return(<>
     <div className="flex flex-row h-24 bg-violet-200 fixed w-full p-10 z-50">
     <img src='./menu.jpg' alt='menu icon' className="w-4 h-4 self-center justify-self-end  ml-10  pr-0"></img>
     <div className="text-center flex flex-row ml-auto">
    <img src='./logo.jpg' alt='logo' className="w-14 h-14  self-center  "></img>
    <h1 className="self-center  ml-3 text-center text-4xl italic font-mono font-bold">Bubble</h1>
    </div>
    <div className="ml-auto flex flex-row gap-10 mr-5">
    <img src='./Home.png' alt='home icon' className="w-5 h-5 self-center "></img>
    <img src='./favorite.png' alt='favorite icon' className="w-4 h-4 self-center  "></img>
    <img src='./shopping-cart.webp' alt='cart' className="w-5 h-5 self-center  "></img>
  </div>
    </div>
  <img src="./Glowing-Skin.jpg" alt="girl advertising for skin product" className=" ml-0 pt-18 "></img>
</>
  )
}
export default Intro