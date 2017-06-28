import Vue from 'vue'
import VueRouter from 'vue-router'

//首页
import Content from './views/content/Content'
import Right from './views/right/Right'
// import Logins from './views/commen/Logins'
//专题
import Rspecial from './views/right/Rspecial'
import Cspecial from './views/content/Cspecial'
//发现
import Rfind from './views/right/Rfind'
import Cfind from './views/content/Cfind'


//内容组件 右侧内容
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/index',
            components: {
                content: Content,
                right: Right,


            }
        },
        {
            path: '/find',
            components: {
                content: Cfind,
                right: Rfind,


            }
        },
        {

            path: '/special',
            components: {
                content: Cspecial,
                right: Rspecial,


            }
        },
        {
            path: '*',
            redirect: '/index'
        }

    ]
})

// router.beforeEach((to, from, next) => {
//     const token = sessionStorage.getItem('demo-token');
//     if (to.path == '/') { // 如果是跳转到登录页的
//         if (token != 'null' && token != null) {
//             next('/todolist') // 如果有token就转向todolist不返回登录页
//         }
//         next(); // 否则跳转回登录页
//     } else {
//         if (token != 'null' && token != null) {
//             Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 注意Bearer后有个空格
//             next() // 如果有token就正常转向
//         } else {
//             next('/') // 否则跳转回登录页
//         }
//     }
// })
export default router;