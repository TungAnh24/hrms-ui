<template>
    <Toast/>
    <div class="header">
        <div class="header-left">
            <a href="index.html" class="logo">
                <img src="assets/img/hrms-logo.png" alt="Logo">
            </a>
            <a href="index.html" class="logo logo-small">
                <img src="assets/img/hrms-small.png" alt="Logo" width="30" height="30">
            </a>
            <a href="javascript:void(0);" id="toggle_btn">
                <span class="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
        </div>

        <div class="top-nav-search">
            <form>
                <input type="text" class="form-control" placeholder="">
                <button class="btn" type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
        <a class="mobile_btn" id="mobile_btn">
            <i class="fas fa-bars"></i>
        </a>
        <ul class="nav user-menu">

            <li class="nav-item dropdown">
                <a href="#" class="dropdown-toggle nav-link pr-0" data-toggle="dropdown">
                    <i data-feather="bell"></i> <span class="badge badge-pill"></span>
                </a>
                <div class="dropdown-menu notifications">
                    <div class="topnav-dropdown-header">
                        <span class="notification-title">Notifications</span>
                        <a href="javascript:void(0)" class="clear-noti"> Clear All</a>
                    </div>
                    <div class="noti-content">
                        <ul class="notification-list">
                            <li class="notification-message">
                                <a href="activities.html">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt=""
                                                src="assets/img/profiles/avatar-02.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Brian Johnson</span>
                                                paid the invoice <span class="noti-title">#DF65485</span></p>
                                            <p class="noti-time"><span class="notification-time">4 mins ago</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="activities.html">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt=""
                                                src="assets/img/profiles/avatar-03.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Marie Canales</span>
                                                has accepted your estimate <span class="noti-title">#GTR458789</span></p>
                                            <p class="noti-time"><span class="notification-time">6 mins ago</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="activities.html">
                                    <div class="media">
                                        <div class="avatar avatar-sm">
                                            <span class="avatar-title rounded-circle bg-primary-light"><i
                                                    class="far fa-user"></i></span>
                                        </div>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">New user
                                                    registered</span></p>
                                            <p class="noti-time"><span class="notification-time">8 mins ago</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="activities.html">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt=""
                                                src="assets/img/profiles/avatar-04.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Barbara Moore</span>
                                                declined the invoice <span class="noti-title">#RDW026896</span></p>
                                            <p class="noti-time"><span class="notification-time">12 mins ago</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="activities.html">
                                    <div class="media">
                                        <div class="avatar avatar-sm">
                                            <span class="avatar-title rounded-circle bg-info-light"><i
                                                    class="far fa-comment"></i></span>
                                        </div>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">You have received a new
                                                    message</span></p>
                                            <p class="noti-time"><span class="notification-time">2 days ago</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="topnav-dropdown-footer">
                        <a href="activities.html">View all Notifications</a>
                    </div>
                </div>
            </li>


            <li class="nav-item dropdown has-arrow main-drop">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                    <span class="user-img">
                        <img src="assets/img/profile.jpg" alt="">
                        <span class="status online"></span>
                    </span>
                    <span>Xin chào: {{ userName }}</span>
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" @click="HoSo()" data-target="#userProfile" data-toggle="modal"><i data-feather="user" class="mr-1"></i>
                        Hồ sơ</a>
                    <a class="dropdown-item" href="settings.html"><i data-feather="settings" class="mr-1"></i>
                        Cài đặt</a>
                    <a class="dropdown-item" data-target="#delete" data-toggle="modal"><i data-feather="log-out" class="mr-1"></i>
                        Đăng xuất</a>
                </div>
            </li>

        </ul>
        <div class="dropdown mobile-user-menu show">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                    class="fa fa-ellipsis-v"></i></a>
            <div class="dropdown-menu dropdown-menu-right ">
                <a class="dropdown-item" href="profile.html">My Profile</a>
                <a class="dropdown-item" href="settings.html">Settings</a>
                <a class="dropdown-item" href="login.html">Logout</a>
            </div>
        </div>

    </div>

    <div class="customize_popup">
        <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="staticBackdropLabels1" aria-hidden="true">
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
    <div class="customize_popup userProfile">
        <div class="modal fade" id="userProfile" tabindex="-1" aria-labelledby="staticBackdropLabela" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content" style="font-size: 13px;">
                    <section style="background-color: #eee;">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div class="container py-5">
                            <!-- <div class="row">
                                <div class="col">
                                    <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                                        <ol class="breadcrumb mb-0">
                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">User</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div> -->

                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card mb-4">
                                        <div class="card-body text-center">
                                            <img src="assets/img/profiles/avatar-13.jpg"
                                                alt="avatar" class="rounded-circle img-fluid" style="height: 150px;">
                                            <h5 class="my-3">{{ hoSo.fullName }}</h5>
                                            <!-- <p class="text-muted mb-1">Full Stack Developer</p> -->
                                            <p class="text-muted mb-1">{{ hoSo.departmentName }}</p>
                                            <!-- <p v-for="(a in userInfo.role)" class="text-muted mb-4 action_label2">{{ a }}</p> -->
                                            <label v-for="roleName in hoSo.role" class="text-primary">{{ roleName
                                            }}</label>
                                            <!-- <div class="d-flex justify-content-center mb-2">
                                                <button type="button" class="btn btn-primary">Follow</button>
                                                <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="card mb-4 mb-lg-0">
                                        <div class="card-body p-0">
                                            <ul class="list-group list-group-flush rounded-3" style="border-radius: 5px;">
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i class="fas fa-globe fa-lg text-warning"></i>
                                                    <p class="mb-0">https://mdbootstrap.com</p>
                                                </li>
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                                                    <p class="mb-0">mdbootstrap</p>
                                                </li>
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                                                    <p class="mb-0">@mdbootstrap</p>
                                                </li>
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                                                    <p class="mb-0">mdbootstrap</p>
                                                </li>
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                    <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                                                    <p class="mb-0">mdbootstrap</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="card mb-4">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Họ tên</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{{ hoSo.fullName }}</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Email</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{{ hoSo.email }}</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Điện thoại</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{{ hoSo.phone }}</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Máy bàn</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{{ hoSo.phone }}</p>
                                                </div>
                                            </div>
                                            <!-- <div class="row" style="font-weight: 700; font-size: 14px;">
                                                <div class="col-sm-3">
                                                    <p class="mb-0" style="font-size: 13px">Vợ/chồng</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">Ông: Hà Văn Huy</p>
                                                </div>
                                            </div> -->
                                            <hr>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Địa chỉ</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{{ hoSo.address }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card mb-4 mb-md-0">
                                                <div class="card-body">
                                                    <p class="mb-4"><span
                                                            class="text-primary font-italic me-1">assigment</span>
                                                        Project
                                                        Status
                                                    </p>
                                                    <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                                                    <div class="progress rounded" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 80%"
                                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                                                    <div class="progress rounded" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 72%"
                                                            aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                                                    <div class="progress rounded" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 89%"
                                                            aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                                                    <div class="progress rounded" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 55%"
                                                            aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                                                    <div class="progress rounded mb-2" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 66%"
                                                            aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card mb-4 mb-md-0">
                                                <div class="card-body">
                                                    <p class="mb-4"><span
                                                            class="text-primary font-italic me-1">assigment</span>
                                                        Project
                                                        Status
                                                    </p>
                                                    <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                                                    <div class="progress rounded" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 80%"
                                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                                                    <div class="progress rounded" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 72%"
                                                            aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                                                    <div class="progress rounded" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 89%"
                                                            aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                                                    <div class="progress rounded" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 55%"
                                                            aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                                                    <div class="progress rounded mb-2" style="height: 5px;">
                                                        <div class="progress-bar" role="progressbar" style="width: 66%"
                                                            aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: `Header`,
    data() {
        return{
            userInfo: null,
            userName: ``,
            hoSo: {
                id: ``,
                username: ``,
                fullName: ``,
                role: [],
                email: ``,
                phone: ``,
                departmentName: ``,
                address: ``,
                bankAccount: ``,
                bankFullName: ``,
                bankShortName: ``,
                isActivated: ``
            }
        }
    },
    methods: {
        getUserInfo(){
            var userId = localStorage.getItem("userId");
            axios.get(`http://localhost:8080/api/user/` + userId)
            .then(res => {
                this.userInfo = res.data;
                this.userName = res.data.username;
				// localStorage.setItem(`role`, res.data.role);
                // console.log(this.userInfo + `ahshaahah`);
            })
        },

        logOut(){
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("role");
            this.$router.push(`/`);
            window.location.href = '/';
        },
        showConfirmLogout(){
            toast.add({ severity: 'warn', summary: 'Đăng xuất?', detail: 'Proceed to confirm', group: 'bc' });
        },
        async HoSo() {
            var userId = localStorage.getItem(`userId`);
            await axios.get(`user/` + userId)
                .then(res => {
                    if (res != null) {
                        this.hoSo = res;
                        this.hoSo.fullName = res.data.fullName;
                        this.hoSo.username = res.data.username;
                        this.hoSo.role = res.data.role;
                        this.hoSo.email = res.data.email;
                        this.hoSo.phone = res.data.phone;
                        this.hoSo.departmentName = res.data.departmentName;
                        this.hoSo.address = res.data.address;
                        this.hoSo.bankAccount = res.data.bankAccount;
                        this.hoSo.bankFullName = res.data.bankFullName;
                        this.hoSo.bankShortName = res.data.bankShortName;
                        this.hoSo.isActivated = res.data.isActivated;
                        // console.log(`usserId Info đây rồi: ` + userId);
                        // console.log(`userInfo đây rồi: ` + this.userInfo.fullName);
                        // console.log(`userInfo rolename đây rồi: ` + this.userInfo.role);
                    }
                }).catch(err => console.log(err));
        },
    },
    created(){
        this.getUserInfo();
    },
    mounted() {
        afterRender();
    },
    updated() {
        afterRender();
    }
}
</script>