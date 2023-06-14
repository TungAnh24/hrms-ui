<template>
    <HeaderVue></HeaderVue>
    <SidebarVue></SidebarVue>
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="page-name 	mb-4">
                <h4 class="m-0"><img src="assets/img/profile.jpg" class="mr-1" alt="profile" /> Trang chủ</h4>
                <label>Sun, 29 Nov 2019</label>
            </div>
            <div class="row mb-4">
                <div class="col-xl-6 col-sm-12 col-12">
                    <div class="breadcrumb-path ">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><img src="assets/img/dash.png" class="mr-3"
                                        alt="breadcrumb" />Trang chủ</a>
                            </li>
                            <li class="breadcrumb-item active">Thống kê</li>
                        </ul>
                        <h3>Quản trị trang chủ</h3>
                    </div>
                </div>
                <div class="col-xl-6 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-xl-6 col-sm-6 col-12">
                            <a class="btn-dash" href="#"> Quản trị trang chủ</a>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-12">
                            <a class="btn-emp" href="index-employee.html">Quản trị nhân viên</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card board1 fill1 ">
                        <div class="card-body">
                            <div class="card_widget_header">
                                <label>Số nhân viên</label>
                                <h4>700</h4>
                            </div>
                            <div class="card_widget_img">
                                <img src="assets/img/dash1.png" alt="card-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card board1 fill2 ">
                        <div class="card-body">
                            <div class="card_widget_header">
                                <label>Số công ty</label>
                                <h4>30</h4>
                            </div>
                            <div class="card_widget_img">
                                <img src="assets/img/dash2.png" alt="card-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card board1 fill3 ">
                        <div class="card-body">
                            <div class="card_widget_header">
                                <label>Leaves</label>
                                <h4>9</h4>
                            </div>
                            <div class="card_widget_img">
                                <img src="assets/img/dash3.png" alt="card-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card board1 fill4 ">
                        <div class="card-body">
                            <div class="card_widget_header">
                                <label>Lương</label>
                                <h4>$5.8M</h4>
                            </div>
                            <div class="card_widget_img">
                                <img src="assets/img/dash4.png" alt="card-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 d-flex mobile-h">
                    <div class="card flex-fill">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Total Employees</h5>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="invoice_chart"></div>
                            <div class="text-center text-muted">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="mt-4">
                                            <p class="mb-2 text-truncate"><i class="fas fa-circle text-primary mr-1"></i>
                                                Business</p>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="mt-4">
                                            <p class="mb-2 text-truncate"><i class="fas fa-circle text-success mr-1"></i>
                                                Testing</p>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="mt-4">
                                            <p class="mb-2 text-truncate"><i class="fas fa-circle text-danger mr-1"></i>
                                                Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Total Salary By Unit</h5>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="sales_chart"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-sm-12 col-12 d-flex">
                    <div class="card card-list flex-fill">
                        <div class="card-header">
                            <h4 class="card-title-dash">Danh sách nhân viên</h4>
                        </div>
                        <div class="card-body dash-activity">
                            <div class="slimscroll activity_scroll">

                                <div class="team-list" v-for="user in userList">
                                    <div class="team-view">
                                        <div class="team-img">
                                            <img src="assets/img/profiles/avatar-03.jpg" alt="avatar" />
                                        </div>
                                        <div class="team-content">
                                            <label>{{ user.fullName }}</label>
                                            <span v-for="r in user.role">{{ r }}</span>
                                        </div>
                                    </div>
                                    <div class="team-action">
                                        <ul>
                                            <li><a><i data-feather="trash-2"></i></a></li>
                                            <li><a><i data-feather="edit-2"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="team-list">
                                <div class="team-view">
                                    <div class="team-img">
                                        <img src="assets/img/profiles/avatar-04.jpg" alt="avatar" />
                                    </div>
                                    <div class="team-content">
                                        <label>Linda Craver</label>
                                        <span>IOS</span>
                                    </div>
                                </div>
                                <div class="team-action">
                                    <ul>
                                        <li><a><i data-feather="trash-2"></i></a></li>
                                        <li><a><i data-feather="edit-2"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-list">
                                <div class="team-view">
                                    <div class="team-img">
                                        <img src="assets/img/profiles/avatar-06.jpg" alt="avatar" />
                                    </div>
                                    <div class="team-content">
                                        <label>Jenni Sims</label>
                                        <span>Android</span>
                                    </div>
                                </div>
                                <div class="team-action">
                                    <ul>
                                        <li><a><i data-feather="trash-2"></i></a></li>
                                        <li><a><i data-feather="edit-2"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-list">
                                <div class="team-view">
                                    <div class="team-img">
                                        <img src="assets/img/profiles/avatar-11.jpg" alt="avatar" />
                                    </div>
                                    <div class="team-content">
                                        <label>Danny</label>
                                        <span>Design</span>
                                    </div>
                                </div>
                                <div class="team-action">
                                    <ul>
                                        <li><a><i data-feather="trash-2"></i></a></li>
                                        <li><a><i data-feather="edit-2"></i></a></li>
                                    </ul>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-12 col-12 d-flex">
                    <div class="card card-list flex-fill">
                        <div class="card-header">
                            <!-- <div class=""> -->
                                <h4 class="card-title-dash">Danh sách nghỉ phép</h4>
                                <div class="dropdown">
                                    <button class="btn btn-action " type="button" id="roomsBtn" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="roomsBtn">
                                        <a class="dropdown-item" href="#">Action</a>
                                    </div>
                                </div>
                            <!-- </div> -->
                        </div>
                        <div class="card-body dash-activity">
                            <div class="slimscroll activity_scroll">
                                <div class="activity-set" v-for="leave in leaveList">
                                    <div class="activity-img">
                                        <img src="assets/img/profiles/avatar-02.jpg" alt="avatar">
                                    </div>
                                    <div class="activity-content">
                                        <label>{{ leave.eplName }}</label>
                                        <span>{{ leave.duration }} ({{ leave.dateApply }})</span>
                                    </div>
                                </div>
                                <!-- <div class="activity-set">
                                    <div class="activity-img">
                                        <img src="assets/img/profiles/avatar-05.jpg" alt="avatar">
                                    </div>
                                    <div class="activity-content">
                                        <label>Lorem ipsum dolor sit amet,</label>
                                        <span>3 hours ago</span>
                                    </div>
                                </div>
                                <div class="activity-set">
                                    <div class="activity-img">
                                        <img src="assets/img/profiles/avatar-07.jpg" alt="avatar">
                                    </div>
                                    <div class="activity-content">
                                        <label>Lorem ipsum dolor sit amet,</label>
                                        <span>4 hours ago</span>
                                    </div>
                                </div>
                                <div class="activity-set">
                                    <div class="activity-img">
                                        <img src="assets/img/profiles/avatar-08.jpg" alt="avatar">
                                    </div>
                                    <div class="activity-content">
                                        <label>Lorem ipsum dolor sit amet,</label>
                                        <span>5 hours ago</span>
                                    </div>
                                </div>
                                <div class="activity-set">
                                    <div class="activity-img">
                                        <img src="assets/img/profiles/avatar-09.jpg" alt="avatar">
                                    </div>
                                    <div class="activity-content">
                                        <label>Lorem ipsum dolor sit amet,</label>
                                        <span>6 hours ago</span>
                                    </div>
                                </div>
                                <div class="activity-set">
                                    <div class="activity-img">
                                        <img src="assets/img/profiles/avatar-10.jpg" alt="avatar">
                                    </div>
                                    <div class="activity-content">
                                        <label>Lorem ipsum dolor sit amet,</label>
                                        <span>2 hours ago</span>
                                    </div>
                                </div>
                                <div class="activity-set">
                                    <div class="activity-img">
                                        <img src="assets/img/profiles/avatar-12.jpg" alt="avatar">
                                    </div>
                                    <div class="activity-content">
                                        <label>Lorem ipsum dolor sit amet,</label>
                                        <span>3 hours ago</span>
                                    </div>
                                </div>
                                <div class="activity-set">
                                    <div class="activity-img">
                                        <img src="assets/img/profiles/avatar-13.jpg" alt="avatar">
                                    </div>
                                    <div class="activity-content">
                                        <label>Lorem ipsum dolor sit amet,</label>
                                        <span>4 hours ago</span>
                                    </div>
                                </div> -->
                            </div>
                            <div class="leave-viewall activit">
                                <a>View all <img src="assets/img/right-arrow.png" class="ml-2" alt="arrow"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-12 col-12 d-flex">
                    <div class="card card-list flex-fill">
                        <div class="card-header ">
                            <h4 class="card-title-dash">Danh sách công việc</h4>
                            <div class="dropdown">
                                <button class="btn btn-action " type="button" id="roomsBtn" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="roomsBtn">
                                    <a class="dropdown-item" href="#">Action</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body dash-activity">
                            <div class=" slimscroll activity_scroll">
                            <div class="leave-set" v-for="assignment in assingmentList">
                                <span class="leave-inactive">
                                    <i class="fas fa-briefcase"></i>
                                </span>
                                <label>{{ assignment.taskName }}</label>
                            </div>
                            </div>
                            <!-- <div class="leave-set">
                                <span class="leave-active">
                                    <i class="fas fa-briefcase"></i>
                                </span>
                                <label>Fri, 20 Dec 2021</label>
                            </div>
                            <div class="leave-set">
                                <span class="leave-active">
                                    <i class="fas fa-briefcase"></i>
                                </span>
                                <label>Wed, 25 Dec 2021</label>
                            </div>
                            <div class="leave-set">
                                <span class="leave-active">
                                    <i class="fas fa-briefcase"></i>
                                </span>
                                <label>Fri, 27 Dec 2021</label>
                            </div>
                            <div class="leave-set">
                                <span class="leave-active">
                                    <i class="fas fa-briefcase"></i>
                                </span>
                                <label>Tue, 31 Dec 2021</label>
                            </div> -->
                            <div class="leave-viewall">
                                <a href="leave.html">View all <img src="assets/img/right-arrow.png" class="ml-2"
                                        alt="arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import HeaderVue from '../../components/Header.vue'
import SidebarVue from '../../components/Sidebar.vue'

export default {
    name: `Dashboard`,
    components: {
        HeaderVue,
        SidebarVue
    },
    data() {
        return {
            userList: null,
            leaveList: null,
            assingmentList: null
        }
    },
    methods: {
        async getUserList() {
            await axios.get(`user/get-all`)
                .then(res => {
                    if (res != null) {
                        this.userList = res.data.data
                    }

                }).catch(err => console.log(err))
        },

        async getListLeave() {
            await axios.get(`leave/get-list`)
                .then(res => {
                    if (res != null) {
                        this.leaveList = res.data.data
                    }
                }).catch(err => {
                    console.log(err)
                })
        },

        async getListAssignment() {
            await axios.get(`assignment/get-all`)
                .then(res => {
                    if (res != null) {
                        this.assingmentList = res.data.data;
                    }
                }).catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        afterRender();
    },
    updated() {
        afterRender();
    },
    created() {
        this.getUserList();
        this.getListLeave();
        this.getListAssignment();
    }
}
</script>