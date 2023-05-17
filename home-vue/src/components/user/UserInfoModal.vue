<template>
    <!-- 회원정보 modal start -->
        <div>
        <div class="modal fade" id="info" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">
                            <i class="bi bi-chat-left-dots-fill text-info"> 회원정보</i>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body : 정보만 출력 -->
                    <div class="modal-body" id="userInfoDiv">
                        <form action="">
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">아이디 * :</label>
                                <input id="infoId" type="text" class="form-control" readonly="readonly"/>
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">비밀번호 * :</label>
                                <input id="infoPw" type="text" class="form-control" readonly="readonly"/>
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">이름 * :</label>
                                <input id="infoName" type="text" class="form-control" readonly="readonly"/>
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">주소 * :</label>
                                <input id="infoAddr" type="text" class="form-control" readonly="readonly"/>
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">전화번호 * :</label>
                                <input id="infoPhone" type="text" class="form-control" readonly="readonly"/>
                            </div>
                        </form>
                        
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" id="btn-info-ok" class="btn btn-primary btn-sm">확인</button>
                                
                            <button type="button" id="btn-info-go-update" class="btn btn-primary btn-sm">수정</button>
        
                            <button type="button" id="btn-info-out" class="btn btn-primary btn-sm">탈퇴</button>
                        </div>
                    </div>
                    <!-- Modal body : 수정 가능한 유저 정보 -->
                    <div class="modal-body" style="display: none;" id="userInfoUpdate">
                        <form action="${root }/user" method="post">
                            <input type="hidden" name="cmd" value="updateInfo">
                            
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">아이디 * :</label> <input
                                    type="text" class="form-control" id="updateId" name="signId" readonly="readonly"/>
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">비밀번호 * :</label> <input
                                    type="password" class="form-control" id="updatePw"
                                    placeholder="영문, 숫자 포함 6자리 이상" name="signPw"/>
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">이름 * :</label> <input
                                    type="text" class="form-control" id="updateName"
                                    placeholder="User name" name="signName" />
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">주소 * :</label> <input
                                    type="text" class="form-control" id="updateAddr"
                                    placeholder="Address" name="signAddr" />
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-patch-question" style="color: rgb(121, 2, 119)"></i>
                                <label for="question" class="form-label">전화번호 * :</label> <input
                                    type="text" class="form-control" id="updatePhone"
                                    placeholder="010-xxxx-xxxx" name="signPhone" />
                            </div>

                            <div class="modal-footer">
                                <button type="button" id="btn-info-update"
                                    class="btn btn-primary btn-sm">수정</button>
                                <button type="button" id="btn-info-cancel"
                                    class="btn btn-primary btn-sm">취소</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <user-info-update-modal></user-info-update-modal>
    </div>
    
</template>

<script>
import UserInfoUpdateModal from './UserInfoUpdateModal.vue';

export default {
    name: 'UserInfoModal',
    components: {
        UserInfoUpdateModal,
    },
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