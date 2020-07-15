import React, { Component } from 'react';

class Register extends Component {
    state = {
        regEmail: '',
        regPassword: '',
        regName: ''
    }

    handleChangeFor = (event, propertyName) => {
        this.setState({...this.state, [propertyName]: event.target.value});
    }

    handleSubmit = () => {
        fetch('http://localhost:3000/register', 
        {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: this.state.regEmail, password: this.state.regPassword, name: this.state.regName})
        }).then(response => response.json()).then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
    }
    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={(event) => this.handleChangeFor(event,'regName')}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={(event) => this.handleChangeFor(event,'regEmail')}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={(event) => this.handleChangeFor(event,'regPassword')} 
                            />
                        </div>
                        
                        </fieldset>
                        <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Register"
                            onClick={this.handleSubmit}
                        />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;