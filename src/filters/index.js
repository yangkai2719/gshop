/**
 * Created by dell on 2018/11/27.
 */
import  Vue from 'vue'
import moment from  'moment'

Vue.filter('date-format',(value,format)=>{
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})
