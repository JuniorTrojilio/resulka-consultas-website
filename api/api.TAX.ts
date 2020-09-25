import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ncm.treeunfe.me/v1/tax'
})

export default api