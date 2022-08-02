import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
    handleLogin = (e) => {
        e.preventDefault()


        const data = {
            email: this.state.email,
            password: this.state.password
        }

        const option = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data).toString(),
        }

        fetch("https://unicode.vn/api/login.php", option)
            .then((response) => response.json())
            .then(response => {
                console.log(response)
            })

    }
    handelChangeEmail = (e) =>{
        e.preventDefault()
        this.setState({
            email: e.target.value
        })
    }

    handelChangePassword = (e) =>{
        e.preventDefault()
        this.setState({
            password: e.target.value
        })
    }




    render() {
        return (
            <>
                {/*<div className="container">*/}
                {/*    <div className="row justify-content-center">*/}
                {/*        <div className="col col-6">*/}
                {/*            <h1>Login</h1>*/}
                {/*            <form onSubmit={this.handleLogin}>*/}
                {/*                <div className="mb-3">*/}
                {/*                    <label>Email</label>*/}
                {/*                    <input type="text" name="email" className="form-control" placeholder="Email..."*/}
                {/*                           onChange={this.handelChangeEmail}/>*/}
                {/*                </div>*/}
                {/*                <div className="mb-3">*/}
                {/*                    <label>Password</label>*/}
                {/*                    <input type="password" name="password" className="form-control"*/}
                {/*                           placeholder="Password..." onChange={this.handelChangePassword}/>*/}
                {/*                </div>*/}

                {/*                <button type="submit" className="btn btn-primary">Login</button>*/}

                {/*            </form>*/}

                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
                {this.props.render({
                    submit:this.handleLogin,
                    email:this.handelChangeEmail,
                    password:this.handelChangePassword
                })}
            </>
        )
    }
}

export default Login