<template>
    	<!-- 회원정보 update start -->
	<div class="modal fade" id="updateInfo" data-bs-backdrop="static"
		data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">
						<i class="bi bi-chat-left-dots-fill text-info"> 회원정보 수정</i>
					</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>

				<!-- Modal body -->
				<div class="modal-body">
					<form action="${root }/user" method="post">
						<input type="hidden" name="cmd" value="updateInfo">
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">아이디 * :</label> <input
								type="text" class="form-control" id="signId" name="signId" value="${userInfo.id }" />
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">비밀번호 * :</label> <input
								type="password" class="form-control" id="signPw"
								placeholder="영문, 숫자 포함 6자리 이상" name="signPw" value="${userInfo.pw }" />
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">이름 * :</label> <input
								type="text" class="form-control" id="signName"
								placeholder="User name" name="signName" value="${userInfo.name }"/>
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">주소 * :</label> <input
								type="text" class="form-control" id="signAddr"
								placeholder="Address" name="signAddr" value="${userInfo.addr }"/>
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">전화번호 * :</label> <input
								type="text" class="form-control" id="signPhone"
								placeholder="010-xxxx-xxxx" name="signPhone" value="${userInfo.phone }"/>
						</div>

						<div class="modal-footer">
							<button type="submit" id="btn-info-create"
								class="btn btn-primary btn-sm">수정</button>
						</div>
					</form>
				</div>
				<!-- Modal footer -->

			</div>
		</div>
	</div>
	<!-- 회원정보 update end -->
</template>

<script>
export default {
    name: 'UserInfoUpdateModal',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() {},
    methods: {},
};
</script>

<style scoped></style>