import axios from "axios";

export default axios.create({
    baseURL:"https://limitless-caverns-33666.herokuapp.com/api"
})

const port = process.env.PORT || 4000;