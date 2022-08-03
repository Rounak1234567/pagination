import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


const Comp1 = ()=>{

    const [data, setData] = useState([])
    const [todoPerPage, setTodoPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(2);
    let pag = [];

    useEffect(()=>{
        getData()
    },[])


    const getData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            setData(res.data)
        })
    }

    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
    const currTodos = data.slice(indexOfFirstTodo,indexOfLastTodo);
    const noOfPages = Math.ceil(data.length/todoPerPage);
    
    
    for(let i = 1; i <= noOfPages; i++){
        pag.push(i)
    }
    //console.log(currTodos)
 
    return(
        <div>
            {
                currTodos.map((el)=>{
                    return(
                        <div key={el.id}>
                            <h1>{el.title}</h1>
                        </div>
                    )
                })        
            }
            <div>
                {
                    pag.map((el,i)=>{
                        return(
                            <button key={i} onClick={()=>setCurrentPage(el)}>{el}</button>
                        )           
                    })
                }
            </div>
        </div>
    )
}


export {Comp1}