import axios from "axios"
import backend from '../backend'

const api = async (token,page)=>{
  const data = {
    token:token,
  }
  const back = await axios.post(backend+page, token)
  .then((data) => {
    if(data.message === 'success'){
      return data.data
    }
    else{
      return data.data
    }
  })
  .catch(err => console.log(err))
  return back;
                
}
export default api;