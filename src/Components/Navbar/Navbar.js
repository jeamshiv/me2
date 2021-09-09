import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


export default class Navbar extends Component {

    state={
        isUserLogin: false,
        username: "",

        isOpenSnack: false,
        SnackbarMessage: "",

    }


    componentDidMount(){
        let userdata = localStorage.getItem("username");
        if(userdata){
            this.setState({isUserLogin: true, username:userdata});
        }
    }

    logoutFunction=()=>{
        localStorage.removeItem('username');
        localStorage.removeItem('email');

        this.setState({isOpenSnack: true, SnackbarMessage: "You have sucessfully logged out!"})
    }

    closeSnack=()=>{
        this.setState({isOpenSnack: false})
    }

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-fef0ef sticky-top">
                <a class="navbar-brand" href="#">Edu Website</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item mr-4 active">
                        <NavLink to="/" class="nav-link">Home <span class="sr-only">(current)</span></NavLink>
                    </li>
                    <li class="nav-item mr-4">
                        <NavLink to="/about" class="nav-link">About</NavLink>
                    </li>
                    <li class="nav-item mr-4">
                        <NavLink to="/login" class="nav-link">Login</NavLink>
                    </li>
                    
                        
                   
                   
                    </ul>
                   
                    {/* <button class="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Search</button> */}

                    {this.state.isUserLogin ?(
                        <>
                        <div class="nav-item dropdown mr-5">
                        <a class="nav-link dropdown-toggle  relative" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.username}
                        </a>
                        <div class="dropdown-menu justify-content-end" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#" onClick={()=>this.logoutFunction()}>Log Out</a>
                        </div>
                        </div>

                        </>


                    ):(
                        <NavLink to="/login" className="text-dark mr-5">
                            <Button className="py-2 px-4 text-light" variant="outlined" style={{backgroundColor: '#f66962'}}>
                                Login
                            </Button>
                        </NavLink>
                    )}

                    
                    
                </div>
                </nav>




                <Snackbar
                    open={this.state.isOpenSnack}
                    onClose={(e)=>this.closeSnack(e)}
                    TransitionComponent="Fade"
                    message={this.state.SnackbarMessage}
                />
                
            </>
        )
    }
}
