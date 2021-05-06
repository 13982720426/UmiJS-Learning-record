import {request} from 'umi'

//获取标签数据
export const getTags=()=>{
    return request('/api/tags')
}