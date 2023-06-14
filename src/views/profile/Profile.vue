<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="customize_popup userProfile">
        <!-- <div class="modal fade" id="userProfile" tabindex="-1" aria-labelledby="staticBackdropLabela" aria-hidden="true"> -->
            <div>
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
                                            <h5 class="my-3">{{ userInfo.fullName }}</h5>
                                            <!-- <p class="text-muted mb-1">Full Stack Developer</p> -->
                                            <p class="text-muted mb-1">{{ userInfo.departmentName }}</p>
                                            <!-- <p v-for="(a in userInfo.role)" class="text-muted mb-4 action_label2">{{ a }}</p> -->
                                            <label v-for="roleName in userInfo.role" class="text-primary">{{ roleName
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
                                                    <p class="text-muted mb-0">{{ userInfo.fullName }}</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Email</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{{ userInfo.email }}</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Điện thoại</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{{ userInfo.phone }}</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Máy bàn</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{{ userInfo.phone }}</p>
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
                                                    <p class="text-muted mb-0">{{ userInfo.address }}</p>
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
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import axios from 'axios';
export default {
    name: `Profile`,
    components: { Header, Sidebar },
    data() {
        return {
            userInfo: {
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
        async getUserInfo() {
            var userId = localStorage.getItem(`userId`);
            await axios.get(`user/` + userId)
                .then(res => {
                    if (res != null) {
                        this.userInfo = res;
                        this.userInfo.fullName = res.data.fullName;
                        this.userInfo.username = res.data.username;
                        this.userInfo.role = res.data.role;
                        this.userInfo.email = res.data.email;
                        this.userInfo.phone = res.data.phone;
                        this.userInfo.departmentName = res.data.departmentName;
                        this.userInfo.address = res.data.address;
                        this.userInfo.bankAccount = res.data.bankAccount;
                        this.userInfo.bankFullName = res.data.bankFullName;
                        this.userInfo.bankShortName = res.data.bankShortName;
                        this.userInfo.isActivated = res.data.isActivated;
                        // console.log(`usserId Info đây rồi: ` + userId);
                        // console.log(`userInfo đây rồi: ` + this.userInfo.fullName);
                        // console.log(`userInfo rolename đây rồi: ` + this.userInfo.role);
                    }
                }).catch(err => console.log(err));
        },
    },
    created(){
        this.getUserInfo();
    }
}
</script>