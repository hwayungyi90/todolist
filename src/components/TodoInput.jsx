import { useState } from 'react'

function TodoInput({onAddTodo}) {

    const [newText, setNewText] = useState("");

    const addNewText = ()=> {
        if(newText.trim() === "") {
            return setNewText("");
        }

        onAddTodo(newText); // 부모(App)에 새 할 일 전달
        setNewText(""); // 입력창 초기화
    };


    // enter 키 이벤트 처리 
    // onkeypress 는 더이상 권장하지 않음. 하여 onkeydown 사용 
    function keyDown(e) {
        if(e.key === 'Enter') { 
            addNewText()
            // 즉 이벤트의 키가 enter이면 addNewText() 함수 호출
        }
    }


    return(
        <div>
            <h3 className='list-title'>할일 추가</h3>
            <div className='input-wrap'>
                <input className='input-add' type="text" value={newText} onChange={(e)=> setNewText(e.target.value)} onKeyDown={keyDown} placeholder="할 일을 입력하세요" />
                <button className='btn' onClick={addNewText}>Add</button>
            </div>
        </div>
    )
}

export default TodoInput;