import https from 'https'

export default function ({ $axios, redirect, app }) {
    $axios.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized: false
    })

    $axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
    $axios.setHeader('Authorization', 'Basic YmFuazoxMjM0')
    $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $axios.interceptors.request.use(
        (confing) => {
            return confing
        },
        (error) => {
            console.log("request error: ", error)
            return Promise.reject(error)
        }
    )
    $axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            console.log("response error: ", error);
            return Promise.reject(error)
        }
    )
}
