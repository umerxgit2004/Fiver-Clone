import React from 'react'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import { cards } from '../../data';
import CatCard from '../../components/catCard/CatCard';

const Home = () => {
  return (
    <div>
      <Featured/>
      <TrustedBy/>
      <Slide
        superLargeDesktopItems={5}
        superLargeDesktopSlides={3}
        desktopItems={4}
        desktopSlides={2}
        tabletItems={3}
        tabletSlides={2}
        mobileItems={3}
        mobileSlides={2}
      >
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home
