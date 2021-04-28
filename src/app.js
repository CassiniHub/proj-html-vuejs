function init() {
    new Vue ({
        el: '#app',

        data: {
            headerMenuVoices: [
                'Home',
                'Rates',
                'Testimonials',
                'FAQ',
                'Blog',
                'Contact'
            ]
        },

        methods: {

        },

        computed: {

        },

        mounted() {
            console.log('Hi developer');
        }
    });
}

document.addEventListener("DOMContentLoaded", init);