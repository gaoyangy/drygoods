// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import Axios from 'axios'

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法

Vue.use(ElementUI);
Vue.use(VueQuillEditor)

Vue.config.errorHandler = function(err, vm) {
        var componentName = Vue.util.formatComponentName(vm),
            propsData = vm.$options.propsData;
        fundebug.notifyError(err, {
            metaData: {
                componentName: componentName,
                propsData: propsData
            }
        });
    }
    /* eslint-disable no-new */
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')