import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// 1. 리스트 먼저만들기 
// function TodoList({todos}) {
  
//   return (
//     <>
//     {todos.length > 0 ? 
//         <ul>
//           {todos.map((item, index)=> (
//             <li key={index}>{item}</li>
//           )) }
//         </ul>
//         : 
//         <p>아직 할일이 없어요.</p>
//       }
//     </>
//   )
// }


// 2. 추가할 리스트 영역 만들기 
// function TodoInput({onAddTodo}) {

//   const [newText, setNewText] = useState("");

//   const addNewText = ()=> {
//       if(newText.trim() === "") {
//           return setNewText("");
//       }

//       // App에게 전달하는 순간 
//       onAddTodo(newText);
//       setNewText("");
//   };

//   return(
//       <div>
//           <input type="text" value={newText} onChange={(e)=> setNewText(e.target.value)} placholder="할 일을 입력하세요" />
//           <button onClick={addNewText}>Add</button>
//       </div>
//   )
// }




function App() {
   // 1. 모든 할 일 목록을 저장하는 상태
  const [todos, setTodos] = useState([]);


  // 2. TodoInput이 새로운 할 일을 추가하면 이 함수 실행
  // 즉 새로운 할 일이 생겼을 때 App이 목록에 추가하는 함수
  // function addTodo(newTodo) {
  //   setTodos([...todos, newTodo])
  // }


  // 체크박스 추가 시 newTodo를 객체로 변환 
  //   function addTodo(newTodo) {
  //   setTodos([...todos, {text: newTodo, done: false}])
  //   // 새 항목 추가 시 기본 done은 false (미완료)
  // }



  // 6. 수정 기능 추가 
  // ✔ 수정 버튼을 누르면:
// isEditing: false → true
// 화면이 “글자” → “입력창”으로 바뀜

// ✔ 저장 버튼을 누르면:
// text 변경
// isEditing: true → false

// 즉, 우리가 하는 일은 isEditing 값만 바꿔주는 것이에요.

  function addTodo(newTodo) {
    setTodos([
      ...todos, 

//       ✔ 예전 방식 (index 사용)

// 사탕들을 한 줄로 세워놓고,
// "3번째 사탕 주세요!" 처럼 **순서(index)**로 찾았어요.
// 근데 이 사탕들을 "빨간색만 보여줘!"라고 필터로 골라버리면
// → 원래 3번째 사탕이 1번째가 될 수도 있음
// → 순서가 뒤죽박죽됨 → 잘못된 사탕을 건네줌 😵
// 그래서 이제는 **고유한 이름(id)** 으로 사탕을 찾을 거예요.
      {
        // id: Date.now(),  // 아주 큰 숫자로 된 고유 번호 생성
        id: crypto.randomUUID(), // '36b8f84d-df4e-4d49-b662-bcde71a8764f' 브라우저에서 제공하는 진짜 난수 기반 UUID
        // UUID는 범용 고유 식별자(Universally Unique Identifier)라는 뜻으로, 거의 겹치지 않는 고유한 ID를 만들 때 사용돼요. 즉 전 세계적으로 유일한 식별자
        text: newTodo, 
        done: false, 
        isEditing: false
      }
    ])
    // 새 항목 추가 시 기본 done은 false (미완료)
    // id: Date.now()  // 아주 큰 숫자로 된 고유 번호 생성
  }


  // 수정모드 전환 함수 즉 수정버튼 클릭 시
  function toggleEditMode(id) {
    const editTodos = todos.map((item)=>{
      if(item.id === id) {//해당 id가 내가 클릭한 index면
        return {...item, isEditing: !item.isEditing}; //isEditing 값 반대로 바꿈
      }
      return item;
    })
    setTodos(editTodos);
  }

  // 수정 완료 함수 (저장 버튼 클릭 시)
  function updateTodo(id, newText) {
    const updateTodos = todos.map((item)=> { //todos 배열(할 일 목록)을 한 줄씩 새 배열로 바꿔줌
      if(item.id === id) { //해당 id가 내가 클릭한 index면
        return {...item, text: newText, isEditing: false}; //텍스트 변경 + isEditing false로
      }
      return item;
    })
    setTodos(updateTodos);
  }

  
  // 3. 할일 삭제 함수 (이해하기 쉬운 버전)
  // function deleteTodo(deleteIndex) {
  //   const newTodos = [...todos]   // 기존 배열 그대로 복사
  //   newTodos.splice(deleteIndex, 1) // 클릭한 deleteIndex 1개 삭제
  //   setTodos(newTodos) //새 배열로 상태 업데이트
  // }
// 참고링크 : 
  // https://gymcoding.notion.site/e8aef473da214b608f9de7616cffb310

  // filter 함수로 만든 버전 
  function deleteTodo(id) {
    // filter: 배열을 하나씩 훑으면서 조건에 맞는 것만 새 배열로 반환
    // const newTodos = todos.filter((item, index) => index !== deleteIndex);
    // setTodos(newTodos) //새 배열로 상태 업데이트
    
    // 이걸 한줄로 쓰면 
    setTodos(todos.filter((item) => item.id !== id));

    // 이렇게도 쓸 수 있음
    // setTodos(todos.filter((_, index) => index !== deleteIndex))
    // 여기서 _는 “이 자리에 값(item)이 있지만, 우리는 안 쓸 거예요”
    // 즉, 값은 필요 없고 위치(index)만 필요할 때 _를 사용

  }



  // 할일 완료 상태(체크박스 체크)
  function toggleTodo(id){
    const newTodos = todos.map((item)=> { //todos 배열(할 일 목록)을 한 줄씩 새 배열로 바꿔줌
      if(item.id === id) { //해당 id가 내가 클릭한 id면
        return {...item, done: !item.done}; //원래 내용은 그대로 두고 done 속성만 반대로 바꿈
      }
      return item;
    });

    setTodos(newTodos) // 새 배열로 상태 업데이트
  }


  return (
    <div className='app'>

      {/* useEffect 설명 시 사용 */}
      {/* <div>
        <button onClick={handleCountUpdate}>업데이트</button>
        <p> 카운트: {count}</p> 
      </div> */}


      {/* TodoList  */}
      <h1 className='title'>Todo List</h1>

      <div className='contents'>
        <TodoInput onAddTodo={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} onEdit={toggleEditMode} onUpdate={updateTodo} />

      </div>
    </div>
  )
}

export default App



// 1. useEffect clearUp 설명
// 2. 컴포넌트 분리 
// 3. TodoList에 삭제버튼 추가
// 4. TodoInput에 Enter 키 이벤트 추가 


// 5. 완료되면 체크박스로 완료 표기 
// 현재 todos는 문자열 배열 예를 들어(['청소', '공부'])만 저장하고 있음 
// 체크박스를 만들려면 객체 배열로 바꾸는 게 좋음 

// 예시 :
// [
//   { text: "청소", done: false },
//   { text: "공부", done: true }
// ]
// text → 할 일 내용, done → 완료 여부 (true/false) 


// 6. 할일 목록 수정 기능 추가 
// - 수정 버튼 클릭하면 입력창으로 변경
// - 수정 후 엔터키 또는 확인 버튼 클릭 시 수정 완료
// - 수정 취소 버튼 클릭 시 수정 취소

// 수정 기능 추가하려면 객체 배열에 수정 모드 여부를 나타내는 속성도 추가하는 게 좋음
// 예시 :
// [
//   { text: "청소", done: false, isEditing: false },
//   { text: "공부", done: true, isEditing: true }
// ]
// isEditing → 수정 모드 여부 (true/false)

