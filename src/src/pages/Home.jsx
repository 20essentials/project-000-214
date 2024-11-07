import React, { useRef } from 'react';
import BlurBackground from '../components/BlurBackground';

const Home = () => {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const palo = useRef(null);
  const containerTotal = useRef(null);

  const handleClickSlider = e => {
    if (!e.target.classList.contains('circle')) return;

    const initialWidthFront = frontRef.current.clientWidth;
    const widthBack = backRef.current.clientWidth;
    const initialX = e.clientX;

    const move = e => {
      const currentX = e.clientX;
      const deltaX = currentX - initialX;
      let newWidthFront = initialWidthFront + deltaX;

      if (newWidthFront <= 0) {
        newWidthFront = 0;
        end();
      } else if (newWidthFront >= widthBack) {
        newWidthFront = widthBack;
        end();
      }

      frontRef.current.style.width = `${newWidthFront}px`;
      palo.current.style.left = `${newWidthFront}px`;
    };

    const end = () => {
      containerTotal.current.removeEventListener('mousemove', move);
      containerTotal.current.removeEventListener('mouseup', end);
    };

    containerTotal.current.addEventListener('mousemove', move);
    containerTotal.current.addEventListener('mouseup', end);
  };

  return (
    <section className='page0-home'>
      <div className='container-compare'>
        <div className='compare'>
          <span ref={backRef} className='back'>
            <img
              draggable='false'
              // src='assets/home/back.avif'
              src='https://20essentials.github.io/project-000-214/assets/home/back.avif'
              alt='back-image'
            />
          </span>
          <span ref={frontRef} className='front'>
            <img
              draggable='false'
              // src='assets/home/front.avif'
              src='https://20essentials.github.io/project-000-214/assets/home/front.avif'
              alt='front-image'
            />
          </span>
          <div ref={containerTotal} className='container-total'>
            <aside ref={palo} className='palo'>
              <div className='circle' onMouseDown={handleClickSlider}></div>
            </aside>
          </div>
        </div>
        <BlurBackground color1='#e81cff' color2='#8364e8' color3='#f8acff' />
      </div>
    </section>
  );
};

export default Home;
