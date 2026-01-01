import React from 'react'
// import './App.css'

export interface CardBoxProps {
  userName: string
}
const CardBox= (props: CardBoxProps) => {

    return( 
      <div className="card">
      <img src="https://images.unsplash.com/photo-1635442207643-073fac295f73?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="check your internet " />
      <h2>{props.userName}</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti, expedita fugit consequuntur cum pariatur.</p>
      <button>view Profile</button>
    </div>
    )
 
}

export default CardBox
