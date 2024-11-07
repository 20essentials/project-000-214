import React from 'react';
import BlurBackground from '../components/BlurBackground';

const Accessories = () => {
  return (
    <aside className='page4-accessories'>
      <aside className='container'>
        <article className='item'>
          <div className='container-img image1'></div>
          <div className='container-detail'>Hanging Set</div>
        </article>
        <article className='item'>
          <div className='container-img image2'></div>
          <div className='container-detail'>Manual Dimmer</div>
        </article>
        <article className='item'>
          <div className='container-img image3'></div>
          <div className='container-detail'>Usb to Dc Adapter</div>
        </article>
        <article className='item'>
          <div className='container-img image4'></div>
          <div className='container-detail'>Battery Pack</div>
        </article>
        <article className='item'>
          <div className='container-img image5'></div>
          <div className='container-detail'>Dimmer Led</div>
        </article>
        <article className='item'>
          <div className='container-img image6'></div>
          <div className='container-detail'>Power Supply</div>
        </article>

        <BlurBackground color1="#e81cff" color2="#00ff87" color3="#f8acff" />
      </aside>
    </aside>
  );
};

export default Accessories;
