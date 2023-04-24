export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Mochammad Rafli Ramadani',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Mochammad Rafli Ramadani personal website describe he as a Website Developer focused on Front-End Developer, Slicing Figma Design & API Consumption' },
            { hid: 'keywords', name: 'keywords', content: 'mochammad rafli ramadani,portfolio mochammad rafli ramadani,portfolio rafli,portfolio rama,portofolio raple,portofolio mochammad rafli ramadani,portofolio rafli,portofolio rama,portofolio raple' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/assets/css/plugins.css' },
            { rel: 'stylesheet', href: '/assets/css/style.css' },
            { rel: 'stylesheet', href: '/assets/css/style.css.map' },
            { rel: 'stylesheet', href: '/assets/css/fonts/poppins.css' },
            { rel: 'stylesheet', href: '/assets/css/colors/leaf.css' }
        ],
        script: [
            { src: '/assets/js/plugins.js', body: true },
            { src: '/assets/js/theme.js', body: true }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    // Deployment settings
    target: 'static',
    ssr: false,
    generate: {
        fallback: true
    }
}
