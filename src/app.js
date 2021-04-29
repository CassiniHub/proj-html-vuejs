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

            // scrollYObject: {
            //     transform: 'translate3d(0px, ' + this.scrollY + 'px, ' + '0px)'
            // }
        },

        methods: {
            selectMenuVoices: function (menuName) {
                for (let i = 0; i < this.footerMenuVoices.length; i++) {
                    const menuVoicesList = this.footerMenuVoices[i];

                    if (menuVoicesList.title === menuName) {
                        return menuVoicesList.voices;
                    }
                }
            },

            backToTop: function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },

            handleScroll: function () {
                
                if (window.scrollY < 800) {
                    this.scrollY = window.scrollY;
                    console.log('scrollY: ' + this.scrollY);
                    console.log(this.scrollYObject);
                }
                
                // console.log(window.scrollY);
            }
        },

        watch: {
            
        },

        computed: {
            scrollYObject() {
                return {
                    transform: 'translate3d(0px, ' + '-' + this.scrollY * 0.32125656 + 'px, ' + '0px)'
                }
                
            }
        },

        created: function () {

        },


        mounted() {
            console.log('Hi developer');
            
            window.addEventListener('scroll', this.handleScroll);
        }
    });
}

document.addEventListener("DOMContentLoaded", init);