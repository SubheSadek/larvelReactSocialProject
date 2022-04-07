import axios from 'axios';
import * as msg from '../utils/notifications'

export const BASE_URL = 'http://127.0.0.1:8000/'


axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true

const callApi = async (url, method , body = null) => {
    try {
        const res = await axios({
            url: url,
            method: method,
            data: body
        })
        return res.data
    } catch (e) {
        if (e.response) {
            if (e?.response?.status === 400 || e?.response?.status === 401) {
                msg.i(e.response.data.message)
            } else if (e.response.status === 422) {
                msg.showBackendErrors(e.response)
            } else if (e.response.status === 403) {
                window.location.href = '/login'
            }
            else {
                msg.swr()
            }
        }

        else {
            msg.swr()
        }
        return false
    }
}


export default callApi;
