<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="breadcrumb-path ">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><img src="assets/img/dash.png" class="mr-2"
                                        alt="breadcrumb" />Trang chủ</a>
                            </li>
                            <li class="breadcrumb-item active"> Văn phòng</li>
                        </ul>
                        <h3>Danh sách văn phòng</h3>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="head-link-set">
                        <ul>
                            <li><a class="active" href="#">All</a></li>
                            <li><a href="/cong-viec">Công việc</a></li>
                            <li><a href="/van-phong">Phòng ban</a></li>
                        </ul>
                        <!-- <a class="btn-add" href="#addEmployeeModal" data-toggle="modal"><i data-feather="plus"></i> Thêm
                            mới</a> -->
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-xl-10 col-sm-8 col-12 ">
                    <label class="employee_count">{{ departmentCount }}</label>
                </div>
                <div class="col-xl-1 col-sm-2 col-12 ">
                    <a href="#" class="btn-view active "><i data-feather="grid"></i> </a>
                </div>
                <div class="col-xl-1 col-sm-2 col-12 ">
                    <a href="employee.html" class="btn-view "><i data-feather="list"></i> </a>
                </div>
            </div>
            <div class="row">
                <a class="btn-add ml-3 mt-3" id="addNewDepartment"><i data-feather="plus"></i> Thêm mới phòng ban</a>
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card  card-lists">
                        <!-- <div class="card-header  ">
                            <h2 class="card-titles">Thêm phòng ban mới</h2>
                        </div> -->
                        <div class="card-body" id="formAddNewDepartment" style="display: none;">
                            <div class="row">
                                <!-- <div class="row"> -->
                                <div class="col-xl-5 col-sm-12 col-12 " style="font-size: 15px;">
                                    <input type="text" placeholder="Tên phòng..." class="input-form"
                                        v-model="department.departmentName">
                                </div>
                                <div class="col-xl-3 col-sm-12 col-12 " style="font-size: 15px;">
                                    <input type="text" placeholder="Mã phòng..." class="input-form"
                                        v-model="department.departmentCode">
                                </div>
                                <!-- </div> -->

                                <div class="col-xl-2 col-sm-6 col-6 ">
                                    <a href="#" class="btn-create " @click="createDepartment()">Tạo phòng </a>
                                </div>
                                <div class="col-xl-2 col-sm-6 col-6 ">
                                    <a href="#" class="btn-cancel ">Hủy </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 " v-for="objDepartment in lstDepartment">
                    <div class="card">
                        <div class="card-header create-formhead">
                            <h2 class="card-titles">{{ objDepartment.departmentName }}<span>{{ objDepartment.departmentCode
                            }}</span></h2>
                            <ul>
                                <li>
                                    <a data-toggle="modal" data-target="#edit" title="Sửa phòng ban" class="edit-link"
                                        @click="getDepartmentId(objDepartment.id)"><i data-feather="edit"></i>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="modal" data-target="#delete" title="Xóa phòng ban" class="delete-link"
                                        @click="getDepartmentId(objDepartment.id)"><i data-feather="trash-2"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="member-formcontent member-row">
                                <div class="member-head">
                                    <h2>Members</h2>
                                    <div class="avatar-group">
                                        <div class="avatar avatar-xs group_img group_header">
                                            <img class="avatar-img rounded-circle" alt="User Image"
                                                src="assets/img/profiles/avatar-10.jpg">
                                        </div>
                                        <div class="avatar avatar-xs group_img group_header">
                                            <img class="avatar-img rounded-circle" alt="User Image"
                                                src="assets/img/profiles/avatar-15.jpg">
                                        </div>
                                        <div class="avatar avatar-xs group_img group_header">
                                            <img class="avatar-img rounded-circle" alt="User Image"
                                                src="assets/img/profiles/avatar-16.jpg">
                                        </div>
                                        <div class="avatar avatar-xs group_img group_header">
                                            <img class="avatar-img rounded-circle" alt="User Image"
                                                src="assets/img/profiles/avatar-17.jpg">
                                        </div>
                                        <div class="avatar avatar-xs group_img group_header">
                                            <img class="avatar-img rounded-circle" alt="User Image"
                                                src="assets/img/profiles/avatar-14.jpg">
                                        </div>
                                        <div class="avatar avatar-xs group_img group_header">
                                            <img class="avatar-img rounded-circle" alt="User Image"
                                                src="assets/img/profiles/avatar-18.jpg">
                                        </div>
                                    </div>
                                </div>
                                <div class="member_link">
                                    <a data-toggle="collapse" href="#table" title="Danh sách thành viên" role="button"
                                        aria-expanded="false" aria-controls="table" @click="toggleTable($event)"><i
                                            data-feather="chevron-down"></i></a>
                                </div>
                            </div>
                            <div class="table-responsive collapse" id="table" style="display: none;">
                                <table class="table  custom-table  no-footer">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Line Manager</th>
                                            <th>Team</th>
                                            <th>Office</th>
                                            <th>Permissions</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html">
                                                        <img src="assets/img/profiles/avatar-13.jpg" alt="profile"
                                                            class="img-table" />
                                                    </a>
                                                    <label>Sean Black</label>
                                                </div>
                                            </td>
                                            <td>
                                                <label class="action_label">Richard Wilson </label>
                                            </td>
                                            <td>
                                                <label class="action_label2">Design </label>
                                            </td>
                                            <td><label>Focus Technologies </label></td>
                                            <td><label>Team Lead</label></td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html">
                                                        <img src="assets/img/profiles/avatar-16.jpg" alt="profile"
                                                            class="img-table" />
                                                    </a>
                                                    <label>Linda Craver</label>
                                                </div>
                                            </td>
                                            <td>
                                                <label class="action_label">Richard Wilson </label>
                                            </td>
                                            <td>
                                                <label class="action_label2">IOS </label>
                                            </td>
                                            <td><label>Focus Technologies </label></td>
                                            <td><label>Team Lead</label></td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html">
                                                        <img src="assets/img/profiles/avatar-17.jpg" alt="profile"
                                                            class="img-table" />
                                                    </a>
                                                    <label>Jenni Sims</label>
                                                </div>
                                            </td>
                                            <td>
                                                <label class="action_label">Richard Wilson </label>
                                            </td>
                                            <td>
                                                <label class="action_label2">Android </label>
                                            </td>
                                            <td><label>Focus Technologies </label></td>
                                            <td><label>Team Lead</label></td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html">
                                                        <img src="assets/img/profiles/avatar-19.jpg" alt="profile"
                                                            class="img-table" />
                                                    </a>
                                                    <label>Stacey Linville</label>
                                                </div>
                                            </td>
                                            <td>
                                                <label class="action_label">Richard Wilson </label>
                                            </td>
                                            <td>
                                                <label class="action_label2">Testing </label>
                                            </td>
                                            <td><label>Focus Technologies </label></td>
                                            <td><label>Team Lead</label></td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html">
                                                        <img src="assets/img/profiles/avatar-14.jpg" alt="profile"
                                                            class="img-table" />
                                                    </a>
                                                    <label>Maria Cotton</label>
                                                </div>
                                            </td>
                                            <td>
                                                <label class="action_label">Richard Wilson </label>
                                            </td>
                                            <td>
                                                <label class="action_label2">PHP </label>
                                            </td>
                                            <td><label>Focus Technologies </label></td>
                                            <td><label>Team Lead</label></td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html">
                                                        <img src="assets/img/profiles/avatar-18.jpg" alt="profile"
                                                            class="img-table" />
                                                    </a>
                                                    <label>John Gibbs</label>
                                                </div>
                                            </td>
                                            <td>
                                                <label class="action_label">Richard Wilson </label>
                                            </td>
                                            <td>
                                                <label class="action_label2">PHP </label>
                                            </td>
                                            <td><label>Focus Technologies </label></td>
                                            <td><label>Team Lead</label></td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html">
                                                        <img src="assets/img/profiles/avatar-10.jpg" alt="profile"
                                                            class="img-table" />
                                                    </a>
                                                    <label>Richard Wilson</label>
                                                </div>
                                            </td>
                                            <td>
                                                <label class="action_label in_active">No </label>
                                            </td>
                                            <td>
                                                <label class="action_label2">Business </label>
                                            </td>
                                            <td><label>Focus Technologies </label></td>
                                            <td><label>Super Admin</label></td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
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
    </div>

    <div class="customize_popup">
        <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="staticBackdropLabels1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">
                    <div class="modal-header text-centers border-0">
                        <h5 class="modal-title text-center" id="staticBackdropLabels1">Bạn có chắc chắn xóa văn phòng này?
                        </h5>
                    </div>
                    <div class="modal-footer text-centers">
                        <button type="button" class="btn btn-primary" @click="deleteDepartment(dpmId)"
                            data-dismiss="modal">Xóa</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="customize_popup">
        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Chỉnh sửa phòng ban</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup">
                                <label>Tên phòng</label>
                                <input type="text" v-model="department.departmentName">
                            </div>
                        </div>
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup">
                                <label>Mã phòng</label>
                                <input type="text" v-model="department.departmentCode">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-apply" @click="updateDepartment(dpmId)"
                            data-dismiss="modal">Sửa</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue'
export default {
    name: `DepartmentIndex`,
    components: {
        Header, Sidebar
    },
    data() {
        return {
            department: {
                id: 0,
                departmentName: ``,
                departmentCode: ``,
                userId: ``
            },
            dpmId: null,
            departmentCount: null,
            lstDepartment: null
        }
    },
    methods: {
        async getListDepartment() {
            await axios.get(`department/get-all`)
                .then(res => {
                    if (res != null) {
                        this.lstDepartment = res.data.data;
                        this.departmentCount = res.data.totalItems + ' Phòng ban';
                    }
                }).catch(err => console.log(err));
        },

        async createDepartment() {
            await axios.post(`department/add-new`, this.department)
                .then(res => {
                    if (res != null) {
                        this.$router.push(`/van-phong`);
                        this.getListDepartment();
                        this.department.departmentName = ``;
                        this.department.departmentCode = ``;
                    }
                }).catch(err => console.log(err));
        },

        async getDepartmentId(dpmId) {
            await axios.get(`department/department-detail/` + dpmId)
                .then(res => {
                    if (res != null) {
                        this.department = res.data.data;
                        this.dpmId = res.data.data.id;
                        console.log(`departmentId đây rồi: ` + this.dpmId);
                    }
                }).catch(err => console.log(err));
        },

        async updateDepartment(dpmId) {
            await axios.post(`department/update/` + dpmId, this.department)
                .then(res => {
                    // if(res != null) {
                    this.department = res.data.data;
                    // this.department.departmentName = res.data.data.departmentName;
                    // this.department.departmentCode = res.data.data.departmentCode;
                    // console.log(`AAAAA: ` + this.department.departmentName);
                    // this.$router.push(`/department`)
                    // }
                    this.getListDepartment();
                }).catch(err => {
                    console.log(err);
                })
        },

        async deleteDepartment(dpmId){
            await axios.post(`department/delete/` + dpmId)
            .then(res => {
              if(res != null) {
                this.getListDepartment();
              }  
            })
        },

        toggleTable(event) {
            $(event.target).parents(".card-body").parent(".card").find(".table-responsive").slideToggle();
        }
    },
    created() {
        this.getListDepartment();
    },
    updated() {
        afterRender();
    },
    // mounted() {
    //     afterRender();
    // }
}
</script>