<template>
  <div>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <!-- Font Awesome icons (free version)-->
    <!-- <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"
      crossorigin="anonymous"></script> -->
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet" type="text/css" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
      rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <!-- <link href="@/assets/css/styles.css" rel="stylesheet" /> -->
    <!-- <link rel="shortcut icon" href="./assets/img/favicon.ico" />
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous" />
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" /> -->
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    
    
    <!--네비게이션-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" >
      <div class="container">
        <a class="navbar-brand"><router-link :to="{name : 'main'}" class="link">구해줘 HOME</router-link></a>
        
        <button class="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          Menu <i class="fas fa-bars ms-1"></i>
        </button>

        <div id="noUserStorage" style="display:">
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul id="state_logout"
              class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <!--부동산 정보 및 게시판 라우터 링크-->
              <li class="nav-link">
                <router-link :to="{name : 'house'}" class="link">부동산</router-link>
              </li>
              <li class="nav-link">
                <router-link :to="{name : 'board'}" class="link">게시판</router-link>
              </li>
              
              <!--회원 정보-->
              <li class="nav-item"><a class="nav-link" href="#"
                data-toggle="modal" data-target="#userInModal">회원가입</a></li>
              <li class="nav-item"><a class="nav-link" href="#"
                data-toggle="modal" data-target="#login">로그인</a></li>
              <li class="nav-item"><a class="nav-link" href="#"
                data-toggle="modal" data-target="#findPw">비밀번호찾기</a></li>
            </ul>
          </div>
        </div>

        <div id="UserStorage" style="display: none">
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul id="state_login"
              class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <!--부동산 정보 및 게시판 라우터 링크-->
              <li class="nav-link">
                <router-link :to="{name : 'house'}" class="link">부동산</router-link>
              </li>
              <li class="nav-link">
                <router-link :to="{name : 'board'}" class="link">게시판</router-link>
              </li>
              
              <!--회원 정보-->
              <li class="nav-item"><a class="nav-link" href="#"
                data-toggle="modal" data-target="#info">회원정보</a></li>
              <li class="nav-item"><a class="nav-link" href="#" @click="logout()">로그아웃</a></li>
              
               <!-- 관리자 기능
              <li class="nav-item"><a class="nav-link"
                href="${root}/user?cmd=goAdminPage">회원정보관리</a></li>
              <li class="nav-item"><a class="nav-link"
                href="${root}/home?cmd=goAdminPage">부동산정보관리</a></li>  -->
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
    
    <!-- Masthead-->
    <header class="masthead">
      <div class="container">
        <div class="masthead-subheading">구해줘 Home</div>
        <div class="masthead-heading text-uppercase">우리를 위한 집</div>
        <a class="btn btn-primary btn-xl text-uppercase" href="#services">SERVICE </a>
    
      </div>
    </header>

    <!--modal-->
    <login-modal></login-modal>
    <user-in-modal></user-in-modal>
    <user-password-find-modal></user-password-find-modal>
    <user-info-modal></user-info-modal>
  </div>

</template>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
<script>
import LoginModal from "@/components/user/LoginModal"
import UserInModal from '@/components/user/UserInModal.vue';
import UserPasswordFindModal from '../user/UserPasswordFindModal.vue';
import UserInfoModal from '../user/UserInfoModal.vue';
// import * as bootstrap from 'bootstrap';
// import $ from 'jquery';

export default {
  name: "TheHeader",
  components: {
    LoginModal,
    UserInModal,
    UserPasswordFindModal,
    UserInfoModal,
  },
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    //상단바
    let loginUser = sessionStorage.getItem("loginUser");
		if (loginUser == null){
      console.log(loginUser)
			this.showNoUserStorage();
		}
		else{
      console.log(loginUser)
			this.showUserStorage();
		}
  },
  methods: {
    showNoUserStorage(){
			document.querySelector("#noUserStorage").setAttribute("style", "display: ;");
			document.querySelector("#UserStorage").setAttribute("style", "display: none;");
		},
					
		showUserStorage(){
			document.querySelector("#noUserStorage").setAttribute("style", "display: none ;");
			document.querySelector("#UserStorage").setAttribute("style", "display: ;");
		},
    logout() {
			sessionStorage.clear();
			location.reload();
		},
  },
};
</script>


<style scoped>

header.masthead {
  padding-top: 10.5rem;
  padding-bottom: 6rem;
  text-align: center;
  color: #fff;
  background-image: url("@/assets/header-bg.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}
</style>

