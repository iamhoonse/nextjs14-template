# 0. Next.js 템플릿
이 프로젝트는 개발에 필요한 일부 과정들에 대한 자동화 설정이 추가된 Next.js 템플릿입니다.  
새로운 프론트엔드 프로젝트를 시작할 때 이 템플릿을 사용하세요.  
베이스는 Next.js 기본 템플릿이지만, 다양한 3rd-party 도구들을 추가하였습니다.

# 1. 사용하기
이 프로젝트를 출발점으로 새 프론트엔드 프로젝트를 시작하기 위한 방법은 아래와 같습니다.

## (1) 템플릿으로 새 프로젝트 생성하기

### 1) 절차
GitHub 공식 문서에서 안내하는 절차는 다음 페이지에 소개되어 있습니다.  
[-> creating-a-repository-from-a-template](https://docs.github.com/ko/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)  
위 문서에서 안내하는 절차에 따라 본 템플릿을 이용한 새 프로젝트를 생성하여 사용합니다.

![use-this-template.png](assets/readme/use-this-template.png)

## (2) 프로젝트 API 키 세팅하기 (WIP)

### 1) 왜 필요한가요?
GitHub CI/CD 파이프라인 중 "릴리즈 자동화"를 실행하는 `semantic-release` 도구가 이를 필요로 합니다.  
CI/CD 파이프라인 내에서 "릴리즈 자동화" 단계가 정상적으로 실행되기 위해서는 여기서 설명하는 세팅 절차를 진행해 주어야 합니다.

### 2) 세팅 방법
1. 프로젝트 좌측의 `Setting` > `Access Token` 메뉴로 들어갑니다.
2. `GITLAB_TOKEN` 이라는 이름으로 (`api`, `write_repository`) 2개의 권한이 부여된 토큰을 생성합니다.
3. 토큰을 복사해 둡니다.
4. 프로젝트 좌측의 `Setting` > `CI/CD` 메뉴로 들어갑니다.
5. `Variables` 에 `GITLAB_TOKEN` 이라는 키를 추가합니다. 값은 앞서 복사한 토큰을 붙여 넣습니다.


# 2. 개발 지원 기능

### 1) 코드 규약 검사 및 교정
`ESLint` 와 `Prettier` 가 적용되어 있고  
`husky` 와 `lint-staged` 도구를 이용하여 커밋 단계에서 규약을 검사하고 자동으로 교정해 줍니다.  
물론 커밋 단계에서 알아서 잡아주기는 하지만,  
로컬 IDE 에서 관련 플러그인과 통합하여 개발 과정에서도 규약을 지켜가며 코드를 작성해 주세요.

### 2) 주석 작성 의무화 및 규약 검사
`ESLint` 에 `eslint-plugin-tsdoc` 과 `eslint-plugin-tsdoc-require` 을 적용하여  
모듈 코드에서 export 하는 객체에 대한 주석 작성을 의무화하였고,  
작성된 주석에 대한 규약 검사 기능을 추가하였습니다.

### 3) 커밋 메세지 규약 검사 및 교정
`husky` 와 `commitlint` 도구를 이용하여 커밋 직전에 규약을 검사합니다.  
검사 결과 정해진 양식에 위배되는 사항이 발견될 경우, 커밋이 되지 않습니다.  
커밋을 하기 위해서는 양식을 준수하여 다시 작성해야 합니다.

### 4) Merge Request 및 Issue 작성 양식 제공
.gitlab 디렉토리 아래 기본 작성 양식을 정의하는 .md 확장자 파일들이 들어 있습니다.  
GitLab 은 이 디렉토리 내에 있는 .md 파일들을 인지합니다.  
MR 및 Issue 작성 화면에서 Description 을 기입할 때 이 디렉토리 내에 있는 특정 템플릿을 선택하여 해당 템플릿 양식에 맞춰 내용을 작성할 수 있습니다.

### 5) GitLab CI/CD 파이프라인 실행 설정
GitLab 은 CI/CD 파이프라인 실행 기능을 지원합니다.  
파이프라인에서 실행할 작업은 `.gitlab-ci.yml` 파일에 작성합니다.  
이 프로젝트에서는 배포 단계에서 실행되어야 하는 최소한의 작업 단계를 정의하였습니다.   
추가로 필요한 실행 단계들이 있다면 제공되는 파일을 베이스로 추가 정의하여 사용하면 됩니다.

### 6) 단위 테스트 도구
단위 테스트를 실행하기 위한 `Jest` 도구를 추가하였습니다.
* 로컬 개발 환경에서의 실시간 개발을 위한 watch 모드 지원은 물론,
* CI 환경에서의 배포 파이프라인의 일부로서 전체 테스트 케이스들을 실행하는 모드도 지원합니다.

### 7) 코드 문서화 도구
TypeScript 코드에 작성된 주석들을 html 형식 문서로 작성해 주는 기능을 지원합니다.
해당 기능은 프로젝트에 추가된 `TypeDoc` 도구를 이용합니다.

### 8) 컴포넌트 문서화 도구
작성된 컴포넌트의 스펙에 대한 인터랙티브 문서화 기능을 지원합니다.
해당 기능은 프로젝트에 추가된 `Storybook` 을 이용합니다. 

### 9) 국제화(i18n)
페이지에 표시할 메세지들을 구조적으로 관리하기 위한 `i18next` 도구를 지원합니다.
* 각 언어별로, 메세지 내용 카테고리별로, 메세지를 템플릿화하여 관리할 수 있으며,
* SSR, CSR 양쪽 환경을 모두 지원하도록 각 환경에서 사용될 i18next 인스턴스가 있습니다.

# 3. 실행 환경

## (1) 런타임 (v18.19.0)
본 프로젝트 빌드는 Node.js `v18.19.0` 런타임을 이용하였습니다.  
각 환경별 런타임 버전은 아래 파일에 지정되어 있습니다.   
본 템플릿을 이용하여 생성된 프로젝트 또한 마찬가지로 해당 버전의 런타임에서 실행하여야 합니다. 
* 개발 환경 : [.nvmrc](./.nvmrc)

`nvm` 을 이용하는 경우 아래 명령어를 통해 해당 버전 런타임 사용을 활성화할 수 있습니다.
```shell
nvm use
```

## (2) 패키지 관리자 
본 프로젝트 빌드에는 [pnpm](https://pnpm.io/ko/) 패키지 관리자를 사용하였습니다.

### 0) pnpm 사용 설정하기
아래 명령어를 통해 pnpm 사용이 활성화 됩니다.
```shell
corepack enable

# pnpm 활성화 확인
pnpm --version # 8.14.1
```
### 1) 의존성 설치하기
```shell
pnpm install
```

## (3) npm 명령어 일람
### 1) 개발 서버 구동
```shell
pnpm run dev
```
### 2) 프로덕션 서버 빌드
```shell
pnpm run build
```
### 3) 프로덕션 서버 기동
```shell
pnpm start
```
### 4) Linter 검사 실행
```shell
pnpm run lint
```
### 5) git hook 설치하기
```shell
# git hook 에 설치할 스크립트에 실행(execute) 권한이 없으면 hook 이 트리거 되어도 동작하지 않습니다.
chmod +x .husky/* 

# husky 를 이용하여 git hook 을 설치합니다.
pnpm run prepare
```
### 6) 단위 테스트 실행
```shell
# CI 환경 파이프라인에서 실행 
pnpm run test

# 개발 환경 코드 수정 사항 실시간 반영하는 watch 모드 실행
pnpm run test:watch
```
### 7) 통합 테스트 실행
```shell
# CI 환경 파이프라인에서 실행
pnpm run e2e:headless

# 개발 환경 코드 수정 사항 실시간 반영하는 서버 실행
pnpm run e2e
```
### 8) 코드 내 주석들을 html 형식 문서로 내보내기
```shell
pnpm run typedoc
```
### 9) Storybook 실행하기
```shell
# html 형식 문서로 내보내기
pnpm run build-storybook 

# 개발 환경 코드 수정 사항 실시간 반영하는 서버 실행
pnpm run storybook
```
