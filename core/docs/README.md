# 기능요구사항

## 공통

- [ ] `ErrorBoundary`를 사용해 선언적 에러 관리
- [ ] `Suspense`를 사용해 선언적 로딩 관리

## 회원가입

- [x] `/signup` 경로애 회원가입 페이지 개발
- [x] 페이지 안에 `이메일 input`, `비밀번호 input`, `제출 button`이 포함된 형태
- [x] `이메일 input`에 `data-testid="email-input"` 속성을 부여
  - [x] 이메일 조건: `@` 포함 (새로운 조건 추가 X)
- [x] `패스워드 input`에 `data-testid="password-input"` 속성을 부여
  - [x] 패스워드 조건: 8자 이상 (새로운 조건 추가 X)
- [x] `회원가입 button`에 `data-testid="signup-button"` 속성을 부여
  - [x] 이메일, 패스워드가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
- [x] 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동
- [x] 로컬 스토리지에 토큰이 있는 상태로 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
- [ ] 버튼을 누르면, 요청이 처리되는 동안 button `disabled` 처리

## 로그인

- [x] `/signin` 경로에 로그인 페이지 개발
- [x] 페이지 안에 `이메일 input`, `비밀번호 input`, `제출 button`이 포함된 형태
- [x] `이메일 input`에 `data-testid="email-input"` 속성을 부여
  - [x] 이메일 조건: `@` 포함 (새로운 조건 추가 X)
- [x] `패스워드 input`에 `data-testid="password-input"` 속성을 부여
  - [x] 패스워드 조건: 8자 이상 (새로운 조건 추가 X)
- [x] `회원가입 button`에 `data-testid="signin-button"` 속성을 부여
  - [x] 이메일, 패스워드가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
- [x] 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
  - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
  - [x] 응답받은 JWT는 로컬 스토리지에 저장
- [x] 로컬 스토리지에 토큰이 있는 상태로 `/signin` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
- [ ] 버튼을 누르면, 요청이 처리되는 동안 button `disabled` 처리

## 투두 리스트

- [x] `/todo` 경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 구현
- [x] 목록에서는 TODO의 `내용`과 `완료 여부`를 표시
- [x] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현
- [x] TODO는 `<li>` tag를 이용
- [x] 투두 리스트 페이지에 `새로운 TODO를 입력할 수 있는 input`과 `추가 button` 구현
  - [x] TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여
  - [x] TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여
- [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 구현
- [ ] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보이도록 구현
- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 구현
- [x] TODO 우측에 `수정 버튼`과 `삭제 버튼` 구현
  - [x] 수정 버튼에는 `data-testid="modify-button"` 속성을 부여
  - [x] 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여
- [x] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 구현
- [ ] 투두 리스트의 수정 기능을 구현
  - [ ] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 구현
  - [ ] 수정모드에서는 TODO의 내용을 변경할 수 있도록 구현
  - [ ] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경
  - [ ] 수정 input창에는 `data-testid="modify-input"` 속성을 부여
  - [ ] 수정모드에서는 TODO의 우측에 `제출 버튼`과 `취소 버튼`이 표시
    - [ ] 제출 버튼에는 `data-testid="submit-button"` 속성을 부여
    - [ ] 취소 버튼에는 `data-testid="cancel-button"` 속성을 부여
  - [ ] 제출 버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 되도록 구현
  - [ ] 취소 버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화
