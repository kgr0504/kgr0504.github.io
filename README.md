# 랜덤툴 스튜디오

사다리타기, 돌림판, 범위 번호 뽑기를 한곳에서 사용할 수 있는 정적 웹앱입니다.

## 기능

- 사다리 개수 변경 및 참가자/결과 직접 입력
- 돌림판 항목 직접 입력
- `피자 x2`, `꽝 x5` 같은 가중치 입력
- 시작 번호부터 끝 번호까지 범위 안에서 번호 뽑기
- 한국어, 영어, 일본어, 스페인어 언어 전환
- AdSense용 `ads.txt`, 개인정보처리방침, 이용약관 포함
- 상단 메뉴로 도구별 화면 전환

## 배포

이 폴더 전체를 정적 호스팅에 올리면 됩니다.

필수 포함 파일:

- `index.html`
- `styles.css`
- `app.js`
- `ads.txt`
- `privacy.html`
- `terms.html`

## 여기서 배포하기

GitHub Pages:

```powershell
.\deploy-github-pages.ps1 -RemoteUrl https://github.com/YOUR_NAME/random-tool-studio.git
```

Node.js/npm이 설치되어 있으면 아래 스크립트로 배포할 수 있습니다.

```powershell
.\deploy-vercel.ps1
```

또는 Cloudflare Pages를 쓸 경우:

```powershell
.\deploy-cloudflare.ps1
```
