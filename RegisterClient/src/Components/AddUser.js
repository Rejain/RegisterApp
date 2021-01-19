import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState, useRef } from 'react';
import config from '../Assets/config.json';
import { validateAge, validateEmail, validateUsername } from '../Model/UserValidationModel';
import { AddUserToDb } from '../Controller/UserController';
import { addUser } from '../Actions';

export default function AddUser(props) {

    const [usernameShowError, setUsernameShowError] = useState(false);
    const [emailShowError, setEmailShowError] = useState(false);
    const [ageShowError, setAgeShowError] = useState(false);
    const [usernameHint, setUsernameHint] = useState(config.messages.usernameHint);
    const [emailHint, setEmailHint] = useState(config.messages.emailHint);
    const [ageHint, setAgeHint] = useState(config.messages.ageHint);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [canSubmit, setCanSubmit] = useState(true);
    const firstRun = useRef(true);

    function onSubmitForm() {
        const record = { username: username, email: email, age: age };
        AddUserToDb(record)
        .then((result) => {
            if(result.data === "" && result.status === 200) {
                alert("Successfuly added user.")
                props.dispatch(addUser(record));
            }
        })
        .catch((err) => {
            alert(err.responseText)
        })
    }

    useEffect(() => {
        if(firstRun.current) {
            firstRun.current = false;
            return;
        }
        onUsernameChange();
        onEmailChange();
        onAgeChange();
    })

    function onUsernameChange() {
        if(validateUsername(username)) {
            if(usernameShowError){
                setUsernameShowError(false);
                setUsernameHint(config.messages.usernameHint);
                if(emailShowError || ageShowError) {
                    if(!canSubmit) {
                        setCanSubmit(true);
                    }
                } else {
                    if(canSubmit) {
                        setCanSubmit(false);
                    }
                }
            }
        } else {
            if(usernameShowError === false) {
                setUsernameShowError(true);
                setUsernameHint(config.messages.usernameNotValid);
            }
            if(!canSubmit) {
                setCanSubmit(true);
            }
        }
    }

    function onEmailChange() {
        if(validateEmail(email)) {
            if(emailShowError) {
                setEmailShowError(false);
                setEmailHint(config.messages.emailHint);
                if(usernameShowError || ageShowError) {
                    if(!canSubmit) {
                        setCanSubmit(true);
                    }
                } else {
                    if(canSubmit) {
                        setCanSubmit(false)
                    }
                }
            }
        } else {
            if(emailShowError === false) {
                setEmailShowError(true);
                setEmailHint(config.messages.emailNotValid);
                if(!canSubmit) {
                    setCanSubmit(true);
                }
            }
        }
    }

    function onAgeChange() {
        if(validateAge(age)) {
            if(ageShowError){
                setAgeShowError(false);
                setAgeHint(config.messages.ageHint);
                if(emailShowError || usernameShowError) {
                    if(!canSubmit) {
                        setCanSubmit(true);
                    }
                } else {
                    if(canSubmit) {
                        setCanSubmit(false)
                    }
                }
            }
        } else {
            if(ageShowError === false) {
                setAgeShowError(true);
                setAgeHint(config.messages.ageNotValid);
            }
            if(!canSubmit) {
                setCanSubmit(true);
            }
        }
    }

    return (
        <Form>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}></Form.Control>
                <Form.Text className={usernameShowError ? "error-text-muted" : "text-muted"} id="changeMe">
                    {usernameHint}
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                <Form.Text className={emailShowError ? "error-text-muted" : "text-muted"}>
                    {emailHint}
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)}></Form.Control>
                <Form.Text className={ageShowError ? "error-text-muted" : "text-muted"}>
                    {ageHint}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={onSubmitForm} disabled={canSubmit}>
                Submit
            </Button>
        </Form>
    )
}

