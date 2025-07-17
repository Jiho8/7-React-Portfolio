

## 🍅 소개

이 포트폴리오 사이트는 React.js 기반으로 개발된 저의 프론트엔드 개발 역량과 기술 스택을 시각적으로 보여주는 공간입니다. 웹 방문자에게 저에 대한 명확한 정보를 제공하고, 다양한 프로젝트를 통해 습득한 경험들을 효과적으로 전달하는 것을 목표로 합니다.

사용자 중심적 UI/UX를 위해 반응형 디자인을 적용했으며, CSS 트랜지션/애니메이션과 JavaScript를 활용해 동적인 요소를 더했습니다. 특히 토마토 심볼을 활용한 로고 애니메이션으로 사이트 진입에 재미를 더했고, 깔끔하고 간결한 UI를 위해 프로젝트 상세 팝업과 아코디언 형태의 교육 섹션을 구성했습니다.

홀로 작업을 진행하며 기획 단계부터 컴포넌트 분리, 믹스인 및 변수 활용 등 유지보수성을 고려한 개발에 힘썼으며, 이를 통해 저의 탄탄한 개발 역량을 보여드리고자 합니다.

## 🔗 배포 URL
https://cjiho.vercel.app

## 📑 프로젝트 요약

### 1. 주제

* React.js를 이용하여 제작한 프론트엔드 포트폴리오

### 2. 목표

* 프론트엔드 개발 역량 및 기술 스택 시각화
* 웹 방문자에게 명확한 정보 제공

### 3. 주요 기능

* CSS 애니메이션, JavaScript를 활용한 동적인 사이트 제공
* GNB 클릭 시 해당 섹션으로 이동
* 카드 기반 프로젝트 섹션 구성
* 기술 스택 시각화 (아이콘 및 설명)
* 아코디언 UI를 활용한 교육 섹션 상세 구성
* 반응형 UI

### 4. 주요 기술 스택

* Front-End : React

## 📆 기간 및 인원

  * 총 작업 기간 : 6일
    * 화면 설계 및 구상 기간 : 3일
    * 개발 및 테스트 기간 : 3일
   
  * 인원 : 개인 프로젝트 (1명)

## 💡 기능 구현 상세

### 1. 동적 UI 및 페이지 인터렉션
* 웹 진입 시 `IntersectionObserver`와 **CSS `@keyframes` 애니메이션**을 활용하여 로고 이미지들이 시차를 두고 동적으로 등장하도록 구현
* 스크롤 위치에 따라 메뉴바가 상단에 `sticky` 형태로 고정되고, `backdrop-filter` 효과가 적용되는 UI 구현
* **`useRef` 훅**과 **조건부 클래스 토글**을 활용하여 스크롤 이벤트에 따른 메뉴바 상태 전환을 자연스럽게 처리
* **MUI Tooltip 라이브러리**를 이용하여 탑버튼 이미지에 마우스를 올렸을 때 안내 문구를 표시하여 사용자 편의성 향상

### 2. 스크롤 스파이 및 메뉴 인디케이터
* `useEffect` 내 스크롤 이벤트 리스너를 통해 **스크롤 스파이(Scroll Spy) 기능**을 구현, 현재 뷰포트 중앙에 가장 가깝게 위치한 섹션의 메뉴를 자동으로 활성화하도록 설정
* 활성화된 메뉴에 맞춰 인디케이터(`indicator`) 요소가 해당 메뉴 버튼의 너비와 위치에 따라 **CSS `transition` 기반으로 부드럽게 이동**하는 애니메이션 구현
* 메뉴 클릭 시 `behavior: 'smooth'`로 해당 섹션으로 부드럽게 스크롤 이동. 이때, 스크롤 중에는 스크롤 스파이 기능을 일시 중지하여 사용자 클릭 동작의 우선순위 확보

### 3. AOS 모듈을 활용한 스크롤 애니메이션
* **AOS(Animate On Scroll) 라이브러리**로 각 섹션이 뷰포트에 진입할 때 동적으로 나타나는 애니메이션 구현
* `data-aos-duration`, `data-aos-delay` 속성을 활용해 애니메이션의 지속 시간 및 지연 시간을 제어하여 콘텐츠 집중도 향상

### 4. 모달 팝업을 이용한 프로젝트 상세 페이지
* 프로젝트 클릭 시 전체 페이지 이동 없이 **모달 팝업** 형태로 해당 프로젝트 상세 정보 확인 가능
* **React의 `useState` 훅**을 사용하여 팝업의 열림/닫힘 상태를 관리하고,`props`를 통해 데이터 전달
* 모달 외부 클릭 시 닫힘 동작을 구현하며 `e.stopPropagation()` 코드를 사용하여 **이벤트 버블링 중단** 처리

### 5. 구조적 데이터 및 스타일 관리
* 프로젝트, 기술 스택, 교육 등 필요 데이터를 **`.json` 파일로 분리**해 유지보수 용이성 확보
* **SCSS 변수(`$variables`) 및 믹스인(`@mixin`)** 활용으로 스타일 일관성 유지
* **module scss**를 적용하여 스타일 충돌 방지 및 컴포넌트의 캡슐화 강화
* `Intro.jsx` 내 스킬 박스 호버 시 `keyframes bounce`와 `::after` 가상 요소를 이용한 그림자 애니메이션을 적용하여 시각적 인터랙션 추가

### 6. 기술 스택 필터 기능 및 시각적 효과
* 데이터 내 타입(프론트엔드, 백엔드 등)으 기반으로 **`useState`를 활용한 필터 기능** 제공
* 필터 전환 시 인덱스 값의 변화를 감지하여 해당 기술 스택 아이콘들이 순차적으로 등장하는 **CSS 애니메이션** 적용
* **MUI Tooltip 라이브러리**를 이용하여 기술 이름 표시

## 🗂️ 폴더 구조

```
📂Jiho-Portfolio
┣ 📂portfolio                 # 천지호의 프론트엔드 포트폴리오
┃ ┣ 📂public
┃ ┃ ┣ 📂imgs                  # 아이콘, 로고 등 정적 이미지
┃ ┣ 📂src
┃ ┃ ┣ 📂assets                # 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂fonts               # 폰트
┃ ┃ ┃ ┣ 📂imgs                # 동적 이미지
┃ ┃ ┣ 📂components            # 컴포넌트 폴더
┃ ┃ ┣ 📂data                  # 교육, 프로젝트 등 데이터 폴더
┃ ┃ ┣ 📂sections              # 각 섹션 컴포넌트 및 스타일 폴더
┃ ┃ ┃ ┣ 📂Contact             # 웹 기준 마지막 섹션: 컨택
┃ ┃ ┃ ┣ 📂Education           # 웹 기준 4번째 섹션: 교육
┃ ┃ ┃ ┣ 📂Intro               # 웹 기준 1번째 섹션: 인사 및 소개
┃ ┃ ┃ ┣ 📂Projects            # 웹 기준 3번째 섹션: 프로젝트
┃ ┃ ┃ ┣ 📂TechStacks          # 웹 기준 2번째 섹션: 기술 스택
┃ ┃ ┗ 📂styles                # 공용 scss 및 믹스인, 스타일 변수
┃ ┃ ┗ 📜App.js                # 프로젝트의 전체 라우팅 및 최상위 컴포넌트
┗ ┗ README.md
```

## 💻 개발 환경

### 1. Frond-End

| 사용기술 | 설명 |Badge |
| :---:| :---: | :---: |
| **React** | **SPA기반 프레임워크** |![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)|
| **Node.js** | **JavaScript 런타임 환경 (프론트엔드 개발 및 빌드 도구 실행용)** |![nodedotjs](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)|

### 2. UI/UX 라이브러리

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **MUI** | **UI 프레임워크** |![mui](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **AOS** | **스크롤 애니메이션** |![AOS](https://img.shields.io/badge/AOS-Scroll%20Animations-4a90e2?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAAERCAYAAAAJ2bKVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4nOy9fXBkZ33n+4muVqXSVXQVSaUoQpG0ymQYD8MwDJPBOMYYx1jGGI5xeAcLCLAsYVmWoiiKoqhUiqIoluL65rIOIYQEizdDHNvHGOMejDFmYoZhPAzDMBkPE0VSFK1WkRStrkql6tu39/7xfR76SNZL9+nndJ/Tej5VXZrRy+nT5zzn9/77Pb+Gx+OpmKHxxSagCWgGOoEu87UHGAS...)|
| **Sass** | **스타일링** |![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)|

### 3. 개발 도구

|사용기술 | 설명 | Badge | 
| :---:| :---: | :---: |
| **Visual Studio Code (VS Code)** | **코드 편집기 (에디터)** |![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMyAyTDEyIDEzLjMwM0w0Ljg0IDhMMiAxMEw4Ljc3MiAxNkwyIDIyTDQuODQgMjRMMTIgMTguNzAyTDI0LjAwMyAzMEwzMCAyNy4wODdWNC45MTNMMjQuMDAzIDJaTTI0IDkuNDM0VjIyLjU2NkwxNS4yODkgMTZMMjQgOS40MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
| **GitHub** | **버전 관리** |![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| 
| **Vercel** | **서버리스 플랫폼** |![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)|
| **Figma** | **디자인 & UI/UX** |![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |

<hr>

# 개발 상세

## 📑 요약

### 컴포넌트
- **공용 컴포넌트**
  - `BasicButton.jsx` : 프로젝트 내 기본 버튼
  - `MenuBar.jsx` : 섹션 이동에 사용되는 GNB
- **Education**
  - `EducationDetails.jsx` : 교육 상세 내용
- **Intro**
  - `IntroSkill.jsx` : 핵심 역량 아이템 컴포넌트
- **Projects**
  - `ProjectsDetails.jsx` : 프로젝트 상세 정보
  - `ProjectsInfoItem.jsx` : 기간, 참여 인원 등 프로젝트 상세 정보 내 리스트
  - `ProjectsItem.jsx` : 각 프로젝트 카드 아이템
- **TechStacks**
  - `TechStacksItem.jsx` : 기술 스택 아이템 (Tooltip, Icon 포함)

### 사이트 구성
이 포트폴리오 사이트는 단일 페이지로 구성되어 있으며, GNB를 통해 다음 주요 섹션으로 부드럽게 이동할 수 있습니다. <br>

- **인사 및 소개** <br>
  간단한 자기소개와 함께 핵심 역량, 이력서 및 깃허브 링크 제공

- **기술 스택 및 도구** <br>
  다룰 수 있는 기술 스택과 개발 도구를 시각적으로 표현, 아이콘과 설명을 함께 구성

- **프로젝트** <br>
  주요 개발 프로젝트들을 카드 형태로 소개

  - Portfolio: 기술 역량과 프로젝트 경험을 담은 프론트엔드 포트폴리오
  - Doody(두디): 밸런스 게임을 중심으로 한 사용자 참여형 웹사이트
  - Monzi(먼지): 일정 관리 웹사이트
  - Ripo(리포): 디자인 문구 쇼핑몰 웹사이트
  - 떠나봅서: 제주 여행 정보 및 커뮤니티 웹사이트
  - ZFLIX: 영화 및 TV 프로그램 정보 제공 웹사이트
  - 풀무원: 풀무원 웹사이트 리뉴얼 프로젝트

- **교육** <br>
  학력 등 교육 이력 요약

- **컨택** <br>
  연락 가능한 전화번호 및 이메일 주소와 깃허브 링크 제공. 사이트 최하단에 위치하며 GNB로는 이동 불가능.

## 💥 이슈 및 해결

### 1. 메뉴바 indicator가 메인 화면에서 사라지지 않음
- 처음에는 indicator가 보이지 않지만, 다른 섹션으로 이동했다가 다시 최상단의 메인 화면으로 돌아오면 indicatior가 사라지지 않고 남아있는 문제
- **원인**: Intro 섹션이 화면에 일부라도 보이면, 스크롤 위치 기준 계산 로직에서 'Intro가 현재 섹션이다'라고 판단해 indicator가 나타나게 됨.
- **해결**: 섹션이 최소 30% 이상 화면에 보여야만 indicator가 나타나도록 코드 수정.
```
const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  const visibleRatio = visibleHeight / rect.height;

  if (visibleRatio < 0.3) return;
```

### 2. `scrollIntoView()` 사용 시 메뉴바에 섹션 내용이 가려지는 문제
- 메뉴 버튼 클릭 시 해당 섹션으로 부드럽게 이동하려고 `scrollIntoView()`를 사용하였으나, 상단에 고정된 메뉴바에 의해 섹션 내용이 일부 가려짐.
- **원인**: `scrollIntoView()`는 오프셋(메뉴바 높이 등)을 고려하지 않기 때문에, 메뉴바가 덮어버림.
- **해결**: `getBoundingClientRect().top + scrollY` 값을 이용해 직접 스크롤 위치를 계산한 뒤 `window.scrollTo({ top, behavior: 'smooth' })`를 사용해 메뉴바를 피해 정확한 위치로 이동.

### 3. 모달 팝업 overlay가 화면 전체가 아닌 특정 섹션까지만 차지함
- 프로젝트 상세 정보를 보여주는 모달 팝업의 `.overlay`가 `position: fixed`로 되어 있음에도 화면 전체가 아니라 프로젝트 섹션만큼만 오버레이됨. 그 결과 모달이 화면 중앙이 아닌 섹션 중앙에 위치하고, 레이아웃이 깨짐.
- **원인**: `AOS` 애니메이션 라이브러리를 사용할 때, 해당 섹션(section#project)에 `data-aos="..."`를 지정하면서 AOS가 자동으로 `transform` 속성을 추가함. CSS 상에서는 `transform`이 설정된 요소는 새로운 stacking context를 생성하게 되며, 그 하위 요소의 `position: fixed`는 뷰포트 기준이 아니라 해당 부모 기준으로 적용됨.
- **해결**: 
  - 모달 컴포넌트(ProjectsDetails)를 프로젝트 섹션 내부가 아니라 바깥에서 렌더링되도록 구조 변경
  - `Projects.jsx`에서 `selcted` 상태를 관리해 선택된 프로젝트 정보를 상위에서 모달로 전달
  - `.overlay`는 여전히 `position: fixed`, `width: 100vw`, `height: 100vh`로 유지되며 정상 작동
```
{openDetails && selected && (
  <ProjectsDetails 
    data={selected} 
    onClose={() => {
      setSelected(null);      // 선택 아이템 초기화
      setOpenDetails(false);  // 팝업 닫기
    }}
  />
)}
```

### 4. 로고에 적용한 rollIn 애니메이션이 시작 전에 이미 보여짐
- 로고 이미지가 화면에 진입하기도 전에 보여지고, 애니메이션 효과가 어색함
- **원인**: 애니메이션 이전에 요소가 기본적으로 렌더링되면서 `opacity`나 `visibility`가 설정되지 않음
- **해결**: `@keyframes rollIn`의 `0%` 단계에서 `visibility: hidden`, `100%`에서 `visibility: visible`을 설정하여 **초기에는 보이지 않게 처리**하고, observer가 `isIntersecting`일 때 클래스 부여로 애니메이션이 자연스럽게 실행되도록 구현
```
@keyframes rollIn {
    0% {
        visibility: 0;
        transform: translateX(100px) rotate(360deg);
    }
    100% {
        visibility: 1;
        transform: translateX(0) rotate(0deg);
    }
}
```

### 5. 기술 스택 섹션 애니메이션 문제 해결
- 섹션이 처음 렌더링될 때는 각 스택 아이템이 순차적으로 나타나는 애니메이션이 보이지 않고, 필터 버튼을 클릭하여 데이터가 변경될 때만 해당 애니메이션이 실행
- **원인**:
  - 섹션 AOS 애니메이션과 개별 아이템 CSS 애니메이션이 너무 가깝게 시작되거나 겹쳐, 순차적인 효과가 전체 섹션의 등장에 묻혀 보이지 않음
  - AOS 애니메이션과 개별 아이템 CSS 애니메이션 간의 타이밍을 setTimeout으로 조절하려 했으나, AOS의 동적인 스크롤 감지 방식과 setTimeout의 고정된 시간 기반 방식이 충돌하여 전체 페이지의 애니메이션 흐름에 혼란
- **해결**:
  - `setTimeout` 로직을 제거하고, **Intersection Observer API**를 사용하여 `TechStacks` 섹션이 뷰포트에 특정 비율로 진입하는 시점을 감지하여 적절한 시점에 개별 스택 아이템들이 렌더링되도록 `showStacks` 상태를 변경
  - `App.js` 내 `AOS.init()` 설정에서 offset 값 및 다음 섹션 AOS 애니메이션의 delay를 조절하여 자연스러운 애니메이션 흐름으로 개선