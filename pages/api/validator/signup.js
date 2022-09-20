const validatorSignup = (data)=>{
    const errors = {};
    if(!data.name){
        errors.name = 'Your name is required';
    }
    if(!data.email){
        errors.email = 'Email is required';
    }
    // ^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,15}$
    /*
    else if('^[a-z A-Z]{3,18}$'.test(data.name)){
      errors.name = 'Name is invalid';
  }
  */
    else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = 'Email is invalid';
    }
    if(!data.password){
        errors.password = 'Password is required';
    }
    else if(data.password.length < 6){
        errors.password = 'Password must be at least 6 characters';
    }
    if(!data.cpassword){
        errors.cpassword = 'Password is required';
    }
    else if(data.cpassword !== data.password){
        errors.cpassword = 'Password must match';
    }
    return errors;
}
export default validatorSignup;