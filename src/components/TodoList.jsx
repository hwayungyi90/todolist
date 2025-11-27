// import TodoItem from './TodoItem';
import { useState }  from "react";
import TodoItem from "./TodoItem";

// 기존에는 props 다 받아옴
// function TodoList({todos, onDelete, onToggle, onEdit, onUpdate}){}

// useContext로 함수들 받아오니까 todos만 받아오면 됨 
function TodoList({todos}) {
  
  // const [editText, setEditText] = useState(""); //수정 중인 텍스트 상태
  // editText라는 임시 저장소.
  // 수정 버튼을 눌렀을 때 기존 텍스트를 이곳에 넣어두고,
  // 수정 중일 때 입력창의 값으로 사용.



  // 7. 필터 영역 추가 (전체/미완료/완료)
  const [filter, setFilter] = useState("전체"); // 필터 상태 추가


  function filterTodos( ) {
    if (filter === "전체") {
      return todos; // 전체 할 일 반환
    } else if (filter === "미완료") {
      return todos.filter(todo => !todo.done); // 미완료 할 일만 반환
    } else if (filter === "완료") {
      return todos.filter(todo => todo.done); // 완료 할 일만 반환
    }
    
  }

  const todosToShow = filterTodos(); //필터링된 할 일 목록    
  

    return (
      <>
      <h3 className='list-title'>할일 목록</h3>
      {/* 필터 영역 추가 (전체/미완료/완료) */}
      <div className="filter-wrap">
        {/* <button className="filter-btn" onClick={() => setFilter("전체")}>전체</button>
        <button className="filter-btn" onClick={() => setFilter("미완료")}>미완료</button>
        <button className="filter-btn" onClick={() => setFilter("완료")}>완료</button> */}
        <button   
          className={`filter-btn ${filter === "전체" ? "active" : ""}`} 
          onClick={() => setFilter("전체")}
        >
          전체
        </button>
        <button 
          className={`filter-btn ${filter === "미완료" ? "active" : ""}`} 
          onClick={() => setFilter("미완료")}
        >
          미완료
        </button>
        <button 
          className={`filter-btn ${filter === "완료" ? "active" : ""}`} 
          onClick={() => setFilter("완료")}
        >
          완료
        </button>
      </div>

      {/* {todos.length > 0 ?  */}

      {/* 기존에는 todos로 되어있었지만 필터링된 목록을 보여줘야 하니까 todosToShow */}
      {todosToShow.length > 0 ? 
          <ul className='todo-list'>
            {/* 여기도 마찬가지로 todos가 아니라 필터링된 todosToShow 사용 */}
            {todosToShow.map((item)=> (
              <TodoItem
                key={item.id}
                item={item}
                // onDelete={onDelete}
                // onToggle={onToggle}
                // onEdit={onEdit}
                // onUpdate={onUpdate}
              />

              // const isEditing = item.isEditing; //이 할 일(item)이 지금 수정 모드인지 아닌지 ‘isEditing’이라는 이름에 저장해 둘게!

            // const editView = (
            //   <li className="todo-item" key={item.id} id={item.id}>
            //     {/* 수정 중일 때 */}
            //     <input type="text" value={editText} onChange={(e)=> setEditText(e.target.value)} /> 
            //     {/* 저장 버튼  */}
            //       <button className="save-btn" onClick={()=>onUpdate(item.id, editText)}>저장</button>
            //       <button className="cancel-btn" onClick={()=> onEdit(item.id)}>취소</button>
            //   </li>
            // )

            // const normalView = (
            //   <li className="todo-item" key={item.id} id={item.id}>
            //     {/* 수정 중이 아닐 때  */}
            //   <input type="checkbox"
            //    checked={item.done}  //체크상태 표시
            //    onChange={()=> onToggle(item.id)}  //클릭하면 상태 반전. 클릭한 줄 번호(index)를 toggleTodo에 전달
            //   />
            //   {/* <span>{item.text}</span> */}
            //   <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>

            //   {/* 수정 버튼 추가  */}
            //   <button className="edit-btn" 
            //   onClick={()=> {
            //     setEditText(item.text); //수정할 때 기존 텍스트를 입력창에 넣기
            //     onEdit(item.id); //수정모드 true로 전환
            //   }}
            //   >수정</button>

            //   {/* 삭제버튼 추가  */}
            //   <button className="delete-btn" onClick={() => onDelete(item.id)}>X</button>
            //   {/* 클릭하면 App의 deleteTodo 실행 */}
            //   </li>
            // );

            // // 조건부 렌더링 
            // return(
            //   isEditing ? editView : normalView //수정중이면 editView, 아니면 normalView 보여주기
            // )
            )) }
          </ul>
          : 
          <p className='empty-list'>아직 할일이 없어요.</p>
        }
      </>
    )
  }

export default TodoList;