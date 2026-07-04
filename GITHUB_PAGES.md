# GitHub Pages 배포 방법

이 프로젝트는 GitHub Pages로 무료 배포할 수 있습니다.

## 1. GitHub에서 빈 저장소 만들기

GitHub에서 새 repository를 만듭니다.

추천 이름:

```text
random-tool-studio
```

중요:

- README 추가하지 않기
- .gitignore 추가하지 않기
- License 추가하지 않기

빈 저장소를 만들면 아래처럼 주소가 나옵니다.

```text
https://github.com/YOUR_NAME/random-tool-studio.git
```

## 2. 여기서 배포 실행

이 폴더에서 아래 명령을 실행합니다.

```powershell
.\deploy-github-pages.ps1 -RemoteUrl https://github.com/YOUR_NAME/random-tool-studio.git
```

이미 remote가 설정된 뒤에는 다음부터 이렇게만 실행하면 됩니다.

```powershell
.\deploy-github-pages.ps1
```

## 3. GitHub Pages 확인

GitHub repository에서:

```text
Settings > Pages
```

Source가 `GitHub Actions`로 되어 있는지 확인합니다.

배포가 끝나면 주소는 보통 아래 형태입니다.

```text
https://YOUR_NAME.github.io/random-tool-studio/
```

## AdSense 확인 주소

배포 뒤 아래 주소가 열려야 합니다.

```text
https://YOUR_NAME.github.io/random-tool-studio/ads.txt
https://YOUR_NAME.github.io/random-tool-studio/privacy.html
https://YOUR_NAME.github.io/random-tool-studio/terms.html
```
