let nextTodoId=0
export const addTodo=text => {
  return {
    type: 'ADD_TODO',
    id:nextTodoId++,
    text: text
  }
}

export const toggleTodo=id => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const select_1= (todos) => {
  return {
    type: 'ALL_TODOS',

    todos:todos
}
}

export const select_2=(todos) => {
  return {type: 'COMPLETED_TODOS',

  todos:todos
}

}

export const select_3=(todos) => {
  return {type: 'NOT_COMPLETED_TODOS',
  
  todos:todos
  }
}
