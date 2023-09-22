import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgDesktop1 from '../img/slide_desk1jpg.jpg';
import imgMobile1 from '../img/slide_moblie.jpg';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth <= 768,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 768,
    });
  };

  render() {
    const { isMobile } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <div className="image-slider">
        <Slider {...settings}>
          <div style={{ maxWidth: '100%' }}>
            <img
              src={isMobile ? imgMobile1 : imgDesktop1}
              alt="รูปภาพ 1"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div style={{ maxWidth: '100%' }}>
            <img
              src={isMobile ? imgMobile1 : imgDesktop1}
              alt="รูปภาพ 1"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div style={{ maxWidth: '100%' }}>
            <img
              src={isMobile ? imgMobile1 : imgDesktop1}
              alt="รูปภาพ 1"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          {/* เพิ่มรูปภาพเพิ่มเติมตามต้องการ */}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider;
