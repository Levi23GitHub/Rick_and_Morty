

const validation = (userData, setErrors, errors)=>{
    
        //Email Validation
    if(!userData.email) 
        setErrors({...errors, email: "Email input is empty."})
        else 
            if (userData.email.length > 35) 
                setErrors({...errors, email: "Input is more than 35 characters"});
        else 
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email))
                setErrors({...errors, email: "Invalid email"})
        else {
            setErrors({...errors, email: ""});
        }
    
        //Password Validation:
    if(userData.password.length < 6 || userData.password.length > 10){
        setErrors({...errors, password: "Password length is invalid."});
    }else
            if(!/\d/.test(userData.password)){ 
                setErrors({...errors, password: "Password need at least one number"})
            }else {
            setErrors({...errors, password: ""});
        }

    
}

export default validation