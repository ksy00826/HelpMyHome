<template>
<!-- 비밀번호찾기 modal start -->
<div class="modal fade" id="findPw" data-bs-backdrop="static"
		data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">
						<i class="bi bi-chat-left-dots-fill text-info"> 비밀번호찾기</i>
					</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>

				<!-- Modal body -->
				<div class="modal-body">
					<form action="${root }/user" method="post">
						<input type="hidden" name="cmd" value="findPw">
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">아이디 * :</label> <input
								type="text" class="form-control" name="signId" />
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">이름 * :</label> <input
								type="text" class="form-control"
								placeholder="User name" name="signName" />
						</div>
						<div class="mb-3">
							<i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
							<label for="question" class="form-label">전화번호 * :</label> <input
								type="text" class="form-control"
								placeholder="010-xxxx-xxxx" name="signPhone" />
						</div>

						<div class="modal-footer">
							<button type="submit" id="btn-info-search"
								class="btn btn-primary btn-sm">찾기</button>
						</div>
					</form>
				</div>
				<!-- Modal footer -->

			</div>
		</div>
	</div>
	<!-- 비밀번호찾기 modal end -->
</template>

<script>
export default {
    name: 'UserPasswordFindModal',
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