;(function(){


//Mobile Toggle Icon

const sidenav = document.querySelector('#sideNav');
const navButton = document.querySelector('#navIcon');
navButton.addEventListener('click', clickNav = ()=>{
    navButton.classList.toggle('open');
    sidenav.classList.toggle('open');
});

// Video Js Options For Header
var headerOptions = {
    controls: false,
    autoplay: true,
    muted: true,
    preload: 'auto',
    loop: true
};

// Fix the fucking Black Bars!
var headerplayer = videojs('#headerVideo',headerOptions, function() {

        var aspectRatioHeader = 720/1280;
        var myPlayer = this;

       return headerResize = () => {
            var width = document.querySelector('#headerVideo').parentElement.offsetWidth;
            var height = document.querySelector('#headerVideo').parentElement.offsetHeight;
            myPlayer.width(width);
            myPlayer.height(width * aspectRatioHeader);
            console.log(height)
        }
});

// Used to ensure that the video is resized initially without overflow 
setTimeout((headerResize) => {
    this.headerResize();
}, 150);

// Vertical Carousel https://codepen.io/craigmd/pen/dvPGgY

let caroItems = document.getElementsByClassName('caro-item')

    function wipeIn(element) {
      element.classList.add('wipe-in')
    }
    
    function wipeOut(element) {
      element.classList.add('wipe-out')
      delay(2700).then(() => reset(element))
    }
    
    function reset(element) {
      element.classList = 'caro-item'
    }
    
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    
    function* carousel(elements) {   
       for (let i = 0; i >= 0; i++) {
         if (i === 0) {
           wipeIn(elements[i])
           yield
         }
         
         wipeOut(elements[i % elements.length])
         wipeIn(elements[(i + 1) % elements.length])
         yield
       }
    }
    
    function runCarousel(genObj) {
      if (!genObj.next().done) {
        setTimeout(runCarousel, 3000, genObj)
      }
    }
    
    runCarousel(carousel(caroItems))

    // Jarallax 
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
   
  {
    class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.image = this.DOM.el.querySelector('.content__img');
            this.DOM.title = this.DOM.el.querySelector('.content__text');
            observer.observe(this.DOM.el);
        }
        enter(direction = 'down') {
            this.DOM.title.style.opacity = 1;
            this.DOM.title.classList.add('animate');
        }
        exit(direction = 'down') {
            this.DOM.title.style.opacity = 0;
            this.DOM.title.classList.remove('animate');
        }
    }
    
    let observer;
    let current = -1;
    let allentries = [];
    const sections = Array.from(document.querySelectorAll('.content__section'));
    // Preload all the images in the page..
  imagesLoaded(document.querySelectorAll('.content__img'), () => {
        document.body.classList.remove('loading');
        if ('IntersectionObserver' in window) {
            document.body.classList.add('ioapi');

            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if ( entry.intersectionRatio > 0.5 ) {
                        const newcurrent = sections.indexOf(entry.target);
                        if ( newcurrent === current ) return;
                        const direction = newcurrent > current;
                        if (current >= 0 ) {
                            allentries[current].exit(direction ? 'down' : 'up');
                        }
                        allentries[newcurrent].enter(direction ? 'down' : 'up');
                        current = newcurrent;
                    }
                });
            }, { threshold: 0.5 });
            
            sections.forEach(section => allentries.push(new Entry(section)));
        }
    });
}

})();
