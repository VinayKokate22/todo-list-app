import React from 'react'
import { useState } from 'react'

const Todolist = () => {
  const [prev,setprev]=useState("")
  const [listData ,setlistData]=useState([])
  function addActivity(){
        setlistData((listData)=>{
          const updateList=[...listData,prev]
          setprev('')
          return updateList
        })
  }
  function removelist(listindex){
        const updatedlistData= listData.filter((elem,id)=>{
          return listindex!==id
        })  
        setlistData(updatedlistData)
  }
  return (
   <>
     <main className='background-color'>
         <section className='todolistform'>
            <img src="" alt="" />
            <div className='tittle'>
                <h2>To Do List</h2>
            </div>
            <div className='input-flex'>
              <input type="text" placeholder='touch the grass' value={prev} onChange={(e)=>setprev(e.target.value)
               }/>
              <button className='addtask-button btn' onClick={addActivity}>Add Task</button>
            </div>
            
             <div className='scroll-in-y'>

                   <p className='taskremaining'>remaining Task -- keep it up !!</p>
                  {listData!==[] && listData.map((data,i)=>{
                    return(
                      <>
                      <p key={i} className='task-flex'>
                        <div className='taskentered'>{data}</div>
                        <button className='task-removebutton btn' onClick={()=>removelist(i)}>Done</button>
                      </p>
                      </>
                    )
                  })}
             </div>
         </section>
     </main>
   </>
  )
}

export default Todolist