import {defineStore} from "pinia";
import {reactive} from "vue";
import axios from "axios";

const useNavStore = defineStore('nav', () => {
    // let currentNav = '/';
    let currentNav = ref('/');

    function setCurrentNav(nav) {
        currentNav.value = nav;
    }

    return {
        currentNav,
        setCurrentNav,
    }
});



export {
    useNavStore,
}