function init() {
    new Vue ({
        el: '#app',

        data: {
            socialIcons: [
                '<i class="fab fa-facebook-f"></i>',
                '<i class="fab fa-twitter"></i>',
                '<i class="fab fa-instagram"></i>',
                '<i class="fab fa-youtube"></i>'
            ],

            headerMenuVoices: [
                'Home',
                'Rates',
                'Testimonials',
                'FAQ',
                'Blog',
                'Contact'
            ],

            footerMenuVoices: [
                {
                    title: 'AVADA MOVERS',
                    voices: [
                        'Home',
                        'Rates',
                        'Testimonials',
                        'Blog',
                        'Free Quote'
                    ]
                },
                {
                    title: 'RECENT POSTS',
                    voices: [
                        'Heading Out To College?',
                        'Moving Your Business?',
                        'Outstanding Quality',
                        'Cost of Moving',
                        'Best Moving Tips'
                    ]
                }
            ],

            scrollY: 0,
        },

        methods: {
            // @click - Bring the user to the top of the page
            backToTop: function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },

            // Callback function of the mounted event listener
            // Monitor the window.scrollY until it reaches 800 unit.
            handleScroll: function () {
                
                if (window.scrollY < 800) {
                    this.scrollY = window.scrollY;
                }
            }
        },

        computed: {
            // Object to pass as inline style property in html
            // Used to obtain parallax effect on jumbotron
            scrollYObject() {
                return {
                    transform: 'translate3d(0px, ' + '-' + this.scrollY * 0.32125656 + 'px, ' + '0px)'
                }
                
            }
        },

        mounted() {
            console.log('Hi developer');
            
            // Added scroll event to montor the scroll of the user
            window.addEventListener('scroll', this.handleScroll);
        }
    });
}

document.addEventListener("DOMContentLoaded", init);