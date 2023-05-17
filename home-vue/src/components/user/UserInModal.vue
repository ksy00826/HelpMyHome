<template>
	<!-- 회원가입 modal start -->
	<div class="modal fade" id="userInModal" data-bs-backdrop="static"
		data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">
						<i class="bi bi-chat-left-dots-fill text-info"> 회원가입</i>
					</h4>
					<!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button> -->
				</div>

				<!-- Modal body -->
				<div class="modal-body">
					<form action="${root }/user" method="post">
						<input type="hidden" name="cmd" value="signIn">
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">아이디 * :</label> <input
								type="text" class="form-control" id="signId" name="signId" v-model="signId"/>
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">비밀번호 * :</label> <input
								type="password" class="form-control" id="signPw"
								placeholder="영문, 숫자 포함 6자리 이상" name="signPw" v-model="signPw"/>
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">이름 * :</label> <input
								type="text" class="form-control" id="signName"
								placeholder="User name" name="signName" v-model="signName"/>
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">주소 * :</label> <input
								type="text" class="form-control" id="signAddr"
								placeholder="Address" name="signAddr" v-model="signAddr"/>
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">전화번호 * :</label> <input
								type="text" class="form-control" id="signPhone"
								placeholder="010-xxxx-xxxx" name="signPhone" v-model="signPhone"/>
						</div>

						<div class="modal-footer">
							<button type="button" id="btn-info-create"
								class="btn btn-primary btn-sm" @click="registUser()">등록</button>
						</div>
					</form>
				</div>
				<!-- Modal footer -->

			</div>
		</div>
	</div>
	<!-- 회원가입 modal end -->
</template>

<script>
import http from '@/api/http';

export default {
    name: 'UserInModal',
    components: {},
    data() {
        return {
            signId: "",
			signPw: "",
			signName: "",
			signAddr: "",
			signPhone: "",
        };
    },
    created() {},
    methods: {
		registUser(){
			http.post(`/user`, {
				id: this.signId,
				pw: this.signPw,
				name: this.signName,
				addr: this.signAddr,
				phone: this.signPhone,
			})
				.then((response) => {
					switch (response.status) {
						case 200:
							return true;
						case 204:
							return false;
						case 500:
							throw new Error("회원가입 실패!!");
					}
				})
				.then((data) => {
					if (data){
						alert("회원가입 성공!");
						location.reload();
					}
					else{
						alert("회원가입 실패!");
					}
				});
		}
	},
};
</script>

<style scoped></style>