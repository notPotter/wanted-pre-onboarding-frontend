# 기능요구사항

## 회원가입

- [ ] `/signup` 경로애 회원가입 페이지 개발
- [ ] 페이지 안에 `이메일 input`, `비밀번호 input`, `제출 button`이 포함된 형태
- [ ] `이메일 input`에 `data-testid="email-input"` 속성을 부여
  - [ ] 이메일 조건: `@` 포함 (새로운 조건 추가 X)
- [ ] `패스워드 input`에 `data-testid="password-input"` 속성을 부여
  - [ ] 패스워드 조건: 8자 이상 (새로운 조건 추가 X)
- [ ] `회원가입 button`에 `data-testid="signup-button"` 속성을 부여
  - [ ] 이메일, 패스워드가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
- [ ] 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동
- [ ] 로컬 스토리지에 토큰이 있는 상태로 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트

## 로그인

- [ ] `signin` 경로에 로그인 페이지 개발
- [ ] 페이지 안에 `이메일 input`, `비밀번호 input`, `제출 button`이 포함된 형태
- [ ] `이메일 input`에 `data-testid="email-input"` 속성을 부여
  - [ ] 이메일 조건: `@` 포함 (새로운 조건 추가 X)
- [ ] `패스워드 input`에 `data-testid="password-input"` 속성을 부여
  - [ ] 패스워드 조건: 8자 이상 (새로운 조건 추가 X)
- [ ] `회원가입 button`에 `data-testid="signin-button"` 속성을 부여
  - [ ] 이메일, 패스워드가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
- [ ] 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
  - [ ] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
  - [ ] 응답받은 JWT는 로컬 스토리지에 저장
- [ ] 로컬 스토리지에 토큰이 있는 상태로 `/signin` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
