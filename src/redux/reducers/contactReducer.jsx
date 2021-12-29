const initialState=[
    {
        id:1,
        name:"ma ma",
        email:"mama@gmail.com",
        number:1234567890
    },
    {
        id:2,
        name:"Ko Ko",
        email:"koko@gmail.com",
        number:741258963
    },
    {
        id:3,
        name:"myo myo",
        email:"myomyo@gmail.com",
        number:321456987
    }
];

const contactReducer =(state = initialState,action)=>{
   switch(action.type){
       case "ADD_CONTACT":
       state = [...state,action.payload];
       return state;
       case "EDIT_CONTACT":
        const updateState = state.map((contact)=>
        contact.id === action.payload.id ? action.payload:contact
        );
       state = updateState;
       return state;
       case "DELETE_CONTACT":
           const filterContacts = state.filter(contact => contact.id !== parseInt(action.payload));
           
           state = filterContacts;
       return state;
       default:
           return state;
   } 
}
export default contactReducer;