import { createStore } from 'vuex'
import Movies from './modules/movies'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default createStore({
    modules: {
        Movies
    },
    plugins: [vuexLocal.plugin]
})