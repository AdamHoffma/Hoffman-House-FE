//import React from 'react'

/*const SlideShow = props => {

    var slideIndex = 1
    showSlides(slideIndex)

const plusSlides = n => {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}
 

function showSlides(n) {
    var i 
    var slides = document.getElementsByClassName('mySlides')    
    var dots = document.getElementsByClassName("dot")    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.lenghth}
    for (i =0; i < slides.length; i ++) {
        slides[i].style.display = "none"
    }
    for ( i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }    
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className =+ "active"
}


    return (  
        <div>
        <div class="slideshow-container">

  
  <div className="mySlides fade">
    <div className="numbertext">1 / 3</div>
    <img src="img1.jpg" style={{width: 100}}/>
    <div className="text">Caption Text</div>
  </div>

  <div className="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="img2.jpg" style={{width: 100}}/>
    <div class="text">Caption Two</div>
  </div>

  <div className="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="img3.jpg" style={{width: 100}}/>
    <div class="text">Caption Three</div>
  </div>

  
  <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
  <a className="next" onclick={plusSlides(1)}>&#10095;</a>
</div>
<br/>


<div style={{textAlign: "center"}}>
  <span class="dot" onclick={currentSlide(1)}></span>
  <span class="dot" onclick={currentSlide(2)}></span>
  <span class="dot" onclick={currentSlide(3)}></span>
</div>
</div>

    )
}*/

import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://tse1.mm.bing.net/th?id=OIP.Xgnuh8d0mue7vXkxieYlgwHaEo&pid=Api&rs=1&c=1&qlt=95&w=197&h=123',
  'https://tse1.mm.bing.net/th?id=OIP.Ws28gdz5Q3V-EtMuujsqWgHaEK&pid=Api&rs=1&c=1&qlt=95&w=219&h=123',
  'https://tse1.mm.bing.net/th?id=OIP.LghuKw80DnJ-NsatRBaW7QHaEK&pid=Api&rs=1&c=1&qlt=95&w=175&h=98'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const SlideShow = () => {
    return (         
      <div className="slide_cont">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            
          </div>
        </div>
      </Slide>   
      </div>
    )
}

export default SlideShow