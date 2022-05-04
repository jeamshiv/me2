import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

// import {NavLink} from 'react-router-dom'

export default class Login extends Component {


    state = {
        isLogin: true,
        isSignUp: false,
        isForget: false,

        isOpenSnack: false,
        SnackbarMessage: "",

        username: "",
        email : "",
        password: "",
    }


    SingUpButton=()=>{
        this.setState({isLogin: false, isSignUp: true,})
    }

    SingInButton=()=>{
        this.setState({isLogin: true, isSignUp: false})
    }

    loginButton=()=>{
        alert('hi there')
    }

    CreateButton=()=>{
        if(this.state.username==="" || this.state.email ===""){
            this.setState({isOpenSnack: true, SnackbarMessage: "Ooops! You have missed Username or Email"})
        } else {
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('email', this.state.email)
            this.setState({isOpenSnack: true, SnackbarMessage: "Account has been created!"})
        }
       
    }

    InputHandler = (e) => {

        console.log(e.target.value);
        
        this.setState({
          [e.target.name]: e.target.value
      })

    }




    closeSnack=()=>{
        this.setState({isOpenSnack: false})
    }


    render() {
        return (
            <>
                <div className="container-fluid mb-5 mt-4">
                    <div className="">
                        <div className="row">

                            <div className="col-lg-6 bg-f66962 text-light px-5 pb-4">
                                <div className="px-lg-5">
                                    <img src="/assets/login-banner.png" className="img-fluid" alt="login banner" />
                                </div>
                                <h1 className="text-center">
                                    Behind a Student's Sucess Story
                                </h1>
                            </div>

                            <div className="col-lg-6 px-5 pt-5">
                                
                                {this.state.isLogin ? (
                                    <>
                                        <div>
                                            <h3>
                                                Hello! Welcome back.
                                            </h3>
                                            <p>
                                                Log in with your data that you entered during Your Registration.
                                            </p>

                                            <TextField label="Email address" variant="outlined" className="form-control mt-4" />

                                            <div className="text-right mt-4">
                                                Forgot Password
                                            </div>

                                            <TextField label="Password" type="password" variant="outlined" className="form-control mt-2" />


                                            <div className="text-center">
                                                <Button className="mt-3" variant="contained" color="secondary" style={{backgroundColor: '#f66962'}} onClick={()=>this.loginButton()}>
                                                    Start Now !
                                                </Button>
                                            </div>

                                            <div className="text-center mt-4">
                                                    OR
                                            </div>

                                            <div className="text-center mt-4">
                                                <Button variant="outlined" color="primary" style={{color:'#f66962', borderColor:'#f66962'}}>
                                                    <i class="fab fa-google"></i> &nbsp; Sign In With Google
                                                </Button>
                                            </div>

                                            <div className="mt-5">
                                                <p>Don't have an account? <span className="txt-f66962" onClick={() => this.SingUpButton()}>Sign Up</span></p>
                                            </div>
                                        </div>
                                    </>
                                ):(null)}


                                {this.state.isSignUp ? (
                                    <>
                                        <div>
                                            <h3>
                                                Create your free account
                                            </h3>
                                            <p>
                                                Start Learning Anything You Love from Anywhere!
                                            </p>

                                            <TextField label="Full name" variant="outlined" name="username" className="form-control mt-4" onChange={(e)=>this.InputHandler(e)} />

                                            <TextField label="Email address" type="email" name="email" variant="outlined" className="form-control mt-4" onChange={(e)=>this.InputHandler(e)} />

                                            <TextField label="Password" type="password" name="password" variant="outlined" className="form-control mt-4" onChange={(e)=>this.InputHandler(e)} />


                                            <div className="text-center">
                                                {/* <button className="btn button-primary mt-3">Start Now !</button> */}
                                                <Button className="mt-3" variant="contained" color="secondary" style={{backgroundColor: '#f66962'}} onClick={() => this.CreateButton()}>
                                                    Create Your Account !
                                                </Button>
                                            </div>

                                            <div className="text-center mt-4">
                                                    OR
                                            </div>

                                            <div className="text-center mt-4">
                                                <Button variant="outlined" color="primary" style={{color:'#f66962', borderColor:'#f66962'}}>
                                                    <i class="fab fa-google"></i> &nbsp; Sign With Google
                                                </Button>
                                            </div>

                                            <div className="mt-5">
                                                <p>By signing up you agree to our communication and usage terms.<br /> Already have an account <span className="txt-f66962" onClick={() => this.SingInButton()}>Sign In</span></p>
                                            </div>
                                        </div>
                                    </>
                                ):(null)}

                            </div>

                        </div>
                    </div>
                </div>


                <Snackbar
                    open={this.state.isOpenSnack}
                    onClose={(e)=>this.closeSnack(e)}
                    TransitionComponent="Fade"
                    message={this.state.SnackbarMessage}
                    // key={this.transition ? this.transition.name : ''}
                />


            </>
        )
    }
}
