function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
    }

document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '#slider1',{
      type   : 'loop',
      perPage: 1,
      width: '100%',
      perMove: 1,
      padding: '20%',
      arrows: boolean = true,
      gap: '8em',
      pagination: boolean = true,
      autoplay: boolean = true,
      interval: number = 3000,
      pauseOnHover: boolean = true,
      mediaQuery: 'min',
      breakpoints: {
          200: {
              perPage: 1,
              width: '100%',
              padding: '0%',
          },
          480: {
              perPage: 1,
              width: '100%',
              padding: '0%',
          },
          700: {
              perPage: 1,
              width: '100%',
              padding: '0%',
          },
          1024: {
                perPage: 1,
                width: '100%',
                padding: '0%',
          },
          1280: {
            autoWidth: boolean = true,
            padding: '20%',
            autoHeight: boolean = true,
            gap: '4em',
          },
          1440: {
            perPage: 1,
            width: '100%',
            perMove: 1,
            padding: '20%',
            arrows: boolean = true,
            gap: '4em',
          },
      }
    } );
    splide1.mount();
  } );
  document.addEventListener( 'DOMContentLoaded', function() {
  var splide2 = new Splide( '#slider2',{
      type   : 'loop',
      perPage: 3,
      width: '100%',
      perMove: 1,
      padding: { left:'10%', right: '5%' },
      arrows: boolean = true,
      gap: '2em',
      pagination: boolean = true,
      autoplay: boolean = true,
      interval: number = 3000,
      pauseOnHover: boolean = true,
      mediaQuery: 'min',
      breakpoints: {
          200: {
              perPage: 1,
              padding: '0%',
          },
          480: {
              perPage: 2,
              padding: '0%',
          },
          700: {
              perPage: 2,
              padding: '0%',
          },
          1024: {
            perPage: 3,
            padding: '0%',
        },
        1280: {
            autoWidth: boolean = true,
            padding: '10%',
            autoHeight: boolean = true,
          },
        1440: {
            perPage: 3,
            width: '100%',
            perMove: 1,
            padding: { left:'10%', right: '5%' },
            arrows: boolean = true,
            gap: '2em',
          },
      }
    } );
    splide2.mount();
  } );
  document.addEventListener( 'DOMContentLoaded', function() {
  var splide3 = new Splide( '#slider3',{
      type   : 'loop',
      perPage: 1,
      width: '100%',
      perMove: 1,
      padding: { right: '35%' },
      arrows: boolean = true,
      gap: '5em',
      pagination: boolean = true,
      autoplay: boolean = true,
      interval: number = 3000,
      pauseOnHover: boolean = true,
      mediaQuery: 'min',
      breakpoints: {
          200: {
              perPage: 1,
              padding: '0%',
          },
          480: {
              perPage: 1,
              padding: { right: '35%' },
          },
          700: {
              perPage: 1,
              padding: { right: '35%' },
          },
          1024: {
            perPage: 1,
            padding: { right: '35%' },
        },
        1280: {
            perPage: 1,
            padding: { right: '35%' },
        },
        1440: {
            perPage: 1,
            width: '100%',
            perMove: 1,
            padding: { right: '35%' },
            arrows: boolean = true,
            gap: '5em',
        },
      }
    } );
    splide3.mount();
  } );
  document.addEventListener( 'DOMContentLoaded', function() {
  var splide4 = new Splide( '#slider4',{
      type   : 'loop',
      perPage: 5,
      width: '100%',
      perMove: 1,
      arrows: boolean = true,
      gap: '2em',
      pagination: boolean = true,
      autoplay: boolean = true,
      interval: number = 3000,
      pauseOnHover: boolean = true,
      direction: 'ltr',
      mediaQuery: 'min',
      breakpoints: {
          200: {
              perPage: 2,
          },
          480: {
              perPage: 2,
          },
          700: {
              perPage: 3,
          },
          1024: {
            perPage: 4,
        },
        1280: {
            autoWidth: boolean = true,
            autoHeight: boolean = true,
            gap: '0.5em'
        },
        1440: {
            perPage: 5,
            width: '100%',
            perMove: 1,
            arrows: boolean = true,
            gap: '2em',
        },
      }
    } );
    splide4.mount();
  } );
  document.addEventListener( 'DOMContentLoaded', function() {
  var splide5 = new Splide( '#slider5',{
      type   : 'loop',
      perPage: 5,
      perMove: 1,
      arrows: boolean = true,
      gap: '2em',
      pagination: boolean = true,
      autoplay: boolean = true,
      interval: number = 3000,
      pauseOnHover: boolean = true,
      direction: 'rtl',
      mediaQuery: 'min',
      breakpoints: {
          200: {
              perPage: 2,
          },
          480: {
              perPage: 2,
          },
          700: {
              perPage: 3,
          },
          1024: {
            perPage: 4,
          },
          1280: {
            autoWidth: boolean = true,
            autoHeight: boolean = true,
            gap: '0.5em',
        },
        1440:{
            perPage: 5,
            perMove: 1,
            arrows: boolean = true,
            gap: '2em',
            pagination: boolean = true,
        },
      }
    } );
    splide5.mount();
  } );