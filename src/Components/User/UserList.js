import React from 'react';
import Card from '../UI/Card/Card';
import User from './User';

import styles from './UserList.module.css';


function UserList(props){

    function userDeleteProcess(userId){
        props.onDeletingUser(userId);
    }
    if(props.userList.length === 0){
        return(<div>

        </div>);
    }


    return (
        <Card class = {styles['user-list']}>
            <ul>
            {props.userList.map((user) => {
                return <User username= {user.name} age= {user.age} id = {user.id} key = {user.id} onClick = {userDeleteProcess}></User>
            })}
            </ul>
        </Card>
        
    )
}


export default UserList;
