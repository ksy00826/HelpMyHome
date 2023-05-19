<template>
  <div
    class="modal fade"
    id="login"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div
        class="modal-content"
        style="
          border-radius: 30px;
          box-shadow: 0px 0px 20px 0px rgb(240, 240, 240);
        ">
        <!-- Modal Header -->
        <!-- <div class="modal-header">
          <h4 class="modal-title">
            <i class="bi bi-chat-left-dots-fill text-info"> 로그인</i>
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"></button>
        </div> -->

        <!-- Modal body -->
        <section>
          <div class="">
            <h2>로그인</h2>
          </div>
        </section>
        <!-- ##### Breadcumb Area End ##### -->

        <!-- ##### Login Area Start ##### -->
        <!-- <section class="login-area section-padding-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-8">
                <div class="login-content">
                  <h3>Welcome Back</h3>
                  
                  <div class="login-form">
                    <form action="_login.php" method="post">
                      <div class="form-group">
                        <label for="exampleInputEmail1"
                          >이메일 주소를 입력해주세요.</label
                        >
                        <input
                          name="id"
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter E-mail" />
                        <small id="emailHelp" class="form-text text-muted"
                          ><i class="fa fa-lock mr-2"></i>We'll never share your
                          email with anyone else.</small
                        >
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1"
                          >비밀번호를 입력해주세요.</label
                        >
                        <input
                          name="pw"
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password" />
                      </div>
                      <button type="submit" class="btn oneMusic-btn mt-30">
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> -->
        <div class="modal-body">
          <form action="${root }/user" method="post">
            <input type="hidden" name="cmd" value="login" />
            <div class="mb-3">
              <i
                class="bi bi-patch-question"
                style="color: rgb(121, 2, 119)"></i>
              <label for="question" class="form-label" style=""
                >아이디 * :</label
              >
              <input
                type="text"
                class="form-control"
                id="loginId"
                name="id"
                v-model="loginId" />
            </div>
            <div class="mb-3">
              <i
                class="bi bi-patch-question"
                style="color: rgb(121, 2, 119)"></i>
              <label for="question" class="form-label">비밀번호 * :</label>
              <input
                type="password"
                class="form-control"
                id="loginPw"
                placeholder="영문, 숫자 포함 6자리 이상"
                name="pw"
                v-model="loginPw" />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                id="btn-login"
                class="btn btn-primary btn-sm"
                @click="login()">
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  name: "LoginModal",
  components: {},
  data() {
    return {
      loginId: "",
      loginPw: "",
    };
  },
  created() {},
  methods: {
    login() {
      http.get(`/user/${this.loginId}`).then(({ data }) => {
        console.log(data);

        if (data != null) {
          if (data.pw == this.loginPw) {
            //로그인 성공 : 세션 처리
            sessionStorage.setItem("loginUser", JSON.stringify(data));
            location.reload();
          } else {
            //로그인 실패 : 비밀번호 틀림
            alert("로그인 실패! 비밀번호가 틀렸습니다");
          }
        } else {
          //로그인 실패 : 회원 정보 없음
          alert("로그인 실패!");
        }
      });
    },
  },
};
</script>

<style scoped></style>
