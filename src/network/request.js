import axios from 'axios'

//axios 实例
export function request(config){
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

//拦截器

//请求拦截的作用
instance.interceptors.request.use(config =>{
    return config
}, err => {
    
})

//响应拦截
instance.interceptors.response.use(res =>{
    return res.data
}, err =>{
    
})

//网络请求
return instance(config)
}


export function request2(config1){
    const instance1 = axios.create({
        baseURL: 'http://localhost:3004',
        timeout: 5000
    })


//网络请求
return instance1(config1)
}