import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [name, setName] = useState("");
    const [email, setEamil] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector(state => state);

    const checkEmail = contacts.find(contact => contact.email === email);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleSubmitEvent = (e) => {
        e.preventDefault();

        if (checkEmail) {
            return window.alert("This email is already Exists!");
        }
        const data = {
            id: contacts.length + 1,
            name,
            email,
            number
        };
        dispatch({ type: "ADD_CONTACT", payload: data });
        window.alert("Successfully!");
        navigate('/')
    }
    return ( 
    <div className = 'container'>
            <div className = 'row' >
                < div className = 'display-4 text-center' >
                Add Contact 
                </div>
                <div className = 'col-md-6 shadow mx-auto' >
                    <form onSubmit = { handleSubmitEvent } >
                        <div className = 'form-group'>
                            <input type = "text"
                            required placeholder = "Name"
                            className = 'form-control'
                            onChange = {
                                (e) => setName(e.target.value) }
                            /> 
                        </div>
                        <br />
                        <div className = 'form-group' >
                            <input type = "email"
                            required placeholder = "Email"
                            className = 'form-control'
                            onChange = {
                                (e) => setEamil(e.target.value) }
                            /> 
                        </div> 
                        <br / >
                        <div className = 'form-group' >
                            <input type = "number"
                            required placeholder = "Phone Number"
                            className = 'form-control'
                            onChange = {
                                (e) => setNumber(e.target.value) }
                            /> 
                        </div>
                        <br />
                        <div className = 'form-group text-center' >
                            <input type = "submit"
                            value = "Add"
                            className = 'btn btn-block btn-dark' / >
                        </div> 
                    </form> 
                </div> 
            </div> 
        </div>
    )
}

export default Add