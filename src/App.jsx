import Intro from './Intro'
import Grid from './grid'


function App() {
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
         
         

 return(<div>
     <Intro/>
     <Grid />
  
</div>

 );
}

export default App
