import React, { useState } from "react";
import { Form, Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ImGoogle } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  const{providerLogin, user, setUser, signIn,} = useContext(AuthContext)

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider()

  const [error, setError] = useState();
  const navigate = useNavigate()
  
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // google log in
    const handleGoogleLogIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true})
        })
        .catch(error =>{
           console.error(error)
          setError(error.message)
          })
    }

    // github log in
    const handleGitLogIn = () =>{
      providerLogin(githubProvider)
      .then(result =>{
        const user = result.user;
        navigate(from, {replace: true})

      })
      .catch(error =>console.error(error))
    }

    // facebook login
    const handleFacebookLogIn = () =>{
      providerLogin(facebookProvider)
      .then(result =>{
        const user = result.user;
        navigate(from, {replace: true})
      })
    }

    const handleSignIn = event =>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;



    signIn(email, password)
    .then(result => {
      setError('')
      const user = result.user;
      form.reset();      
      navigate(from, {replace: true})
    })

    .catch(error=> {
      console.error(error)
      setError(error.message)
    })
    }    


  return (
    <div>
      <Form onSubmit={handleSignIn} className="mt-20 w-7/12 mx-auto">
        <div className=" ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-lg font-semibold">
              Are you new here? 
              <span> <Link to='/register' className="text-green-700">Register</Link></span>
            </p>


          </div>
          <div className=" shadow-2xl bg-base-100  bg-orange-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <label className="label text-red-700">                  
                    {error}                  
                </label>
                
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>

              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
              </div>


              <p className="flex text-center mx-auto">
                <Link className="text-green-600 mx-10" onClick={handleGoogleLogIn}><ImGoogle/></Link>
                <Link className=" mx-10" onClick={handleGitLogIn}><FaGithub/></Link>
                <Link className="text-blue-700 mx-10" onClick={handleFacebookLogIn}><FaFacebook/></Link>
            </p>


            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
