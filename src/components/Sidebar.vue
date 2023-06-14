<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <div class="sidebar-contents">
                <div id="sidebar-menu" class="sidebar-menu">
                    <div class="mobile-show">
                        <div class="offcanvas-menu">
                            <div class="user-info align-center bg-theme text-center">
                                <span class="lnr lnr-cross  text-white" id="mobile_btn_close">X</span>
                                <a href="javascript:void(0)" class="d-block menu-style text-white">
                                    <div class="user-avatar d-inline-block mr-3">
                                        <img src="assets/img/profiles/avatar-18.jpg" alt="user avatar"
                                            class="rounded-circle" width="50">
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="sidebar-input">
                            <div class="top-nav-search">
                                <form>
                                    <input type="text" class="form-control" placeholder="Search here">
                                    <button class="btn" type="submit"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ul id="menuSideBar">
                        <li class="active">
                            <a href="/trang-chu"><img src="assets/img/home.svg" alt="sidebar_img">
                                <span>Trang chủ</span></a>
                        </li>
                        <li>
                            <a href="/nhan-vien"><img src="assets/img/employee.svg" alt="sidebar_img"><span>
                                    Nhân viên</span></a>
                        </li>
                        <li class="moduleNghiPhep">
                            <a href="/nghi-phep"><img src="assets/img/leave.svg" alt="sidebar_img">
                                <span>Nghỉ phép</span></a>
                        </li>
                        <li class="dangkyNghiPhep">
                            <a href="/dang-ky-nghi-phep"><img src="assets/img/leave.svg" alt="sidebar_img">
                                <span>Đăng ký nghỉ phép</span></a>
                        </li>
                        <li>
                            <a href="review.html"><img src="assets/img/review.svg" alt="sidebar_img"><span>Hợp đồng</span></a>
                        </li>
                        <li>
                            <a href="report.html"><img src="assets/img/report.svg" alt="sidebar_img"><span>Báo cáo</span></a>
                        </li>
                        <li>
                            <a href="manage.html"><img src="assets/img/manage.svg" alt="sidebar_img">
                                <span>Quản lý</span></a>
                        </li>
                        <li>
                            <a href="settings.html"><img src="assets/img/settings.svg"
                                    alt="sidebar_img"><span>Cài đặt</span></a>
                        </li>
                        <li class="dangkyNghiPhep">
                            <a href="/ho-so"><img src="assets/img/profile.svg" alt="sidebar_img">
                                <span>Hồ sơ</span></a>
                        </li>
                    </ul>
                    <ul class="logout">
                        <li>
                            <a data-target="#dangXuat" data-toggle="modal"><img src="assets/img/logout.svg" alt="sidebar_img"><span>Đăng xuất</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>ư
    <div class="customize_popup">
        <div class="modal fade" id="dangXuat" tabindex="-1" aria-labelledby="staticBackdropLabels1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">
                    <div class="modal-header text-centers border-0">
                        <h5 class="modal-title text-center" id="staticBackdropLabels1">Đăng xuất hệ thống?
                        </h5>
                    </div>
                    <div class="modal-footer text-centers">
                        <button type="button" class="btn btn-primary" @click="logOut()"
                            data-dismiss="modal">Đăng xuất</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: `Siderbar`,
    methods: {
        logOut(){
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("role");
            this.$router.push(`/`);
            window.location.href = '/';
        },
    },
    mounted() {
        $(document).ready(function(){
            var roleAdmin = `ROLE_ADMIN`;
            var roleStorage = localStorage.getItem("role");
            var roleSplit = roleStorage.split(',');
            console.log(roleSplit)
            var role = ``;
            for (let i = 0; i < roleSplit.length; i++) {
                role = roleSplit[i];
                if(role == roleAdmin){
                    $('.moduleNghiPhep').css('display', 'block');
                    $('.dangkyNghiPhep').css('display', 'none');
                } else {
                    $('.moduleNghiPhep').css('display', 'none');
                    $('.dangkyNghiPhep').css('display', 'block');
                }
            }

            function checkRole(roleName) {
                var role = `ROLE_ADMIN`;
                if(roleName == role){
                    return true;
                }
                return false;
            }

            // if(role !== 'ROLE_ADMIN'){
            //     $('.moduleNghiPhep').css('display', 'none');
            //     $('.dangkyNghiPhep').css('display', 'block');
            // } else {
            //     $('.moduleNghiPhep').css('display', 'block');
            //     $('.dangkyNghiPhep').css('display', 'none');
            // }

        });

        if ($("#menuSideBar").length > 0) {
            $("#menuSideBar").on("click", "a",function (e) { 
                console.log(e);
                // $("#menuSideBar > li").click(function(e){ 
                // e.preventDefault();
                $("#menuSideBar li").removeClass("active");
                $(this).closest("li").addClass("active");
                // $(this).addClass("active");
            });
        }
        afterRender();
    },
    updated() {
        afterRender();
    }
}
</script>