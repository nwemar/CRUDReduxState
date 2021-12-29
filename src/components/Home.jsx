import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const contacts =useSelector(state => state);
    const dispatch = useDispatch();
    const deleteContact = (id) => {
       dispatch({type:"DELETE_CONTACT",payload:id});
       window.alert("Delete Successfully!");
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <Link to="/add" className="btn btn-outline-dark"> Add Contact</Link>
                </div>
                <div className='col-md-6 mx-auto'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact,id)=>(
                                   <tr key={id}>
                                       <td>{contact.id}</td>
                                       <td>{contact.name}</td>
                                       <td>{contact.email}</td>
                                       <td>{contact.number}</td>
                                       <td>
                                       <Link to={`/edit/${contact.id}`} className="btn btn-primary"> Edit </Link>
                                       <button type='button' onClick={()=>deleteContact(contact.id)} className="btn btn-danger" style={{marginLeft:'2px'}}> Delete </button>
                                       </td>
                                   </tr> 
                                ))
                            }
                        </tbody>
                    </table>
                    
                </div>
            </div>            
        </div>
    )
}

export default Home
