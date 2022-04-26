import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import Swal from 'sweetalert2'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    color : "var(--bs-primary)",
    showSpinner :true
})

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
