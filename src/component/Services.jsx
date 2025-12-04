 import Small from '../assets/Small chops.jfif'
 import Samosa from '../assets/samosa.jfif'
 import Chicken from '../assets/Chicken.jfif'
 import Fried from '../assets/fried.jfif'
 import Cake from '../assets/cakes.jfif'
 import Milky from '../assets/Milky.jfif'
 export default function Contact() {
  return (
     <div>
<h1 className="mt-30 font-bold text-5xl text-center">Our services</h1>

  <div  className=" grid grid-cols-2 text-center gap-10 m-3 ">
    <ul className='bg-white p-3 rounded-xl shadow hover:shadow-lg transition text-center'>
    <li>Event Catering</li>
    <li>Food Content Creation</li>
    <li>Pastry Classes</li>
   </ul>
   <ul className='bg-white p-3 rounded-xl shadow hover:shadow-lg transition text-center'>
     <li>Small Chop</li>
    <li>Grils</li>
    <li>Moctail</li>
    <li>Lunch Pack</li>
   </ul>
  </div>
  {/* <ul className='grid grid-cols-3  text-center '>
    <li className='w-50 h-50'><img src={Small} alt="" /></li>
    <li className='w-50 h-50'></li>
    <li className='w-35 h-30'><img src={Samosa} alt="" /></li>
    <li className='w-50 h-50'><img src={Fried} alt="" /></li>
    <li className='w-70 h-50'><img src={Cake} alt="" /></li>
    {/* <li className='w-50 h-50'><img src={Milky} alt="" /></li> */}
  
<div className='grid md:grid-cols-3 grid-rows-3 items-center gap-3 py-5 px-3'>

<div className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"><img src={Small} alt="" /></div>
<div className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"><img src={Chicken} alt="" /></div>
<div className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"><img src={Samosa} alt="" className='w-50 h-55'/></div>
<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"><img src={Fried} alt="" className='w-50 h-60'/></div>
<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"><img src={Cake} alt="" className='w-55 h-60'/></div>
<div className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center "><  img src={Milky} alt=""  className='w-49 h-60 items-center'/></div>


</div>
 </div>
  )
}