# 원티드 프리온보딩 프론트엔드 - 선발 과제

## 지원자 성명

`이민구`

## [사전과제 링크](https://wanted-pre-onboarding-frontend-five-taupe.vercel.app/)

---

### 프로젝트 실행 방법

```shell
git clone https://github.com/thumbthing/wanted-pre-onboarding-frontend.git
npm install
npm start
```

## 기간

---

2023년 08월 03일 ~ 2023년 08월 06일

## 목적

---

1. Simple 인증 / 인가
2. Simple CRUD

## 진행방식

---

### commit 컨벤션

| Type 키워드 | 사용 시점                                                             |
| ----------- | --------------------------------------------------------------------- |
| feat        | 새로운 기능 추가                                                      |
| fix         | 버그 수정                                                             |
| docs        | 문서 수정                                                             |
| style       | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경 (CSS 등)                                        |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                |
| refactor    | 코드 리팩토링                                                         |
| build       | 빌드 파일 수정                                                        |
| ci          | CI 설정 파일 수정                                                     |
| chore       | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등)                |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                     |
| remove      | 파일을 삭제만 한 경우                                                 |

---

### `File Tree`

```shell
├── App.css
├── App.test.tsx
├── App.tsx
├── api
│   ├── auth
│   │   └── auth.ts
│   ├── instance.ts
│   └── todo
│       └── todo.ts
├── components
│   ├── sign
│   │   └── SignForm.tsx
│   └── todo
│       ├── Todo.tsx
│       ├── TodoInput.tsx
│       ├── TodoList.tsx
│       └── TodoUpdateForm.tsx
├── index.css
├── index.tsx
├── logo.svg
├── pages
│   ├── Main.tsx
│   ├── SignIn.tsx
│   ├── SignUp.tsx
│   └── Todo.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
└── style
    ├── main.styled.ts
    └── todo.styled.ts
```

---

## `프로젝트 설명`

### `라우팅`

```javascript
// src/App.tsx

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

`implementation`  
App.tsx에서 직접 라우팅으로 구성

`reason`  
소규모 프로젝트 임을 감안해서 가장 간단한 방법을 선택

---

### `API`

```javascript
// src/api/instance.ts

import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Error :", error);
    return Promise.reject(error);
  }
);

export default instance;
```

`implementation`  
axios 라이브러리를 활용하여 instance 생성  
interceptors를 활용하여 인증 / CRUD에 공통적으로 사용되도록 설정

`reason`  
API 구현시 중복 작성되는 코드 최소화

---

### `main`

#### `page`

```javascript
// src/pages/Main.tsx

import React from "react";
import { Link } from "react-router-dom";
import { Container, LinkContainer, StyledLink } from "../style/main.styled";

const Main = () => {
  return (
    <Container>
      <header>
        <h1>원티드 프리온보딩 프론트엔드 - 선발과제</h1>
      </header>
      <LinkContainer>
        <ul>
          <li>
            <StyledLink to={`signin`}>로그인</StyledLink>
          </li>
          <li>
            <StyledLink to={`signup`}>회원가입</StyledLink>
          </li>
          <li>
            <StyledLink to={`todo`}>TodoList</StyledLink>
          </li>
        </ul>
      </LinkContainer>
    </Container>
  );
};

export default Main;
```

#### `style`

```javascript
// src/style/main.styled.ts

import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: center;

  ul {
    list-style: none;
    li + li {
      margin-top: 5px;
    }
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 40px;
  color: #007bff;
  text-decoration: none;
  font-size: 2em;
  font-weight: bold;
  margin-right: 10px;
`;
```

`implementation`

`reason`

---

### `회원가입 / 로그인`

> #### 1. `page`
>
> > `회원가입`

```javascript
// src/pages/SignUp.tsx

import React, { useEffect, useState } from "react";
import SignForm from "../components/sign/SignForm";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [accessToken] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/todo");
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <SignForm />
    </div>
  );
};

export default SignIn;
```

> > `로그인`

```javascript
// src/pages/SignIn.tsx

import React, { useEffect, useState } from "react";
import SignForm from "../components/sign/SignForm";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [accessToken] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/todo");
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <SignForm />
    </div>
  );
};

export default SignIn;
```

> `implementation`  
> 공통 입력폼을 이용해 페이지 표시
>
> `reason`  
> 페이지 내에서 props를 이용해 로그인-회원가입을 구분하는 것은 비효율적이라 판단하여 페이지 자체를 분리
>
> #### 2. `component`

```javascript
// src/components/sign/SignForm.tsx

import { ChangeEvent, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../api/auth/auth";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const URL = useLocation();
  const navigate = useNavigate();

  const handleEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value;
    const gTLDRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmail(emailInput);
    setEmailValid(gTLDRegex.test(emailInput));
  }, []);

  const handlePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const passwordInput = e.target.value;
    const inputValid = passwordInput.length >= 8;

    setPassword(passwordInput);
    setPasswordValid(inputValid);
  }, []);

  const handleValid = useCallback(() => {
    return !(emailValid && passwordValid);
  }, [emailValid, passwordValid]);

  const handleSignUp = useCallback(async () => {
    try {
      const response = await signUp({ email, password });

      if (response?.status === 201) {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      } else {
        alert("회원가입에 실패했습니다");
      }
    } catch (error) {
      console.log("sign up error : ", error);
    }
  }, [email, password, navigate]);

  const handleSignIn = useCallback(async () => {
    try {
      const response = await signIn({ email, password });

      if (response?.status === 200) {
        alert("로그인 성공");
        const accessToken = response.data.access_token;
        localStorage.setItem("access_token", accessToken);
        navigate("/todo");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {}
  }, [email, password, navigate]);

  return (
    <>
      <div onClick={() => navigate("/")}>
        <h1>{URL.pathname === "/signup" ? "회원가입" : "로그인"}</h1>
      </div>
      <div>
        <h3>아이디</h3>
        <input data-testid='email-input' type='email' onChange={handleEmail} />
        <h3>비밀번호</h3>
        <input
          data-testid='password-input'
          type='password'
          onChange={handlePassword}
        />
        <button
          data-testid={
            URL.pathname === "/signup" ? "signup-button" : "signin-button"
          }
          disabled={handleValid()}
          onClick={URL.pathname === "/signup" ? handleSignUp : handleSignIn}
        >
          {URL.pathname === "/signup" ? "회원가입" : "로그인"}
        </button>
      </div>
    </>
  );
};

export default SignForm;
```

> `implementation`  
> url에 따른 컴포넌트 렌더링 방식 구분
>
> `reason`  
> 로그인/회원가입 페이지에서 공통적으로 사용하기 위한 컴포넌트로 설계
>
> #### 3. `API`

```javascript
// src/api/auth/auth.ts

import instance from "../instance";

interface UserInformation {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: UserInformation) => {
  const data = {
    email,
    password,
  };

  try {
    const response = await instance.post(`/auth/signup`, data);
    return response;
  } catch (error) {
    console.log("sign up error : ", error);
    return null;
  }
};

export const signIn = async ({ email, password }: UserInformation) => {
  const data = {
    email,
    password,
  };

  try {
    const response = await instance.post(`/auth/signin`, data);
    return response;
  } catch (error) {
    console.log("sign in error : ", error);
    return null;
  }
};
```

> `implementation`  
> 공통 instance를 활용하여 서버로 로그인 / 회원가입 요청
>
> `reason`  
> 하나의 함수로 구현하기 보다는  
> 각각의 함수가 하나의 기능을 수행하고, 함수명을 구체화 하기 위해 분리하여 구현

---

### `Todo List`

> #### 1. `page`

```javascript
// src/pages/Todo.tsx

import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TodoInput from "../components/todo/TodoInput";
import { deleteTodo, getTodos, updateTodo } from "../api/todo/todo";
import TodoList from "../components/todo/TodoList";
import { TodoContainer } from "../style/todo.styled";

export interface TodosProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

const Todo = () => {
  const [accessToken] = useState(localStorage.getItem("access_token"));
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await getTodos();
        setTodos(response?.data);
      } catch (error) {
        console.log("get todo list error : ", error);
      }
    };

    if (!accessToken) {
      navigate("/signin");
    } else {
      getTodoList();
    }
  }, [accessToken, navigate]);

  const handleIsComplete = async ({ id, todo, isCompleted }: TodosProps) => {
    try {
      const response = await updateTodo(id, todo, !isCompleted);
      const updatedTodo = todos.map((item) =>
        item.id === response?.data.id ? { ...response?.data } : item
      );
      setTodos(updatedTodo);
    } catch (error) {
      console.log("isComplete error : ", error);
    }
  };

  const handleUpdateTodo = async ({ id, todo, isCompleted }: TodosProps) => {
    try {
      const response = await updateTodo(id, todo, isCompleted);
      const updatedTodo = todos.map((item) =>
        item.id === response?.data.id ? { ...response?.data } : item
      );
      setTodos(updatedTodo);
    } catch (error) {
      console.log("update Todo error : ", error);
    }
  };

  const handleAddTodo = useCallback((newTodo: TodosProps) => {
    setTodos((todos) => [...todos, newTodo]);
  }, []);

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      const deletedTodo = todos.filter((item) => item.id !== id);
      setTodos(deletedTodo);
    } catch (error) {
      console.log("delete todo error : ", error);
    }
  };
  return (
    <TodoContainer>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleIsComplete={handleIsComplete}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </TodoContainer>
  );
};

export default Todo;
```

> `implementation`  
> todo의 CRUD 기능을 하는 함수를 props로 컴포넌트(TodoInput, TodoList)에 전달  
> todo의 리스트 state를 부모 컴포넌트인 page에서 관리  
> todo의 완료 여부 / 전체적인 수정하는 기능 분리  
> 로그인 여부에 따른 페이지 이동
>
> `reason`  
> create / delete: 서버 요청의 최소화를 위해서 state로 관리 되는 todoList만 변경  
> read: 서버 요청 최소화를 위해 최초 렌더링시에만 수행  
> update: 수정시 발생하는 이벤트를 기준으로 함수명 구체화/분리
>
> #### 2. `API`

```javascript
// src/api/todo/todo.ts

import instance from "../instance";

interface TodoProps {
  id: number;
  todo: string;
  isCompleted?: boolean;
}

export const createTodo = async (todo: string) => {
  const data = { todo };

  try {
    const request = await instance.post("/todos", data);
    return request;
  } catch (error) {
    console.log("create todo error : ", error);
  }
};

export const getTodos = async () => {
  try {
    const response = await instance.get("/todos");
    return response;
  } catch (error) {
    console.log("get Todo list Error : ", error);
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  const data = {
    todo: todo,
    isCompleted: isCompleted,
  };
  try {
    const response = await instance.put(`/todos/${id}`, data);
    return response;
  } catch (error) {
    console.log("update todo error : ", error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await instance.delete(`/todos/${id}`);
    return response;
  } catch (error) {
    console.log("delete todo error : ", error);
  }
};
```

> `implementation`  
> 공통 instance를 활용한 CRUD 서버 요청
>
> `reason`
>
> #### 3. `style`

```javascript
// src/style/todo.styled.ts

import { styled } from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    display: flex;
    margin: 10px;

    div {
      display: flex;
      flex: 5;
      flex-direction: row;
      background-color: grey;
      border-radius: 10px;
      height: 2rem;
      width: 20rem;
      text-align: center;
      input {
        border: none;
        width: 26px;
        display: flex;
        flex-direction: row;
      }

      span {
        display: flex;
      }
    }
    button {
      border: none;
      background-color: #fff;
      border-radius: 10px;
      margin: 3px;
    }
  }
`;

export const StyledInputForm = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 10px;
`;
```

> #### 4. `component`
>
> > ##### 1. `TodoInput`

```javascript
// src/components/todo/TodoInput.tsx

import React, { ChangeEvent, useCallback, useState } from "react";
import { createTodo } from "../../api/todo/todo";
import { TodosProps } from "../../pages/Todo";
import { StyledInputForm } from "../../style/todo.styled";
import { useNavigate } from "react-router-dom";

interface TodoInputProps {
  handleAddTodo: (newTodo: TodosProps) => void;
}

const TodoInput = ({ handleAddTodo }: TodoInputProps) => {
  const [todoInput, setTodoInput] = useState("");
  const navigate = useNavigate();

  const handleTodoInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setTodoInput(inputText);
  }, []);

  const handleTodoCreate = useCallback(async () => {
    try {
      const response = await createTodo(todoInput);
      handleAddTodo(response?.data);
    } catch (error) {
      console.log("todo create error: ", error);
    }
  }, [todoInput, handleAddTodo]);

  return (
    <>
      <h2 onClick={() => navigate("/")}>todo list</h2>
      <StyledInputForm>
        <input data-testid='new-todo-input' onChange={handleTodoInput} />
        <button data-testid='new-todo-add-button' onClick={handleTodoCreate}>
          추가
        </button>
      </StyledInputForm>
    </>
  );
};

export default TodoInput;
```

> `implementation`  
> page로 부터 받은 props 활용하여 create 구현
>
> `reason`  
> create 기능만을 수행하는 컴포넌트로 설계
>
> > ##### 2. `TodoList`

```javascript
// src/components/todo/TodoList.tsx

import { useCallback, useState } from "react";
import Todo from "./Todo";
import TodoUpdateForm from "./TodoUpdateForm";
import { TodosProps } from "../../pages/Todo";
import { StyledList } from "../../style/todo.styled";

interface TodoListProps {
  todos: TodosProps[];
  handleIsComplete: (todos: TodosProps) => Promise<void>;
  handleDeleteTodo: (todosId: number) => void;
  handleUpdateTodo: (todo: TodosProps) => void;
}

const TodoList = ({
  todos,
  handleIsComplete,
  handleDeleteTodo,
  handleUpdateTodo,
}: TodoListProps) => {
  const [isEditing, setIsEditing] = useState<number>();

  const handleIsEditing = useCallback(
    (todoId: number) => {
      if (!isEditing) {
        setIsEditing(todoId);
      } else if (isEditing && todoId === isEditing) {
        setIsEditing(undefined);
      } else if (isEditing && todoId !== isEditing) {
        setIsEditing(todoId);
      }
    },
    [isEditing]
  );

  return (
    <StyledList>
      {todos.map((todos) => (
        <li key={todos.id}>
          {isEditing === todos.id ? (
            <TodoUpdateForm
              todos={todos}
              handleIsEditing={handleIsEditing}
              handleUpdateTodo={handleUpdateTodo}
            />
          ) : (
            <Todo
              todos={todos}
              handleIsComplete={handleIsComplete}
              handleIsEditing={handleIsEditing}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </li>
      ))}
    </StyledList>
  );
};

export default TodoList;

```

> > > ##### 2-1. `Todo`

```javascript
// src/components/todo/Todo.tsx

import React from "react";
import { TodosProps } from "../../pages/Todo";

interface TodoProps {
  todos: TodosProps;
  handleIsComplete: (todo: TodosProps) => void;
  handleIsEditing: (todoId: number) => void;
  handleDeleteTodo: (todoId: number) => void;
}

const Todo = ({
  todos,
  handleIsComplete,
  handleIsEditing,
  handleDeleteTodo,
}: TodoProps) => {
  return (
    <>
      <div>
        <input
          type='checkbox'
          onChange={() => handleIsComplete(todos)}
          checked={todos.isCompleted}
        />
        <span>{todos.todo}</span>
      </div>
      <button
        data-testid='modify-button'
        onClick={() => handleIsEditing(todos.id)}
      >
        수정
      </button>
      <button
        data-testid='delete-button'
        onClick={() => handleDeleteTodo(todos.id)}
      >
        삭제
      </button>
    </>
  );
};

export default Todo;
```

> > > ##### 2-2. `TodoUpdateForm`

```javascript
// src/components/todo/TodoUpdateForm.tsx
import React, { ChangeEvent, useCallback, useState } from "react";
import { TodosProps } from "../../pages/Todo";

interface TodoUpdateFormProps {
  todos: TodosProps;
  handleIsEditing: (todoId: number) => void;
  handleUpdateTodo: (todo: TodosProps) => void;
}

const TodoUpdateForm = ({
  todos,
  handleIsEditing,
  handleUpdateTodo,
}: TodoUpdateFormProps) => {
  const [modifyIsCompleted, setModifyIsCompleted] = useState(todos.isCompleted);
  const [modifyTodo, setModifyTodo] = useState(todos.todo);

  const handleModifyTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const editedTodo = e.target.value;
    setModifyTodo(editedTodo);
  }, []);

  const handleModifyIsCompleted = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const editedIsCompleted = e.target.checked;
      setModifyIsCompleted(editedIsCompleted);
    },
    []
  );

  const handleModifySubmit = useCallback(async () => {
    try {
      handleUpdateTodo({
        ...todos,
        todo: modifyTodo,
        isCompleted: modifyIsCompleted,
      });
      handleIsEditing(todos.id);
    } catch (error) {
      console.log("modify todo error : ", error);
    }
  }, [handleUpdateTodo, modifyTodo, modifyIsCompleted, todos, handleIsEditing]);

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={modifyIsCompleted}
          onChange={handleModifyIsCompleted}
        />
        <input
          data-testid='modify-input'
          value={modifyTodo}
          onChange={handleModifyTodo}
        />
      </label>
      <button data-testid='submit-button' onClick={handleModifySubmit}>
        제출
      </button>
      <button
        data-testid='cancel-button'
        onClick={() => handleIsEditing(todos.id)}
      >
        취소
      </button>
    </>
  );
};

export default TodoUpdateForm;
```

> `implementation`  
> page로부터 받은 props로 list 생성
> TodoList 컴포넌트에서 관리되는 isEditing state로 Todo / TodoUpdateForm 생성
>
> `reason`  
> List 에서 생성하는 Todo 컴포넌트 내부에서 todo / upddate를 구분하는 방식은 가독성을 떨어뜨린다고 판단하여
> 파일로 분리
