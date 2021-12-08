import React, { Component } from 'react'

class Additem extends Component {

    state={
        name:" ",
        age:" "
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addApp(this.state)
        this.setState({
            name:" ",
            age:" "
        })
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" 
                   id="name"
                   placeholder="Enter name..." 
                   value={this.state.name}
                   onChange={this.handleChange} 
                   />
            <input type="number" 
                   id="age"
                   placeholder="Enter age..." 
                   value={this.state.age}
                   onChange={this.handleChange} 
                   />
            <button className="mybtn" type="submit" value="Add">Add</button>
        </form>
    )
  }
}
export default Additem