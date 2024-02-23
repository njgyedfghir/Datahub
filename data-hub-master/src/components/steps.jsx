import React, { useEffect } from 'react';
import '../styles/steps.css';
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'

const Steps = () => {
  useEffect(() => {
    const imgBx = document.querySelectorAll('.imgBx');
    const contentBx = document.querySelectorAll('.contenttBx');

    const handleMouseOver = function () {
      const targetId = this.dataset.id;

      for (let j = 0; j < contentBx.length; j++) {
        contentBx[j].className = 'contenttBx';
      }

      const targetContentBx = document.getElementById(targetId);

      if (targetContentBx) {
        targetContentBx.className = 'contenttBx active';
      }

      for (let k = 0; k < imgBx.length; k++) {
        imgBx[k].className = 'imgBx';
      }

      this.className = 'imgBx active';
    };

    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].addEventListener('mouseover', handleMouseOver);
    }

    // Clean up the event listeners when the component unmounts
    return () => {
      for (let i = 0; i < imgBx.length; i++) {
        imgBx[i].removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className='flex justify-center items-center h-full'>
      <div className='box'>
        <div className="icon">
          <div className="imgBx active" style={{ '--i': 1 }} data-id="content1">
            <img src={one} alt="" />
          </div>
          <div className="imgBx" style={{ '--i': 2 }} data-id="content2">
            <img src={two} alt="" />
          </div>
          <div className="imgBx" style={{ '--i': 3 }} data-id="content3">
            <img src={three} alt="" />
          </div>
          {/* <div className="imgBx" style={{ '--i': 4 }} data-id="content4">
            <img src="https://images.unsplash.com/photo-1557576146-047908becbb4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TnVtYmVyJTIwMXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="imgBx" style={{ '--i': 5 }} data-id="content5">
            <img src="https://images.unsplash.com/photo-1557576146-047908becbb4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TnVtYmVyJTIwMXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div> */}
          {/* Add more imgBx elements for additional steps */}
        </div>

        <div className="contentt">
          <div className="contenttBx active" id="content1">
            <div className="card">
              <div className="imgBx">
                <img src={one} alt="" />
              </div>
              <div className="textBx">
                <h2>Pre-Implementation</h2>
                <p className='para'>The pre-implementation stage of a business involves crucial pre-launch processes such as securing the necessary licenses required for activities in the implementation stage.</p>
              </div>
            </div>
          </div>
          <div className="contenttBx" id="content2">
            <div className="card">
              <div className="imgBx">
                <img src={two} alt="" />
              </div>
              <div className="textBx">
                <h2>Implementation</h2>
                <p className='para'>The implementation stage of a business is when the bulk of physical work such as construction gets underway before officially launching operations.</p>
              </div>
            </div>
          </div>
          <div className="contenttBx" id="content3">
            <div className="card">
              <div className="imgBx">
                <img src={three} alt="" />
              </div>
              <div className="textBx">
                <h2>Operation</h2>
                <p className='para'>The operation stage commences as soon as the business opens and enters into full-fledged business activity, and includes fulfilling remaining licensing requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
