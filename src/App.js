import React, { Component } from 'react'
import './App.css';

class App extends Component {

  state={
    newtask:" ",
    todos:[
        {text: 'add todo'}
    ]
  };

  deleteApp=(index)=>{
    const todos=[...this.state.todos];
    todos.splice(index,1);
    this.setState({
      todos
    })

  }
  updateTask=(event)=>{
    this.setState({
      newtask:event.target.value
    })
  }

  addApp=(e)=>{
    e.preventDefault();
    const todos=[...this.state.todos];
    todos.push({
      text:this.state.newtask
    });
    this.setState({
      todos,
      newtask:" "
    })
  }


  render() {

    const {todos}=this.state
    const todoapp=todos.length ?(
        todos.map((todo,index)=>{
      return(
        <div className="mytext" key={index}>
          {todo.text}
          <button className=" mybtn  mybtn1" onClick={()=>{this.deleteApp(index)}}>delete</button>
        </div>
      )
    })
    ) : (
      <p className="yay">you have no todos left , yay!</p>
    )


 
    return (
      <div className="todo Container">
        <h1 className="text-center myhead">todo App</h1>
        <div className="mytodo">{todoapp } </div>

        <label >add new  todo</label>
        <form onSubmit={this.addApp}>
          <input onChange={this.updateTask} value={this.state.newtask}/>
          <button className="mybtn" type="submit" >add</button>
        </form>


      </div>

    )
  }
}

export default App;


/*


    isEdit:false,


    let {isEdit} =this.state;



toggleState=()=>{
  let {isEdit}=this.state;
  this.setState({
    isEdit:!isEdit
  })
}


renderUpdate=()=>{
  return(
    <form>
      <input type="text" defaultValue={this.state.text}/>
      <button>update</button>
    </form>
  )
}
  

  <button className=" myedit" onClick={()=>{this.toggleState()}}>edit</button>


<div>{ isEdit ? this.renderUpdate() : todoapp }</div>
*/
