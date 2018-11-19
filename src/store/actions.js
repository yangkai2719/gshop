import{
  reqAddress,
  reqShops,
  reqFoodCategorys
} from '../api'
import{
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
}   from './mutation-types'


export default {
async  getAddress({commit, state}){
    const {longitude, latitude} = state
    const result =await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address=result.data
      commit(RECEIVE_ADDRESS, {address})
    }
    //根据结果提交mutation
  },
  //异步获取地址信息的异步action
  //异步获取地食品分类列表的异步action
  //异步获取商家的异步action
  async getFoodCategorys({commit}){
    const result =await reqFoodCategorys()
    if (result.code === 0) {
      const foodCategorys=result.data
      commit(RECEIVE_CATEGORYS, {category:foodCategorys})
    }
    //根据结果提交mutation
  },
  async getShop({commit, state}){
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
    //根据结果提交mutation
  },
}
