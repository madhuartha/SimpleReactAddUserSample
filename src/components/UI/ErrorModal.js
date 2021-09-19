import Card from "./Card";
import Button from "./Button";
import classes from'./ErrorModal.module.css';
import styles from'./Button.module.css';

const ErrorModal = props =>{
    return (
        <div>
       <div className="styles.backdrop" onClick={props.onErrorReset}/>
        <Card className={styles.button} >
            <header className={classes.header} >
                <h2>{props.title} </h2>
            </header>
            <div className={classes.content} >
                <p>{props.message} </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onErrorReset}>Okay</Button>
            </footer>
        </Card>
        </div>
    );

}

export default ErrorModal;