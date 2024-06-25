import './slide.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slide = ({ 
  superLargeDesktopItems, 
  superLargeDesktopSlides,
  desktopItems, 
  desktopSlides, 
  tabletItems, 
  tabletSlides, 
  mobileItems, 
  mobileSlides, 
  children 
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: superLargeDesktopItems,
      slidesToSlide: superLargeDesktopSlides
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktopItems,
      slidesToSlide: desktopSlides
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: tabletItems,
      slidesToSlide: tabletSlides
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mobileItems,
      slidesToSlide: mobileSlides
    }
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      showDots={true}
    >
      {children}
    </Carousel>
  );
};

export default Slide;
