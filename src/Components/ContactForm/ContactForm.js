import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class ContactForm extends Component {
    render() {
        return (
            <>
              <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <TextField className="form-control" label="Your Name" />
                            <TextField className="form-control mt-3" label="Your Number" inputProps={{ maxLength: 10 }}/>
                            <TextField
                                className="form-control mt-3"
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                onChange={(e)=>this.changeHandler(e)}
                                />
                            <Button variant="contained" className="mt-4 py-2 text-light" style={{backgroundColor: '#f66962'}}>
                                send Message
                            </Button>
                        </div>
                        <div className="col-lg-6 col-md-6"></div>
                    </div>
                </div>  
            </>
        )
    }
}
