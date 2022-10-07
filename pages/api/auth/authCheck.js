import axios from "axios"
import backend from '../backend'

const api = async (token,page)=>{
  const back = await axios.post(backend+page, data)
  .then((data) => {
    if(data.message === 'success'){
      return data
    }
    else{
      return data
    }
  })
  .catch(err => console.log(err))
  return back;
                
}
export default api