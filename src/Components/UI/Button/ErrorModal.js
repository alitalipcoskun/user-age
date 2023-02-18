import React from "react";
import Card from "../Card/Card";
import Button from "./Button";
import ReactDOM from "react-dom"

import classes from './ErrorModal.module.css';

const BackDrop = (props) => {
    return (<div className={classes.backdrop} onClick = {props.onConfirming}/>);
}

const ModalOverlay = (props) => {
    return (<Card class={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick = {props.onConfirming}>Okay</Button>
                </footer>
            </Card>);
}


const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirming = {props.onConfirming}></BackDrop>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title = {props.title} message = {props.message} onConfirming = {props.onConfirming}></ModalOverlay>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}


export default ErrorModal;
