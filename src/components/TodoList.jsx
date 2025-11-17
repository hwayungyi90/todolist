// import TodoItem from './TodoItem';


function TodoList({todos, onDelete, onToggle}) {
  
    return (
      <>
      <h3 className='list-title'>할일 목록</h3>
      {todos.length > 0 ? 
          <ul className='todo-list'>
            {todos.map((item, index)=> (
              // <li key={index}>{item}</li>
            //   각각의 list를 컴포넌트로 분리 
            // <TodoItem key={index} text={item} />
            <li className="todo-item" key={index}>
              <input type="checkbox"
               checked={item.done}  //체크상태 표시
               onChange={()=> onToggle(index)}  //클릭하면 상태 반전. 클릭한 줄 번호(index)를 toggleTodo에 전달
              />
              {/* <span>{item.text}</span> */}
              <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>

              {/* 삭제버튼 추가  */}
              <button className="delete-btn" onClick={() => onDelete(index)}>X</button>
              {/* 클릭하면 App의 deleteTodo 실행 */}
              </li>
            )) }
          </ul>
          : 
          <p className='empty-list'>아직 할일이 없어요.</p>
        }
      </>
    )
  }

export default TodoList;