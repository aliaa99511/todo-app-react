import React, { Component } from 'react'
import './App.css';
import Todoitems from './components/Todoitems';
import Additem from './components/Additem';

class App extends Component {

  state={
    items:[
        {id:1, name: 'omar' ,age:20},
        {id:2, name: 'Ahmed' ,age:15},
        {id:3, name: 'Ali' ,age:30}
    ]
  };

  deleteApp=(index)=>{

    const items= [...this.state.items]
    items.splice(index,1);
    this.setState({
      items
    })

    /*
    همرر ال id  كبروبس فوق بدل الاندكس وهناك كمان في الفولدر
    let items=this.state.items.filter(item=>{
      return item.id !== id
    })
    this.setState({
      items
    })
    */
   /*
    همرر ال id  كبروبس فوق بدل الاندكس وهناك كمان في الفولدر
    const items= this.state.items
    const i = items.findIndex(item => item.id === id);
    items.splice(i,1);
    this.setState({
      items
    })
    */
  }
  addApp=(item)=>{
    item.id=Math.random()
    const items=this.state.items;
    items.push(item);
    this.setState({
    items
    })
}

  render() {
 
    return (
      <div className="App container">
        <h1 className="text-center">todo App</h1>

        <Todoitems items={this.state.items}
                   deleteApp={this.deleteApp}/>

        <Additem addApp={this.addApp}/>

      </div>

    )
  }
}

export default App;



/*
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

*/