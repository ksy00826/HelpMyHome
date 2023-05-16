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
    <link href="css/styles.css" rel="stylesheet" />
    <link rel="shortcut icon" href="./assets/img/favicon.ico" />
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous" />
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />

    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" >
      <div class="container">
        <a class="navbar-brand" href="#page-top">구해줘 Home!!!</a>
        <button class="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          Menu <i class="fas fa-bars ms-1"></i>
        </button>

        <div id="noUserStorage" style="display:">
          <div class="collapse navbar-collapse">
            <ul id="state_logout"
              class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item"><a class="nav-link" href="#"
                data-bs-toggle="modal" data-bs-target="#pollModal">회원가입</a></li>
              <li class="nav-item"><a class="nav-link" href="#"
                data-bs-toggle="modal" data-bs-target="#login">로그인</a></li>
              <li class="nav-item"><a class="nav-link" href="#"
                data-bs-toggle="modal" data-bs-target="#findPw">비밀번호찾기</a></li>
            </ul>
          </div>
        </div>
        <div id="UserStorage" style="display: none">
          <div class="collapse navbar-collapse" >
            <ul id="state_login"
              class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item"><a class="nav-link" href="#" onclick="userView()">회원정보</a></li>
              <li class="nav-item"><a class="nav-link"
                href="javascript:logout();">로그아웃</a></li>
              
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
  </div>

</template>


<script>
export default {
  name: "TheHeader",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
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

