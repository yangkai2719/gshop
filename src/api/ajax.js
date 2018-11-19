
import axios from 'axios'
//接口三个决定请求
export default function ajax(url,data={},method='GET') {
return new Promise((resolve,reject)=>{
  let promise
  if (method==='GET') {
    let queryStr=''
    // url += '?';
    let queryStr=''
    Object.keys(data).forEach(key => {
      const value = data[key];
      queryStr +=`${key}=${value}&`
    })
    
  if (queryStr!=='') {
    queryStr = queryStr.substring(0, queryStr.length - 1);
    url += '?' + queryStr;
  }
    promise=axios.get(url);
  } else {
    promise=axios.post(url,data)
}
  promise
    .then((response)=>{
    resolve(response.data)
    })
    .catch(error=>{
      reject(error)
  })
})
}
/*async function test() {
  const result=ajax('/login',{name:'Tom',pwd:'123'},'POST')
  if (result.code===0) {
  
  }
}*/
