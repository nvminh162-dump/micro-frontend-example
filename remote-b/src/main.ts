import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router';
import Routes from './routes.js';
import App from './App.vue';
import '../node_modules/bootstrap/js/index.esm.js';
import MyApp from './app.js';
const app = createApp(App);
// Mark the visit from the back/forward button
// ##### Order is important (A)
(window as any).popStateDetected = false
window.addEventListener('popstate', () => {
    (window as any).popStateDetected = true
})
// ##### Order is important (A)
const router = createRouter({
    routes: Routes,
    history: createWebHistory(),
});

// Mark the visit from the back/forward button
// ##### Order is important (A)
router.beforeEach((_to, _from, next) => {
    if((window as any).popStateDetected == true || (window as any).popStateDetected == false)
    {
        MyApp.isFromBackButton = (window as any).popStateDetected
    }
    (window as any).popStateDetected = false
    next()
})
router.afterEach((to: any) => {
    // Sử dụng tiêu đề từ meta nếu nó tồn tại, nếu không thì sử dụng một tiêu đề mặc định
    document.title = to.meta.title || 'Default Title';
});
app.use(router);
app.mount('#app');
