import TodoItem from './TodoItem';


function TodoList({todos}) {
  
    return (
      <>
      <h3 className='list-title'>할일 목록</h3>
      {todos.length > 0 ? 
          <ul className='todo-list'>
            {todos.map((item, index)=> (
              // <li key={index}>{item}</li>
            //   각각의 list를 컴포넌트로 분리 
            <TodoItem key={index} text={item} />
            )) }
          </ul>
          : 
          <p className='empty-list'>아직 할일이 없어요.</p>
        }
      </>
    )
  }

export default TodoList;