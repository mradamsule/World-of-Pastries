import lmagepast from '../assets/imagepast.jpeg'
export default function Home() {
  return (
    <div className='flex flex-col md:flex-row m-2 items-center mt-30'>
    <img src={lmagepast} alt=""  className=' h-118  md:w-[50%]' />
   
     <div className="md:w-1/2 space-y-6 md:ml-15 ">
      <h1 className='text-center font-bold text-3xl '>
      Wellcome to world of Pastries!
    </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Delicious Meals Delivered to Your Door
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our menu and enjoy fresh, tasty food from the comfort of your home. Fast delivery, great flavors!
          </p>
          <div className="flex gap-4">
            <a
              href="/Menu"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-500"
            >
              Order Now
            </a>
            <a
              href="/contact"
              className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-100"
            >
              Contact Us
            </a>
          </div>
        </div>
    </div>
  );
}