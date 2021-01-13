import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {isAuth, authenticate} from './helpers'
import './Signin.css'








const Signin = ({history}) => {
    const [values, setValues] = useState({

        email:'j.cordoba@ostfalia.de',
        password:'201196',
        buttonText:'Login'
    
    });
    
    const {email, password, buttonText} = values;



    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value});
    }


    const handleSubmit = event => {
        event.preventDefault()
        setValues({... values, buttonText: 'Submitting'})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: {
                email,
                password
            },
            headers:{
               
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        }).then(function (response) {
            authenticate(response, () => {
                setValues({ ...values,  email: '', password: '', buttonText: 'Login' });
                toast.success(`Welcome back ${response.data.user.name}`);

                if(isAuth()){
                    if(isAuth().role === 'admin'){
                        history.push('/admin')
                    }else if(isAuth().role === 'profesor'){
                        history.push('/profesor')
                    }else if(isAuth().role === 'student'){
                        history.push('/student')
                    }else{
                        history.push('/')
                    }
                }else{
                    history.push('/signin')
                }
            });
        })
        .catch(function (error) {
            setValues({...values, buttonText:'Login'})
            toast.error("User or pass incorrect");
            console.log(error);
        })
    }

    const signinForm = () => (
        <div className="col-md-6 offset-md-3">
        <h1 className="p5-5 text-center">Signin</h1>
        <form>
            <div className="form-group">
            
                <div className="mt-3">
                    <label className="text-muted">Email</label>
                    <input onChange={handleChange('email')} type="email" className="form-control" placeholder="user@domain"></input>
                </div>
                <div className="mt-3">
                    <label className="text-muted ">Password</label>
                    <input onChange={handleChange('password')} type="password" className="form-control" placeholder="password"></input>
                </div>

                <div className="text-center mt-2">
                <small>You're welcome as student</small>
                </div> 

                <div className="text-center mt-4">
                    
                    <button type="submit" className="btn btn-primary" onClick={(handleSubmit)}>{buttonText}
                    
                    </button>


                </div>
            </div>
        </form>
        </div>
    )

    return (
        <Layout>
            <ToastContainer/>
            {signinForm()}



            <div className="card mb-5 m-5 ">
                <div className="card-header text-center h3">Users accounts</div>
                <div className="card-body">
                  
                    <div className="row">
        
                      <div className="col-xl-6 mb-4"> 
                        <h5>Alvarito user</h5>
                        <ul>
                            <li>alvaro@gmail.com</li>
                            <li>alvaro</li>
                        </ul>

                      </div>

                    </div>
                    
                      
                    </div>
                </div>
        </Layout>
    )
}

export default Signin;