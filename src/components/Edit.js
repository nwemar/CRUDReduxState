import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useParams, useNavigate } from 'react-router-dom';


const Edit = () => {

    const [name,setName]=  useState("");
    const [email,setEamil]= useState("");
    const [number,setNumber]= useState("");

    const {id} = useParams();
    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));    
    
    useEffect (() =>{
        if(currentContact)
            {
                setName(currentContact.name);
                setEamil(currentContact.email);
                setNumber(currentContact.number);
            }
        },[currentContact]);

    const checkEmail =contacts.find(contact => contact.id !== parseInt(id) && contact.email === email);
    const dispatch =  useDispatch();
    const navigate = useNavigate();

    const handleEditSubmit = (e) =>{
        e.preventDefault();
        if(checkEmail)
        {
           return window.alert("This email is already Exists!");
        }
        const data = {
            id:parseInt(id),
            name,
            email,
            number
        };

        console.log(data);
        
       dispatch({type:"EDIT_CONTACT",payload:data});
       window.alert("Update Successfully!");
       navigate('/');
    }

    return (
        <div className='container'>
            {currentContact? (
                <div className='row'>
            <div className='display-4 text-center'>
               Edit Contact {id}
            </div>
            <div className='col-md-6 shadow mx-auto'>
               <form onSubmit={handleEditSubmit}>
                   <div className='form-group'>
                        <input type="text" required placeholder="Name" className='form-control'
                        value={name} onChange={(e)=>setName( e.target.value)}
                         />
                   </div>
                   <br />
                   <div className='form-group'>
                        <input type="email" required placeholder="Email" className='form-control'
                        value={email} onChange={(e)=>setEamil( e.target.value)} 
                        />
                   </div>
                   <br />
                   <div className='form-group'>
                        <input type="number" required placeholder="Phone Number" className='form-control'
                        value={number} onChange={(e)=>setNumber( e.target.value)} 
                         />
                   </div>
                   <br />
                   <div className='form-group text-center'>
                        <input type="submit" value="Edit" className='btn btn-block btn-dark' />
                        <Link to="/"  className='btn btn-block btn-dark' style={{marginLeft:'5px'}}>Cancle</Link>
                   </div>
               </form>
            </div>
        </div> 
            ): (
                <h1>Contact ID is not exist!</h1>
            )}
                   
    </div>
    )
}

export default Edit
