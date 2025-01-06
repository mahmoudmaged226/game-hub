import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4385cbaab4384c708d02027e764372a1'
    }
})
