import React from "react";
import Axios from "axios";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      //lastN: "",
      password: "",
      //gender: "",


  }
  this.handleSubmit=this.handleSubmit.bind(this)
}

firsthandler = (event) => {
  this.setState({
      UserName: event.target.value
  })
}
passwordhandler = (event) => {
  this.setState({
      password: event.target.value
  })
}
// passwordhandler = (event) => {
//   this.setState({
//       password: event.target.value
//   })
// }

// genderhandler = (event) => {
//   this.setState({
//       gender: event.target.value
//   })
// }

handleSubmit = (event) => {
  alert(`${this.state.UserName} ${this.state.password}  Registered Successfully !!!!`)
  console.log(this.state);
  this.setState({
      UserName: "",
      //lastName: "",
      password: '',
      //gender: "",
  })
event.preventDefault()

    const username = {

      UserName: this.state.UserName
    };

    const password = {

      password: this.state.password
    
    };

    Axios.post("http://localhost:3003/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
}

  

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <form onSubmit={this.handleSubmit}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
           
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" value={this.state.UserName} onChange={this.firsthandler} name="username" placeholder="username" />
              </div>
              {/* <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div> */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" value={this.state.password} onChange ={this.passwordhandler} name="password" placeholder="password" />
              </div>
            
            
          </div>
          
        </div>
        <div className="footer">
          <input type="submit" value = "submit"/>
            
          
        </div>
        </form>
      </div>
    );
  }
}

