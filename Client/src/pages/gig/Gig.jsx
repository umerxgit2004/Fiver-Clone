import './gig.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from '../../components/slide/Slide';

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
            <span className="breadCrumbs">FIVERR GRAPHIC & DESIGN</span>
            <h1>I will create ai generated art for you</h1>

            <div className="user">
              <img className='pp' src="" alt="" />
              <span>Umer</span>
              <div className='stars'>
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <img src="./img/star.png" alt="" />
                <span>5</span>
              </div>
            </div>
            <Slide className="slider"
            superLargeDesktopItems={5}
            superLargeDesktopSlides={3}
            desktopItems={4}
            desktopSlides={2}
            tabletItems={3}
            tabletSlides={2}
            mobileItems={3}
            mobileSlides={2}>

            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            </Slide>
            <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img  className='pp'  src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="info">
                <span>Umer</span>
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">PAK</span>
                </div>
                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">Jun 2024</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
                <p>
                  My name is Umer, I enjoy creating AI generated art in my spare time.
                  I have alot of experience using the AI program and that meansI know
                  ehat to promopt the AI with to get a great and incredibly detailed result.
                </p>
              
            </div>
          </div>
          <div className="reviews">
            <h2>
              Reviews
            </h2>
            <div className="item">
              <div className="user">
                <img className='pp'  src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="" />
                <div className="info">
                  <span>Umer</span>
                  <div className="country">
                    <img  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt="" />
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
              <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>

                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="" alt="" />
                  <span>Yes</span>
                  <img src="/img/like.png" alt="" />
                  <span>No</span>
                  <img src="/img/dislike.png" alt="" />
                </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="" alt="" />
                <div className="info">
                  <span>Umer</span>
                  <div className="country">
                    <img  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt="" />
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
              <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>

                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="" alt="" />
                  <span>Yes</span>
                  <img src="/img/like.png" alt="" />
                  <span>No</span>
                  <img src="/img/dislike.png" alt="" />
                </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img  src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                 alt="" />
                <div className="info">
                  <span>Umer</span>
                  <div className="country">
                    <img  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt="" />
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
              <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>

                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="" alt="" />
                  <span>Yes</span>
                  <img src="/img/like.png" alt="" />
                  <span>No</span>
                  <img src="/img/dislike.png" alt="" />
                </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>Umer</span>
                  <div className="country">
                    <img  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt="" />
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
              <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>

                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="" alt="" />
                  <span>Yes</span>
                  <img src="/img/like.png" alt="" />
                  <span>No</span>
                  <img src="/img/dislike.png" alt="" />
                </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
              <p>
                I will create a unique high quality AI generated image based on a 
                description that you give me 
              </p>
              <div className="details">

                <div className="item">
                    <img src="/img/clock.png" alt="" />
                    <span>2 days Delivery</span>
                </div>

                <div className="item">
                    <img src="/img/recycle.png" alt="" />
                    <span>3 revision</span>
                </div>
              </div>
              <div className="features">
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>
                    Prompt Writing
                  </span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>
                    Prompt Writing
                  </span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>
                    Prompt Writing
                  </span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>
                    Prompt Writing
                  </span>
                </div>
              </div>
              <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig
