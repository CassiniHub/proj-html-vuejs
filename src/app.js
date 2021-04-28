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

            ]
        },

        methods: {
            selectMenuVoices: function (menuName) {
                for (let i = 0; i < this.footerMenuVoices.length; i++) {
                    const menuVoicesList = this.footerMenuVoices[i];

                    if (menuVoicesList.title === menuName) {
                        return menuVoicesList.voices;
                    }
                }
            }
        },

        computed: {

        },

        mounted() {
            console.log('Hi developer');
        }
    });
}

document.addEventListener("DOMContentLoaded", init);