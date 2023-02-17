import React, {useState} from "react";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Button/ErrorModal";
import Card from "../UI/Card/Card";


import styles from './UserForm.module.css';


    function UserForm(props){
    const [newUser, setNewUser] = useState({
        name: '',
        age: 0,
        id: '',
    });
    const [error, setError] = useState();




    function usernameHandler(event){
        setNewUser((prevValue) => {
            return {
                ...prevValue,
                name: event.target.value,
            }
        })
    }
    function ageHandler(event){
        setNewUser((prevValue) => {
            return {
                ...prevValue,
                age: event.target.value,
            }
        })
    }

    function submissionHandler(event){
        event.preventDefault();
        if(newUser.name.trim().length === 0 || newUser.age.trim().length === 0){
                setError({
                    title: 'Invalid Input',
                    message: 'Please enter a valid name and age. (non-empty values)'
                })
            
            return;
        }
        if(+(newUser.age) <= 0){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (>0)'
            })
            return;
        }
        props.onAddingUser(newUser);
        setNewUser({
            name: '',
            age: '',
            id: ''
        })
    }
    const errorHandler = () => {
        setError(null);
    }


    const {name, age} = newUser;
    return(
    <div>
        {error && <ErrorModal title = {error.title} message = {error.message} onConfirming = {errorHandler}></ErrorModal>}
        <Card class = {styles.userForm}>
        <form  type= "submit" onSubmit={submissionHandler}>
        <div className={styles["input-username"]}>
            <label htmlFor="username">Username</label>
            <input type="text" onChange = {usernameHandler} value = {name} id = "username"></input>
        </div>
        <div className={styles["input-age"]}>
            <label htmlFor="age">Age (Years)</label>
            <input type= "number" onChange = {ageHandler} value = {age} id = "age"></input>
        </div>
        <div className={styles.input}>
            <Button type = "submit">Add User</Button>
        </div>  
    </form>
    </Card>
    </div> )
}



export default UserForm;