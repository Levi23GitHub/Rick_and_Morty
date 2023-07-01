import { useState } from "react"
import style from "./Form.module.css"
import { Link } from "react-router-dom"
import validation from "../Validation/validation"

export default function Form({login}){
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        validation({...userData, [property]: value}, setErrors, errors);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        login(userData);
    };

    return(
        <form onSubmit={submitHandler}>
            <div className={style.data}>
                <h1>Login</h1>
                <div className={style.email_form}>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <p>{errors.email}</p>
                </div>
                <div className={style.password_form}>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <p>{errors.password}</p>
                </div>

                <button type="submit" className={style.submit_btn}>Submit</button>
                <p>Don`t have account yet <Link href="">Register here </Link>.</p>
            </div>

        </form>
    )
}