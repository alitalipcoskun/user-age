import React from "react";


import styles from './User.module.css';


function User(props){
    function findUserId(){
        props.onClick(props.id)
    }

    return(<li key= {props.id} className = {styles.user} onClick = {findUserId}>
        {props.username} ({props.age} years old.)
    </li>)
}


export default User;