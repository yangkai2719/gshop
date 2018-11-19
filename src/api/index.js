
import ajax from './ajax'
const BASE='/api'
//维度,经度
export const reqAddress=(longitude,latitude)=>ajax(BASE+`/position/${latitude},${longitude}`)
//type category ?+query参数 语法基本要求 语法背后的功能  接口文档 定义参数
export const reqFoodCategorys=()=>ajax(BASE+'/index_category')
//因为是对象 两种写法 基本写法 两个参数 一个 两个 对象 三个或三个以上 对象
//发送请求
export const reqShops=({longitude,latitude})=>ajax(BASE+'/shops',{latitude,longitude})
