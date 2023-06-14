<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <Toast/>
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
                            <li><a href="/van-phong">All</a></li>
                            <li><a href="/cong-viec">Công việc</a></li>
                            <li><a class="active" href="/van-phong">Phòng ban</a></li>
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
                                    <input id="tenPhong" type="text" placeholder="Tên phòng..." class="input-form abc"
                                        v-model="department.departmentName">
                                    <p class="pt-2 errTenPhong" style="color: red; font-size: 13px;">Tên phòng không được để trống!</p>
                                </div>
                                <div class="col-xl-3 col-sm-12 col-12 " style="font-size: 15px;">
                                    <input id="maPhong" type="text" placeholder="Mã phòng..." class="input-form abc"
                                        v-model="department.departmentCode">
                                    <p class="pt-2 errMaPhong" style="color: red; font-size: 13px;">Mã phòng không được để trống!</p>
                                </div>
                                <!-- </div> -->
                                <div class="col-xl-2 col-sm-6 col-6 ">
                                    <a class="btn-create btnTaoPhong" @click="createDepartment()">Tạo phòng </a>
                                </div>
                                <div class="col-xl-2 col-sm-6 col-6 ">
                                    <a id="btnHuy" class="btn-cancel ">Hủy </a>
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
                                <input id="tenPhong" type="text" v-model="department.departmentName">
                                <p class="pt-2 errTenPhong" style="color: red; font-size: 13px;">Tên phòng không được để trống!</p>
                            </div>
                        </div>
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup">
                                <label>Mã phòng</label>
                                <input id="maPhong" type="text" v-model="department.departmentCode">
                                <p class="pt-2 errMaPhong" style="color: red; font-size: 13px;">Mã phòng không được để trống!</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-apply btnSuaPhong" @click="updateDepartment(dpmId)">Sửa</button>
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
             
            var check = $('#tenPhong').val() !== '' && $('#maPhong').val() !== ''; 
            debugger;
            $('.errTenPhong').css('display', $('#tenPhong').val() == '' ? 'block' : 'none');
            $('.errMaPhong').css('display',  $('#maPhong').val() == '' ? 'block' : 'none');
            // var check =  $(".abc").map(function() { 
            //     return this.value != ''}).toArray().filter(g=> !g).length == 0;
            if (check){
                await axios.post(`department/add-new`, this.department)
                            .then(res => {
                                if (res) {
                                    console.log(res.data);
                                    this.$toast.add({ severity: 'success', summany: 'success', detail: 'Thêm mới thành công!', life: 1500, closable: false });
                                    this.$router.push(`/van-phong`);
                                    this.department.departmentName = ``;
                                    this.department.departmentCode = ``;
                                }
                            }).catch(err => {
                                console.log(err.response.data.error);
                                this.$toast.add({ severity: 'error', summany: 'error', detail: err.response.data.error[0], life: 1500, closable: false });
                                console.log(err);
                            });
                            
                            this.getListDepartment();
            }
            // else{
            //     $(".abc").parent().addClass("div1")
            // }
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
            var check = $('#tenPhong').val() !== '' && $('#maPhong').val() !== ''; 
            $('.errTenPhong').css('display', $('#tenPhong').val() == '' ? 'block' : 'none');
            $('.errMaPhong').css('display',  $('#maPhong').val() == '' ? 'block' : 'none');
            if(check){
            await axios.post(`department/update/` + dpmId, this.department)
                .then(res => {
                    if(res) {
                    console.log(this.department.departmentName);
                    this.$toast.add({ severity: 'success', summany: 'success', detail: 'Sửa thành công!', life: 1500, closable: false });
                    // this.$router.push(`/van-phong`);
                    }
                    this.getListDepartment();
                }).catch(err => {
                    this.$toast.add({ severity: 'error', summany: 'error', detail: 'Tên phòng hoặc mã phòng đã tồn tại!', life: 1500, closable: false });
                    console.log(err);
                })
            }
        },

        async deleteDepartment(dpmId){
            await axios.post(`department/delete/` + dpmId)
            .then(res => {
              if(res != null) {
                this.$toast.add({ severity: 'success', summany: 'success', detail: 'Xóa thành công!', life: 1500, closable: false });
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
       $(document).ready(function(){
        $('.errTenPhong').css('display', 'none');
        $('.errMaPhong').css('display', 'none');
        $('#addNewDepartment, .btn-cancel, .btnSuaPhong').click(function() {
            $('#tenPhong').val('');
            $('#maPhong').val('');
            $('.errTenPhong').css('display', 'none');
            $('.errMaPhong').css('display', 'none');
        }); 

        // $('.btnSuaPhong').click(function() {
        //     $('.errTenPhong').css('display', 'none');
        //     $('.errMaPhong').css('display', 'none');
        // }); 

       });

        afterRender();
    },
    // mounted() {
    //     afterRender();
    // }
}
</script>
<!-- <style>  
.div1 >.abc:not(:placeholder-shown) +p, *:not(.div1) > .abc:placeholder-shown +p{
display: none;
}
</style> -->