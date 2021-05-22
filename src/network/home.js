import {request,request2} from './request'

export function getHomeData(){
    return request({
        url: '/home/multidata'
    })
}

export function getHomeDataMore(type,page){
    return request2({
        url: '/'+type,
        params: {
            page
        }
    })
}
