import React from 'react'

const Todoitems =(props)=> {

    const {items , deleteApp} = props
    const length = items.length
    
    const Listitems = length ? (
        items.map((item , index) =>{
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deleteApp(index)}>delete</span>
                </div>
            )
        })
    ):(
        <p className="yay">you have no todos left , yay!</p>
    )


    return (
        <div className="Listitems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>

            {Listitems}

        </div>
    )
}

export default Todoitems