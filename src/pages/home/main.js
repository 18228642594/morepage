import Vue from "vue"
import home from "./home"

Vue.config.productionTip = false

new Vue({
    render: h => h(home)
}).$mount("#app");