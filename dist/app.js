/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function init() {
  new Vue({
    el: '#app',
    data: {
      socialIcons: ['<i class="fab fa-facebook-f"></i>', '<i class="fab fa-twitter"></i>', '<i class="fab fa-instagram"></i>', '<i class="fab fa-youtube"></i>'],
      headerMenuVoices: ['Home', 'Rates', 'Testimonials', 'FAQ', 'Blog', 'Contact'],
      footerMenuVoices: [{
        title: 'AVADA MOVERS',
        voices: ['Home', 'Rates', 'Testimonials', 'Blog', 'Free Quote']
      }, {
        title: 'RECENT POSTS',
        voices: ['Heading Out To College?', 'Moving Your Business?', 'Outstanding Quality', 'Cost of Moving', 'Best Moving Tips']
      }],
      scrollY: 0
    },
    methods: {
      // Take a list of link to stamp in the footer
      // @param {string} menuName [get the title of the list you want to stamp]
      selectMenuVoices: function selectMenuVoices(menuName) {
        for (var i = 0; i < this.footerMenuVoices.length; i++) {
          var menuVoicesList = this.footerMenuVoices[i];

          if (menuVoicesList.title === menuName) {
            return menuVoicesList.voices;
          }
        }
      },
      // @click - Bring the user to the top of the page
      backToTop: function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
      // Callback function of the mounted event listener
      // Monitor the window.scrollY until it reaches 800 unit.
      handleScroll: function handleScroll() {
        if (window.scrollY < 800) {
          this.scrollY = window.scrollY;
        }
      }
    },
    computed: {
      // Object to pass as inline style property in html
      // Used to obtain parallax effect on jumbotron
      scrollYObject: function scrollYObject() {
        return {
          transform: 'translate3d(0px, ' + '-' + this.scrollY * 0.32125656 + 'px, ' + '0px)'
        };
      }
    },
    mounted: function mounted() {
      console.log('Hi developer'); // Added scroll event to montor the scroll of the user

      window.addEventListener('scroll', this.handleScroll);
    }
  });
}

document.addEventListener("DOMContentLoaded", init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n   ╷\n81 │                 height: $height-primary-header;\n   │                         ^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  src/partials/_homepage.scss 81:25  @import\n  src/style.scss 3:9                 root stylesheet\n    at processResult (/Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/webpack/lib/NormalModule.js:676:19)\n    at /Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/webpack/lib/NormalModule.js:778:5\n    at /Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:399:11\n    at /Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:251:18\n    at context.callback (/Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at /Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/sass-loader/dist/index.js:54:7\n    at Function.call$2 (/Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/sass/sass.dart.js:92571:16)\n    at _render_closure1.call$2 (/Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/sass/sass.dart.js:81074:12)\n    at _RootZone.runBinary$3$3 (/Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/sass/sass.dart.js:27256:18)\n    at _FutureListener.handleError$1 (/Users/marco/Desktop/Boolean/front-end/proj-html-vuejs/node_modules/sass/sass.dart.js:25812:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/style.scss"]();
/******/ 	
/******/ })()
;