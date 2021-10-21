import axios from "axios";
import {URL_API} from "@env"
export default axios.create({
    baseURL:URL_API
})