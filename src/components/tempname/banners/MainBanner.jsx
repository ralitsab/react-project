import bannerImage from '../../../assets/banners/olipop_pink.png';
import { Link } from 'react-router-dom';

export default function MainBanner() {
  return (
      <div>
          <div className="relative bg-cover bg-center w-full min-h-screen md:h-screen" style={{ backgroundImage: `url(${bannerImage})` }}>
              <div className="flex flex-col z-10 text-center text-white p-10 justify-center items-start h-full md:h-full">
                  <div className='hidden md:flex flex-col justify-center'>
                      <h1 className="antialiased m-0 p-0 font-display text-5xl md:text-6xl text-mainGreen text-center pb-5">A New Kind Of Soda</h1>
                      <p className="antialiased m-0 p-0 font-display text-2xl md:text-2xl text-mainGreen text-center pb-10">Healthy soda that's delicious and good for you.</p>
                      <Link
                       to="/products" className="border-solid border-mainGreen rounded-full border-2 font-bold text-lg text-center text-mainGreen pt-2 pb-2 transition ease-in-out delay-150 hover:bg-mainGreen hover:text-white duration-300">Shop Now</Link>
                  </div>
              </div>
          </div>

          <div className="md:hidden bg-beige p-10 text-center">
              <h1 className="antialiased m-0 p-0 font-display text-5xl md:text-6xl text-mainGreen text-center">A new kind of soda</h1>
              <p className="text-xl mb-6">Healthy soda that's delicious and good for you.</p>
              
              <Link
                       to="/products" className="border-solid bg-mainGreen text-white rounded-full border-2 font-bold text-lg text-center text-mainGreen pt-2 pb-2 pl-10 pr-10 transition ease-in-out delay-150 hover:bg-mainGreen hover:text-white duration-300">Shop Now</Link>
                  </div>
      </div>
  );
}
