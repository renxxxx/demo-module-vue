import Vue from 'vue';
import Main from './index.vue';

let UsernamePopup = Vue.extend(Main);
let instance;

async function popup(options) {
    instance = new UsernamePopup({
        data: options
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    return instance.vm;
}
export default popup;
