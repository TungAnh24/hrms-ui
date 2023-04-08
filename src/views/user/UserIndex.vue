<template>
    <HeaderVue></HeaderVue>
    <SidebarVue></SidebarVue>
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <!-- <div class="col-xl-12 col-sm-12 col-12">
                    <div class="breadcrumb-path mb-4">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/trang-chu"><img src="assets/img/dash.png" class="mr-2"
                                        alt="breadcrumb" />Trang chủ</a>
                            </li>
                            <li class="breadcrumb-item active"> Nhân viên</li>
                        </ul>
                        <h3>Nhân viên</h3>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="head-link-set">
                        <ul>
                            <li><a class="active" href="#">All</a></li>
                            <li><a href="employee-team.html">Teams</a></li>
                            <li><a href="employee-office.html">Offices</a></li>
                        </ul>
                        <a class="btn-add" href="#addEmployeeModal" data-toggle="modal"><i data-feather="plus"></i> Thêm mới</a>
                    </div>
                </div> -->
                <UserHeader></UserHeader>
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="row">
                        <div class="col-xl-10 col-sm-8 col-12 ">
                            <label class="employee_count">7 Người</label>
                        </div>
                        <div class="col-xl-1 col-sm-2 col-12 ">
                            <a href="/user-grid" class="btn-view "><i data-feather="grid"></i> </a>
                        </div>
                        <div class="col-xl-1 col-sm-2 col-12 ">
                            <a href="/user-list" class="btn-view active"><i data-feather="list"></i> </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="card">
                        <div class="table-heading">
                            <h2>Project Summery</h2>
                        </div>
                        <div class="table-responsive">
                            <table class="table  custom-table no-footer">
                                <thead>
                                    <tr>
                                        <th>Tài khoản</th>
                                        <th>Họ tên</th>
                                        <th>Vị trí</th>
                                        <th>Số điện thoại</th>
                                        <th>Email</th>
                                        <th>Phòng ban</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(user, index) in userList" :key="index">
                                    <tr>
                                        <td>
                                            <div class="table-img">
                                                <a href="profile.html">
                                                    <img src="assets/img/profiles/avatar-13.jpg" alt="profile"
                                                        class="img-table" /><label>{{ user.username }}</label>
                                                </a>
                                            </div>
                                        </td>
                                        <td>
                                            <label class="action_label">{{ user.fullName }} </label>
                                        </td>
                                        <td>
                                            <label class="text-primary">{{ user.role }} </label>
                                        </td>
                                        <td><label>{{ user.phone }} </label></td>
                                        <td><label>{{user.email}}</label></td>
                                        <td>
                                            <label>{{ user.departmentName }}</label>
                                        </td>
                                        <td class="tab-select">
                                            <select class="select">
                                                <option value="active">Hoạt động</option>
                                                <option value="inactive">Không hoạt động</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HeaderVue from '@/components/Header.vue';
import SidebarVue from '@/components/Sidebar.vue';
import UserHeader from './UserHeader.vue';
import axios from 'axios';
export default {
    name: `UserIndex`,
    components: {
        HeaderVue,
        SidebarVue,
        UserHeader
    },
    data() {
        return {
            userList: null
        }
    },
    methods: {
        async getUserList() {
            await axios.get(`/user/get-all`)
                .then(res => {
                    if (res != null) {
                        this.userList = res.data.data
                    }
                    console.log(this.userList)
                }).catch(err => console.log(err));
        }
    },
    created() {
        this.getUserList()
    },
    updated() {
        afterRender();
    }
}
</script>