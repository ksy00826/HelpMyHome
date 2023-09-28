![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/8a83aa37-8961-4aef-944a-8dc6fa1bfaed)

# HelpMyHome
주변 건물 정보와 최근 매매 거래 내역을 보여주는 부동산 웹 프로젝트

<br>

# 목차

1. [개발 개요](#개발-개요)
2. [서비스 화면](#서비스-화면)
3. [개발 환경](#개발-환경)
4. [설계 문서](#설계-문서)
5. [팀원 소개](#팀원-소개)

<br>

# 개발 개요

많은 사이트에 부동산 정보가 흩어져있고 보기가 불편한 부분이 많다. 따라서 한 눈에 아파트 매매 정보를 볼 수 있는 "구해줘 홈" 서비스를 제작하였다.

<br>

# 서비스 화면

<br>

## 1. 메인 화면

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/b51c64a7-252a-48f6-b167-502356ac7ae4)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/a43efa10-88e8-4d16-a1db-5f3b443cbccc)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/c61ed3a4-e70f-4b1c-bf48-3134a76408ba)|
|---|---|---|
|실시간 날씨 정보&연도별 부동산 매매량|부동산 검색 바로가기|실시간 부동산뉴스|
|실시간 날씨 정보를 크롤링하여 보여주고, 연도별 부동산 매매량 정보를 그래프로 나타냅니다.|슬라이드 형식으로 부동산 이미지가 보이며, 클릭 시 부동산 검색 바로가기가 가능합니다.|실시간 부동산 뉴스를 크롤링하여 보여줍니다. 클릭 시 해당 페이지로 이동합니다.|

<br>

## 2. 회원관리

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/b52c4f2d-0a33-4b59-a0d1-e56a758dc812)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/1c5b6fe9-2063-4643-af99-3e28b1918aff)|
|---|---|
|회원가입|로그인|
|회원 정보를 입력하여 회원가입이 가능합니다.|회원가입 후 입력한 정보로 로그인이 가능합니다.|

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/036d8b02-0229-4236-ba28-e82143768c61)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/46421866-30a9-499a-834e-302f0c2b5cc5)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/e7b807a8-2b2d-479c-bf89-9b36526b9fc4)|
|---|---|---|
|회원정보조회|회원정보수정|회원탈퇴|
|로그인 후 회원정보 조회가 가능합니다.|로그인 후 회원정보 수정이 가능합니다.|로그인 후 회원 정보 조회 페이지에서 회원 탈퇴가 가능합니다.|

<br>

## 3. 부동산 게시판

### 3.1 아파트 검색

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/0bc13c6f-a2eb-4d28-83c2-858d42bb5464)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/29e1fb7f-aa0d-41d5-9a6f-f1df41dd0636)|
|---|---|
|지역별 아파트 정보 검색|아파트 키워드 검색|
|시, 구군, 동을 입력하여 지역별로 아파트 검색이 가능합니다.|아파트 이름에 대한 키워드 검색이 가능합니다.|

<br>

### 3.2 아파트 검색 결과
위와 같이 검색 수행 시 다음과 같이 검색 결과가 나타납니다.

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/7e4af916-7fa3-47ae-b77a-684bc5008ccf)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/0b2c750a-749f-4b2a-a5ba-c575c93dccf2)|
|---|---|
|지도 마커 표시|아파트 리스트 표시|
|지도에 마커로 아파트가 표시되며, 가장 첫 번째 아파트는 왼쪽에 표시됩니다.|검색된 모든 아파트의 리스트가 지도 아래에 표시됩니다.|

리스트에서 아파트 클릭 시 아파트별로 상세 정보를 볼 수 있습니다.

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/6b89482b-4d64-467e-91ce-0f4e2554fc80)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/8a402a6a-e496-480d-ac36-d5eff51819fc)|
|---|---|
|아파트별 로드뷰|아파트별 매매정보|
|해당 아파트의 로드뷰를 보여줍니다.|해당 아파트의 최근 3년 간 매매정보를 표로 보여줍니다.|

<br>

### 3.3 주변 상권 검색

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/a6e69c49-3f7f-4a72-a6d3-9536a4149f5f)|
|---|
|주변 상권 표시|
|지도의 좌측 상단에 위치하는 상권 바를 통해 주변 상권을 검색할 수 있습니다.|

<br>

### 3.4 사용자별 기능

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/15fcaef6-2d8f-45de-80fc-e0f4075fd58a)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/d9aa1ad9-c1f2-4a71-942c-602e5d51273a)|
|---|---|
|북마크 등록|북마크 보기 및 삭제|
|로그인 시 사용자별로 관심 아파트에 대해 북마크를 등록할 수 있습니다.|검색 창 옆에 존재하는 "My Bookmark"를 통해 북마크된 아파트 리스트를 확인할 수 있고, 리스트에서 북마크를 해제할 수 있습니다.|

<br>

## 4. Q&A 게시판

### 4.1 게시글 목록, 등록, 수정, 삭제
|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/bb529379-23ad-4a17-8c2c-6c267a8e44ed)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/db584d28-3a2c-4bf7-b6ac-0a6773a117f6)|
|---|---|
|게시글 목록|게시글 등록|
|Q&A 게시판에 들어가면 글 목록을 확인할 수 있습니다.|Q&A 게시판에서 게시글을 등록할 수 있습니다. |

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/6cc10bb9-6b56-42a1-8eee-e46d07660fa8)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/69548430-0709-4344-af16-e286533f1d14)|
|---|---|
|게시글 수정|게시글 삭제|
|글 상세 페이지에서 본인이 등록한 게시글을 수정할 수 있습니다. |글 상세 페이지에서 본인이 등록한 게시글을 삭제할 수 있습니다.|

<br>

### 4.2 댓글 목록, 등록, 수정, 삭제
|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/e4c6e2cc-62e9-4792-a484-c2ff56fc9b8f)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/c462ab6a-c151-43c8-a20b-0b59c1105fd2)|
|---|---|
|댓글 목록|댓글 등록|
|특정 글에 들어가면 해당 글의 댓글을 볼 수 있습니다.|댓글 목록에서 댓글을 등록할 수 있습니다. 회원인 경우 이름으로 등록되고, 비회원인 경우 Guest로 등록됩니다.|

|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/2804933f-59d7-4eec-aa5d-a6a07eb41289)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/6d7b4cd0-39ae-46e8-8e1e-928c47730528)|
|---|---|
|댓글 수정|댓글 삭제|
|본인이 작성한 댓글을 수정할 수 있습니다. 단 Guest의 댓글은 관리자만 수정이 가능합니다. |본인이 작성한 댓글을 삭제할 수 있습니다. 단 Geust의 댓글은 관리자만 삭제가 가능합니다.|

<br>

# 개발 환경
![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/90c91867-fb94-4dde-b7c4-651f02f7170b)

<br>

# 설계 문서

<br>

## 1. 화면 흐름도
![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/ce62e29c-ad03-4bb6-bf57-643214079275)

## 1.1 상세보기 - 회원관리
![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/43ea0171-3da1-40da-a4a9-41ad0933a44d)

## 1.2 상세보기 - 사용자
![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/a637b6f1-d501-4e58-a9f2-5f43bd474d42)

<br>

## 2. ERD
|아파트|회원|
|---|---|
|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/b8073add-723b-42e1-9512-f3f8caa51cf0)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/3ea7b855-1a92-42c4-a369-d4e11a374884)|

|게시판|댓글|
|---|---|
|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/97fcb6ce-9100-40e3-9be1-9b1e9fabdf45)|![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/e2c214f9-4406-4580-a11a-f605103bab3c)|



# 팀원 소개
![image](https://github.com/ksy00826/HelpMyHome/assets/76732805/36a99bf8-1051-4d22-b001-3e16ba3c1ccb)
