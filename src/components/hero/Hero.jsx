import './hero.css';
import Testimonial from '../testimonial/Testimonial';
import Gallery from '../gallery/Gallery';
import { Link } from 'react-router-dom';
import ShopSection from '../shopSection/ShopSection';
import SubscribeSection from '../subscribeSection/SubscribeSection';
import ArrivalsSection from '../arrivalsSection/ArrivalsSection';

// import {bannerText} from '../../data.js';
// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Banner from './Banner.jsx';

const Hero = ()=>{
    return(
      <>
    {/* <!--hero Section starts  --> */}

    <header className="hero-section">
      <div className="header-text">
        <h1>Sale 20% Off <span>On Everything</span></h1>
        <p>
        Enjoy exclusive savings on all our products! Shop now and take advantage of this limited-time offer to elevate your style, enhance your space, or find the perfect gift.
        </p>
        <button><Link to="/">Shop Now</Link></button>
      </div>
    </header>
    {/* <!-- Hero Section ends  --> */}

<ShopSection/>
<ArrivalsSection/>
<Gallery/>
<SubscribeSection/>
<Testimonial/>


      </>
    )


        {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{ delay:3000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    > 
    {
      bannerText.map((item)=>{
        return(
          <SwiperSlide >
          <Banner  className='outer' heading={item.heading} para={item.para} image={item.image} />
    </SwiperSlide>
        )
      })
    }
    </Swiper> */}


}
export default Hero;