import {request2} from './request.js'



export function getDetail(iid){
    // console.log("from detail request")
    return request2({
        url: '/detail?idd=',
        // url: '/detail',
        params: {
            iid
        }
    })
}


//商品简介统一拿到数据
export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title
      this.newPrice = itemInfo.newPrice
      this.oldPrice = itemInfo.oldPrice
      this.columns = columns
      this.services = services
    }
}

//推荐商品另外请求
export function getRecommend(type,page){
    return request2({
        url: '/'+type,
        params: {
            page
        }
    })
}