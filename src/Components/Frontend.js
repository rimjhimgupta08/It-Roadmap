import React from 'react'
import { Link } from 'react-router-dom';
import './Slider.css';


const Frontend = () => {
  return (
    <>
      <div className="container frontend">
      <h2 className='text-center mb-4 '>Full Stack Development</h2>
      <div className="row">
      <div className="col-md-6 front">

            <h2>Frontend Development</h2>
            <h3>HTML <span><Link to="https://developer.mozilla.org/en-US/docs/Web/HTML">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h3>CSS <span><Link to="https://developer.mozilla.org/en-US/docs/Web/CSS">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h3>JavaScript <span><Link to="https://www.w3schools.com/js/DEFAULT.asp">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h2>JavaScript Framework</h2>
            <h3>React JS <span><Link to="https://legacy.reactjs.org/docs/getting-started.html">Read More</Link></span></h3>
            <h3>Angular JS <span><Link to="https://angular.io/docs">Read More</Link></span></h3>
            <h3>Vue JS <span><Link to="https://vuejs.org/guide/introduction.html">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h2>CSS Framework</h2>
            <h3>Tailwind CSS <span><Link to="https://tailwindcss.com/">Read More</Link></span></h3>
            <h3>Bootstrap <span><Link to="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h2>Internet </h2>
            <h3>HTTP/Domain <span><Link to="https://www.freecodecamp.org/news/an-introduction-to-http-domain-name-system-servers-b3e7060eca98/">Read More</Link></span></h3>
            <h3>Browser Work <span><Link to="https://www.browserstack.com/guide/what-is-browser">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h2>Version Control</h2>
            <h3>Git <span><Link to="https://youtu.be/Ez8F0nW6S-w?si=jQglJi6InD87nFGo">Read More</Link></span></h3>
            <h3>Github <span><Link to="https://youtu.be/Ez8F0nW6S-w?si=jQglJi6InD87nFGo">Read More</Link></span></h3>
            </div>
            <div className="col-md-6 backend">
                  <h2>Backend Development</h2>
                  <h3>Node JS <span><Link to="https://youtu.be/7fjOw8ApZ1I?si=QMi9xJ4hvcofZmSc">Read More</Link></span></h3>
                   <i class="fa-solid fa-arrow-down"></i>

                  <h3>Express JS <span><Link to="https://youtu.be/7fjOw8ApZ1I?si=QMi9xJ4hvcofZmSc">Read More</Link></span></h3>
                  <i class="fa-solid fa-arrow-down"></i>
                  <h3>Mongo DB <span><Link to="https://youtu.be/7fjOw8ApZ1I?si=QMi9xJ4hvcofZmSc">Read More</Link></span></h3>
                  <h3>MySQL <span><Link to="https://youtu.be/5bFxbwjN-Gk?si=_tvcNTX0FS-MOqYA">Read More</Link></span></h3>
                  <i class="fa-solid fa-arrow-down"></i>
                  <h3>REST API <span><Link to="https://youtu.be/ALrOcDPimWE?si=EPCZZwExXpx482_m">Read More</Link></span></h3>
                  <i class="fa-solid fa-arrow-down"></i>
                  <h3>Testing <span><Link to="https://youtu.be/oOvURgHcd4w?si=2zgerSExIK2hnAHo">Read More</Link></span></h3>

            </div>
      </div>

      </div>
    </>
  )
}

export default Frontend