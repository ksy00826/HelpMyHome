<template>
	<div class="modal fade" id="login" data-bs-backdrop="static"
		data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">
						<i class="bi bi-chat-left-dots-fill text-info"> 로그인</i>
					</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>

				<!-- Modal body -->
				<div class="modal-body">
					<form action="${root }/user" method="post">
						<input type="hidden" name="cmd" value="login">
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">아이디 * :</label> <input
								type="text" class="form-control" id="loginId" name="id" v-model="loginId"/>
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">비밀번호 * :</label> <input
								type="password" class="form-control" id="loginPw"
								placeholder="영문, 숫자 포함 6자리 이상" name="pw" v-model="loginPw"/>
						</div>
						<!-- Modal footer -->
						<div class="modal-footer">
							<button type="button" id="btn-login"
								class="btn btn-primary btn-sm" @click="login()">로그인</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import http from '@/api/http';
export default {
    name: 'LoginModal',
    components: {},
    data() {
        return {
            loginId: "",
			loginPw: "",
        };
    },
    created() {},
    methods: {
		login(){
			
			http.get(`/user/${this.loginId}`)
				.then(({data}) => {
					console.log(data);

					if (data != null){
						if (data.pw == this.loginPw){
							//로그인 성공 : 세션 처리
							sessionStorage.setItem("loginUser", JSON.stringify(data));
							location.reload();
						}
						else{
							//로그인 실패 : 비밀번호 틀림
							alert("로그인 실패! 비밀번호가 틀렸습니다");
						}
						
					}
					else{
						//로그인 실패 : 회원 정보 없음
						alert("로그인 실패!");
					}
				});
		}
	},
};
</script>

<style scoped></style>