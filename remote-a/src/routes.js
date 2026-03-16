

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue'),
        meta: { title: 'Home' }
    },  
    {
        path: '/contact',
        name: 'contact',
        component: () => import('./pages/Contact.vue'),
        meta: { title: 'Contact' }
    },
    {
        path: '/remote-a',
        name: 'remote-a-home',
        component: () => import('remote_a/pages/Home'),
        meta: { title: 'Home - Remote A' }
    }
]