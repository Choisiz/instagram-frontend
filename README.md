# 프로젝트명: 인스타그램(pc)

## :link: SITE LINK

### https://instagramc.netlify.app/#/

본 사이트를 이용하기 위해서는 회원가입을 하고 검색란에 CKY를 팔로잉하시면 됩니다.
무료서버로 운영되기에 첫 로딩시 다소 시간이 소요 될 수있습니다.

## :muscle: STACK

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

> React를 사용한 프론트 엔드 기능구현

> Styled-components를 사용한 스타일링

> GraphQL, Apollo,Prisma를 사용한 백엔드 구현

> JWT, Passport를 사용한 인증 기능구현

> heroku, netlify를 사용한 호스팅

## :large_blue_circle: 기능

✅JWT,Passport를 통한 로그인,회원가입
✅Local Storage저장으로 접속시 마다 로그인 불필요
✅작성된 포스터 게시물 보기
✅팔로잉한 유저의 포스터 게시물 보기
✅좋아요하기, 좋아요 카운트
✅댓글보기 및 작성(Modal)
✅회원검색 및 게시물 검색
✅프로필 보기
✅팔로잉, 팔로우하기
✅heroku, netlify를 통한 배포

## :red_circle: PRIVIEW

![img.gif](readmeGif/gif1.gif)
![img.gif](readmeGif/gif2.gif)
![img.gif](readmeGif/gif3.gif)

## :large_blue_circle: 설명

```
인스타그램 PC 웹사이트 입니다. 기본적으로 실제 인스타PC버전과 유사합니다.
회원가입은 입력한 해당 메일로 랜덤한 비밀번호가 발송되며,
회원가입후 인증여부를 거쳐 로그인을 하게 됩니다. 이후 로그인의 정보는 저장됩니다.
PC버전과 동일하게 웹사이트에서는 기본적으로 포스트를 작성 할 수 없습니다.
팔로잉과 팔로워를 할수 있으며, 여부에 따라서 해당 유저의 포스트를 스크롤형태로
열람가능 하게 하였습니다.
좋아요 또한 구현하여 카운트 횟수가 증가하게 하였습니다.
댓글 기능 또한 구현하여 해당 댓글의 숫자와 댓글을 클릭시, 모달창을 통하여
해당 포스트의 내용과, 댓글을 볼 수 있습니다.
유저의 아바타, 혹은 이름을 클릭하여 해당유저의 포스터들을 열람하실 수 있습니다.
전체적으로 구성은 React로 구현하였으며, Apollo GraphQL을 사용하여, 백엔드 서버와
DB를 구현하였습니다.
배포는 프론트정보는 netlify를 통해서 구현하였고, 최종적으로 heroku를 통해서 빌드 하였습니다.
```
