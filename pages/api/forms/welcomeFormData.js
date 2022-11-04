import axios from "axios";
import backend from "../backend";
const welcomeFormData = (data) => {
  const formData = {
    firsname:data.firstname,
    lastname:data.lastname,
    phone:data.phone,
    birthdate:data.birthdate,
    address:data.address,
    schoolName:data.schoolName,
    collegeName:data.collegeName,
    universityName:data.universityName,
    companyName:data.companyName,
    jobTitle:data.jobTitle,
    others:data.others
  }
  return axios.post(backend+"/forms/welcomeForm", formData);
}
export default welcomeFormData;

