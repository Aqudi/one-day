# 하루살이국대 팀 Repository

## Git hook 설치

```shell
pip install pre-commit
pre-commit install
```

## 파이썬 프로젝트 준비

### 가상환경 생성 및 패키지 설치

```shell
cd backend


# 가상환경 만들기
python -m venv venv

# Windows only
./venv/Scripts/activate

# Mac/Linux only
source venv/bin/activate

# 패키지 설치
pip install -r requirements.txt
```

## 자바스크립트 프로젝트 준비

### NodeJS 설치

https://nodejs.org/ko/

### 프로젝트 Init (처음 시작할 때만 필요합니다.)

```shell
cd one-day
npm install -g @ionic/cli
ionic start --type=react
```

### 패키지 설치

```shell
cd one-day
npm i
```

### 실행

```shell
cd one-day
npm run start
```
