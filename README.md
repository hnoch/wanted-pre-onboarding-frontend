# wanted-pre-onboarding-frontend

## 사전과제 - Todo List


### 🙋🏻‍♂️ 지원자의 성명

  - 황현호

### 📚 프로젝트 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

### 📦 주요 기능

#### API 주소
  - https://www.pre-onboarding-selection-task.shop/

#### Auth
  - 로그인  > SignUp(POST) `/auth/signup`
  - 회원가입 > SignIn(POST) `/auth/signin`
  
#### Todo
  - Todo 추가 > createTodo(POST) `/todos`
  - Todo 조회 > getTodos(GET) `/todos`
  - Todo 수정 > updateTodo(UPDATE) `/todos`
  - Todo 삭제 > deleteTodo(DELETE) `/todos`


### 🌳 디렉토리

```bash
├── App.css
├── App.js
├── apis
│   ├── auth.js
│   └── todo.js
├── components
│   ├── TodoItem.js
│   └── common.js
├── index.css
├── index.js
├── libs
│   └── cmnAxios.js
└── pages
    ├── Signin.js
    ├── Signup.js
    └── TodoList.js
``` 

### 🏃🏻‍♂️ 프로젝트의 실행 방법

#### ENV
  - Node v20.5.0
  - npm v8.19.1
#### Frontend
  - `npm install & npm start`

### 🎥 데모 영상

<table>
  <tr>
    <td><span>로그인 & 회원가입</span></td>
    <td><span>Todo List - 추가 & 수정 & 삭제</span></td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/hnoch/wanted-pre-onboarding-frontend/assets/53362953/625a0056-5dd5-4110-b2b4-17187b747160" width="400" height="700"/>
    </td>
    <td>
      <img src="https://github.com/hnoch/wanted-pre-onboarding-frontend/assets/53362953/9fcb7e2a-9384-482d-81cc-a4089b9cc7d6" width="400" height="700"/>
    </td>
  </tr>
</table>


### 📃 배포 사이트
[과제 데모 배포사이트](https://wanted-pre-onboarding-frontend-chi-ten.vercel.app/)

