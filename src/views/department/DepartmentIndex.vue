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
                                        alt="breadcrumb" />Home</a>
                            </li>
                            <li class="breadcrumb-item active"> Employees</li>
                        </ul>
                        <h3>Employees</h3>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="head-link-set">
                        <ul>
                            <li><a class="active" href="#">All</a></li>
                            <li><a href="/assignment">Công việc</a></li>
                            <li><a href="/department">Phòng ban</a></li>
                        </ul>
                        <a class="btn-add" href="#addEmployeeModal" data-toggle="modal"><i data-feather="plus"></i> Thêm
                            mới</a>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-xl-10 col-sm-8 col-12 ">
                    <label class="employee_count">1 Office</label>
                </div>
                <div class="col-xl-1 col-sm-2 col-12 ">
                    <a href="#" class="btn-view active "><i data-feather="grid"></i> </a>
                </div>
                <div class="col-xl-1 col-sm-2 col-12 ">
                    <a href="employee.html" class="btn-view "><i data-feather="list"></i> </a>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card  card-lists">
                        <div class="card-header  ">
                            <h2 class="card-titles">Create New Office</h2>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-8 col-sm-12 col-12 ">
                                    <input type="text" placeholder="Office Name" class="input-form">
                                </div>
                                <div class="col-xl-2 col-sm-6 col-6 ">
                                    <a href="#" class="btn-create ">Create Office </a>
                                </div>
                                <div class="col-xl-2 col-sm-6 col-6 ">
                                    <a href="#" class="btn-cancel ">Cancel </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card">
                        <div class="card-header create-formhead">
                            <h2 class="card-titles">Focus Technologies<span>Head Office</span></h2>
                            <a data-toggle="modal" data-target="#edit" class="edit-link"><i data-feather="edit"></i>
                            </a>
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
                                    <a data-toggle="collapse" href="#table" role="button" aria-expanded="false"
                                        aria-controls="table"><i data-feather="chevron-down"></i></a>
                                </div>
                            </div>
                            <div class="table-responsive collapse show" id="table">
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
        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Edit Office</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup">
                                <label>Office Name</label>
                                <input type="text">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-apply">Apply</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue'
export default {
    name: `DepartmentIndex`,
    components: {
        Header, Sidebar
    },
    mounted() {
        afterRender();
    }
}
</script>