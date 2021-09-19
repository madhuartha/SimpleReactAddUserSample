import { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddNewUser.module.css'
import Button from '../UI/Button';
import classes from '../UI/Button.module.css';
import ErrorModal from '../UI/ErrorModal';


const AddNewUser = props => {
    const[enteredUserName,setEnteredUserName] = useState('');
    const[enteredUserAge,setEnteredUserAge] = useState('');
    const[error,setError] = useState();

    const formSubmitHandler = event => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length ===0){
            setError({title:"Invalid Input",message:"Input needs to be valid (non-empty)"});
            return;
        }
        if(+enteredUserAge < 0){
            setError({title:"Invalid Age",message:"Age input should be > 0"});
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge);
        setEnteredUserName('');
        setEnteredUserAge('');
    }

    const userNameChangeHandler = event => setEnteredUserName(event.target.value);
    const userAgeChangeHandler = event => setEnteredUserAge(event.target.value);
    const errorResetHandler = () => setError(null);

    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onErrorReset={errorResetHandler} /> }
        <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="username">User Name</label>
            <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler} />
            <Button type="submit" className={classes.button}>Add User</Button>
            {/* <button type="submit">Add User</button> */}
        </form>
        </Card>
        </div>
    )

}

export default AddNewUser;