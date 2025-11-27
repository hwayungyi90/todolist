import { useState } from "react";


function TodoItem({onDelete, onToggle, onEdit, onUpdate, item}) {

    const [editText, setEditText] = useState(""); //수정 중인 텍스트 상태

  const isEditing = item.isEditing; //이 할 일(item)이 지금 수정 모드인지 아닌지 ‘isEditing’이라는 이름에 저장해 둘게!

  const editView = (
    <li className="todo-item" key={item.id} id={item.id}>
      {/* 수정 중일 때 */}
      <input type="text" value={editText} onChange={(e)=> setEditText(e.target.value)} /> 
      {/* 저장 버튼  */}
        <button className="save-btn" onClick={()=>onUpdate(item.id, editText)}>저장</button>
        <button className="cancel-btn" onClick={()=> onEdit(item.id)}>취소</button>
    </li>
  )

  const normalView = (
    <li className="todo-item" key={item.id} id={item.id}>
      {/* 수정 중이 아닐 때  */}
    <input type="checkbox"
      checked={item.done}  //체크상태 표시
      onChange={()=> onToggle(item.id)}  //클릭하면 상태 반전. 클릭한 줄 번호(index)를 toggleTodo에 전달
    />
    {/* <span>{item.text}</span> */}
    <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>

    {/* 수정 버튼 추가  */}
    <button className="edit-btn" 
    onClick={()=> {
      setEditText(item.text); //수정할 때 기존 텍스트를 입력창에 넣기
      onEdit(item.id); //수정모드 true로 전환
    }}
    >수정</button>

    {/* 삭제버튼 추가  */}
    <button className="delete-btn" onClick={() => onDelete(item.id)}>X</button>
    {/* 클릭하면 App의 deleteTodo 실행 */}
    </li>
  );


  // 조건부 렌더링 
  return(
    isEditing ? editView : normalView //수정중이면 editView, 아니면 normalView 보여주기
  )
  }

export default TodoItem;