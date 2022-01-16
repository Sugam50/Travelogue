const UserReducer =(state=[],action)=>{
   switch(action.type){
       case 'USER_LOGIN':
           return [...state,action.payload]
        case 'USER_SIGNUP':
            return [...state,action.payload]
        case 'USER_LOGOUT':
            return [...state,action.payload]
        default:
            return state;
   }
}

export default UserReducer