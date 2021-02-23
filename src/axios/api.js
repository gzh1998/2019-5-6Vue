import axios from 'axios'
const host = (window.location.host == 'localhost') ? 'http://baojia-test.chelun.com' : 'https://baojia.chelun.com'

const getData = (url, method, data) => {
  return axios({
    header: {
      //配置通配符跨域
      'Access-Control-Allow-Origin': '*',
    },
    // headers: {
    //   'token': localStorage.getItem('token'),
    //   // 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnZXRUb2tlblRpbWUiOjE1Nzg4ODA1NjUsInJlZnJlc2hUb2tlblRpbWUiOjE1Nzg4ODA1NjUsInVzZXJfaWQiOiIxMDkifQ.BA1betArcfzhnHMAEbxduRzsGnOpj8JxiqOL8zVyjkU',
    // },
    url: url,
    method: method,
    data: data
  })
}

export const getIndex = () => {
  return getData(host + '/v2-car-getMasterBrandList.html', 'GET')
}