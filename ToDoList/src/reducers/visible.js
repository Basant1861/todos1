
const visible = (state=[], action) => {
  switch(action.type) {
    case 'ALL_TODOS':
     return state

     case 'COMPLETED_TODOS':
     if(action.todos) {
       return action.todos.filter(todo => {
         if (todo.completed===true) {
           return todo
         }

       })
     }


       case 'NOT_COMPLETED_TODOS':
       if(action.todos) {
         return action.todos.filter(todo => {
           if (todo.completed===false) {
             return todo
           }

         })
       }

     default:
        return state
  }
}
export default visible
