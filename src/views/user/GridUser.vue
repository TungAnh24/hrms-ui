<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <!-- <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="breadcrumb-path ">
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
                        <a class="btn-add" href="#addEmployeeModal" data-toggle="modal"><i data-feather="plus"></i> Add Person</a>
                    </div>
                </div> -->
                <UserHeader></UserHeader>
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="row">
                        <div class="col-xl-10 col-sm-8 col-12 ">
                            <label class="employee_count">{{ totalItems }} People</label>
                        </div>
                        <div class="col-xl-1 col-sm-2 col-12 ">
                            <a href="#" class="btn-view active "><i data-feather="grid"></i> </a>
                        </div>
                        <div class="col-xl-1 col-sm-2 col-12 ">
                            <a href="/user-list" class="btn-view "><i data-feather="list"></i> </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card grid-views">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-4 col-sm-12 col-12 " v-for="user in userList">
                                    <div class="employee_grid">
                                        <a href="/profile"><img src="assets/img/profiles/avatar-14.jpg"
                                                alt="profile" /></a>
                                        <h5>{{ user.fullName }}</h5>
                                        <label>{{ user.role }}</label>
                                        <!-- <a><span class="__cf_email__"
                                                data-cfemail="254844574c44464a51514a4b65405d44485549400b464a48">[email&#160;protected]</span></a> -->
                                        <label>{{ user.email }}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row pagination_path">
                                <div class="col-sm-12 col-md-5">
                                    <div class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of
                                        12 entries</div>
                                </div>
                                <div class="col-sm-12 col-md-7">
                                    <div class="dataTables_paginate paging_simple_number">
                                        <ul class="pagination">
                                            <li class="paginate_button page-item previous disabled">
                                                <a href="#" data-dt-idx="0" tabindex="0" class="page-link btnnavingation"><i
                                                        data-feather="arrow-left"></i></a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" class="page-link">1</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" tabindex="0" class="page-link">2</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" tabindex="0" class="page-link">3</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" tabindex="0" class="page-link">4</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" tabindex="0" class="page-link">. . .</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" tabindex="0" class="page-link">10</a>
                                            </li>
                                            <li class="paginate_button page-item next">
                                                <a href="#" tabindex="0" class="page-link btnnavingation"><i
                                                        data-feather="arrow-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import UserHeader from './UserHeader.vue';
import axios from 'axios';
export default {
    name: `GridUser`,
    components: {
        Header,
        Sidebar,
        UserHeader
    },
    data() {
        return {
            userList: null,
            totalItems: null
        }
    },
    methods: {
        async getUserList() {
            await axios.get(`user/get-all`)
                .then(res => {
                    if (res != null) {
                        this.userList = res.data.data
                        this.totalItems = res.data.totalItems
                    }
                }).catch(err => console.log(err));
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
    }
}
</script>