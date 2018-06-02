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
    preload: 'metadata',
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
        }
});

// Used to ensure that the video is resized initially without overflow 
setTimeout((headerResize) => {
    this.headerResize();
}, 200);

//     // Jarallax 
    jarallax(document.querySelectorAll('.jarallax'), {
        disableParallax: /iPad|iPhone|iPod|Android/,
      speed: 0.2
    });
   
    // Text Animation Doesn't work on EI and Safari
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

// Modal Transformation

const modalPhoto = document.getElementsByClassName('modalPhoto');
const modalText = document.getElementsByClassName('modalText');

for( var i = 0; i < modalPhoto.length; i ++){

    if(window.innerWidth <= 576) {
        modalPhoto[i].classList.remove('col-5')
        modalPhoto[i].classList.add('col');
        modalText[i].classList.remove('col-7')
    }
}


//   Read more

showMore = () => {
    document.getElementById(id+'Overflow').className='';
    document.getElementById(id+'MoreLink').className='hidden';
    document.getElementById(id+'LessLink').className='';
}

showLess = () => {
    document.getElementById(id+'Overflow').className='hidden';
    document.getElementById(id+'MoreLink').className='';
    document.getElementById(id+'LessLink').className='hidden';
}

const len = 250;
const shrinkable = document.querySelector('#shrinkable');
const fullText = shrinkable.innerHTML;

if(fullText.length > len && window.innerWidth < 500) {
var trunc = fullText.substring(0, len).replace(/\w+$/, '...');
var remainder = "";
var id = shrinkable.id;
remainder = fullText.substring(len, fullText.length);
shrinkable.innerHTML = '<span>' + trunc + '<span class="hidden" id="' + id + 'Overflow">'+ remainder +'</span></span>&nbsp; <br><br><br><a id="' + id + 'MoreLink" href="#!" onclick="showMore(\''+ id + '\');">[+]</a><a class="hidden" href="#!" id="' + id + 'LessLink" onclick="showLess(\''+ id + '\');">[-]</a>';
}

})();


