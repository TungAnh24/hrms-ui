<template>

    <Header></Header>
    <Sidebar></Sidebar>
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="breadcrumb-path mb-4">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><img src="assets/img/dash.png" class="mr-2"
                                        alt="breadcrumb">Home</a>
                            </li>
                            <li class="breadcrumb-item active"> Profile</li>
                        </ul>
                        <h3>Profile </h3>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="head-link-set">
                        <ul>
                            <li><a class="active" href="#">Employement</a></li>
                            <li><a href="profile-detail.html">Detail</a></li>
                            <li><a href="profile-document.html">Document</a></li>
                            <li><a href="profile-payroll.html">Payroll</a></li>
                            <li><a href="profile-timeoff.html">Timeoff</a></li>
                            <li><a href="profile-review.html">Reviews</a></li>
                            <li><a href="profile-setting.html">Settings</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="row">
                        <div class="col-xl-6 col-sm-12 col-12 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <h2 class="card-titles">Add Maria Cotton to Another Team</h2>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <select class="select">
                                            <option value="Select leave">Select Team</option>
                                            <option value="leave">Team A</option>
                                            <option value="leave">Team B</option>
                                        </select>
                                    </div>
                                    <div class="form-btn">
                                        <a href="#" class="btn btn-applys">New Team</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-sm-12 col-12 d-flex">
                            <div class="card card-lists flex-fill">
                                <div class="card-header">
                                    <h2 class="card-titles">PHP Team</h2>
                                    <ul>
                                        <li><a class="edit-link" data-toggle="modal" data-target="#edit_working"><i
                                                    data-feather="edit"></i></a></li>
                                        <li><a class="delete-link" data-toggle="modal" data-target="#delete"><i
                                                    data-feather="trash-2"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body d-flex align-items-center">
                                    <div class="member-img">
                                        <img src="assets/img/profiles/avatar-14.jpg" alt="profile" class="mr-3">
                                        <label>Maria Cotton</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card card-lists flex-fill">
                        <div class="card-header">
                            <h2 class="card-titles">Focus Technologies<span>Head Office</span></h2>
                            <a class="btn btn-header" data-toggle="modal" data-target="#changeoffice">Change
                                Office</a>
                        </div>
                        <div class="card-body d-flex align-items-center justify-content-between">
                            <div class="member-head employee-image">
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
                                <a class="btn btn-visit">Visit Office</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="row">
                        <div class="col-xl-6 col-sm-12 col-12 d-flex">
                            <div class="card card-lists flex-fill">
                                <div class="card-header">
                                    <h2 class="card-titles">Maria Cotton's Manager</h2>
                                    <ul>
                                        <li><a class="edit-link" data-toggle="modal" data-target="#changemanager"><i
                                                    data-feather="edit"></i></a></li>
                                        <li><a class="delete-link" data-toggle="modal" data-target="#delete"><i
                                                    data-feather="trash-2"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="member-formcontent  border-0 ">
                                        <div class="member-imgs">
                                            <img src="assets/img/profiles/avatar-14.jpg" alt="profile" />
                                            <div class="member-name">
                                                <label>Maria Cotton</label>
                                                <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="056864776c64666a71716a6b45607d64687569602b666a68">[email&#160;protected]</a></span>
                                            </div>
                                        </div>
                                        <div class="member-btn">
                                            <a href="#" class="btn btn-applys" data-toggle="modal"
                                                data-target="#changemanager">Change Manager</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-sm-12 col-12 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <h2 class="card-titles">Who Reports to Maria Cotton</h2>
                                </div>
                                <div class="card-body">
                                    <div class="member-formcontent ">
                                        <div class="avatar-group">
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                    src="assets/img/profiles/avatar-14.jpg">
                                            </div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                    src="assets/img/profiles/avatar-10.jpg">
                                            </div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                    src="assets/img/profiles/avatar-15.jpg">
                                            </div>
                                        </div>
                                        <div class="member-btn">
                                            <a href="#" class="btn btn-applys">Add people</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="row">
                        <div class="col-xl-6 col-sm-12 col-12 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <h2 class="card-titles">Position</h2>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <input type="text" placeholder="Job Title" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Permanent" />
                                    </div>
                                    <div class="form-btn">
                                        <a href="#" class="btn btn-applys">PHP Team Lead</a>
                                        <a href="#" class="btn btn-applys">Permanent</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-sm-12 col-12 d-flex">
                            <div class="card card-lists flex-fill">
                                <div class="card-header">
                                    <h2 class="card-titles">Working Week<span>Set the dates that your company
                                            works.</span></h2>
                                    <a class="edit-link" data-toggle="modal" data-target="#edit_workings"><i
                                            data-feather="edit"></i></a>
                                </div>
                                <div class="card-body d-flex ">
                                    <div class="form-week">
                                        <ul>
                                            <li><a class="active">Mon</a></li>
                                            <li><a class="active">Tue</a></li>
                                            <li><a class="active">Wed</a></li>
                                            <li><a class="active">Thur</a></li>
                                            <li><a class="active">Fri</a></li>
                                            <li><a class="inactive">Sat</a></li>
                                            <li><a class="inactive">Sun</a></li>
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


    <div class="customize_popup">
        <div class="modal fade" id="add_company" data-backdrop="static" data-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabeladd" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabeladd">Company Default</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup">
                                <label>Time Off Allowance</label>
                                <input type="text" placeholder="" value="25 days">
                            </div>
                            <div class=" form-popup">
                                <label>Year Start</label>
                                <input type="text" placeholder="" value="01-01-2021">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Apply</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="customize_popup">
        <div class="modal fade" id="edit_working" tabindex="-1" aria-labelledby="staticBackdropL" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropL">Change Team</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup form-group">
                                <select class="select">
                                    <option selected>PHP</option>
                                    <option>IOS</option>
                                    <option>Design</option>
                                    <option>Testing</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="customize_popup">
        <div class="modal fade" id="changemanager" tabindex="-1" aria-labelledby="staticBackdropLa" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLa">Change Manager</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup form-group">
                                <select class="select">
                                    <option selected>Richard Wilson</option>
                                    <option>Danny Ward</option>
                                    <option>Linda Craver</option>
                                    <option>John Gibbs</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="customize_popup">
        <div class="modal fade" id="changeoffice" tabindex="-1" aria-labelledby="staticBackdropLab" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLab">Change Office</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup form-group">
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="customize_popup">
        <div class="modal fade" id="position" tabindex="-1" aria-labelledby="staticBackdropLabe" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabe">Edit Position</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup form-group">
                                <input type="text" placeholder="Job Title">
                            </div>
                            <div class=" form-popup form-group">
                                <input type="text" placeholder="Permanent">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="customize_popup">
        <div class="modal fade" id="adddpeople" tabindex="-1" aria-labelledby="staticB" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticB">Add People</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup form-group">
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="customize_popup">
        <div class="modal fade" id="edit_workings" tabindex="-1" aria-labelledby="staticBackd" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackd">Edit Working Week</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class="checkworking">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="mon" checked>
                                        <label for="mon">Mon</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="tue" checked>
                                        <label for="tue">Tue</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="wed" checked>
                                        <label for="wed">Wed</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="thur" checked>
                                        <label for="thur">Thur</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="fri" checked>
                                        <label for="fri">Fri</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="sat">
                                        <label for="sat">Sat</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="sun">
                                        <label for="sun">Sun</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
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
                        <h5 class="modal-title text-center" id="staticBackdropLabels1">Are You Sure Want to Delete?
                        </h5>
                    </div>
                    <div class="modal-footer text-centers">
                        <button type="button" class="btn btn-primary">Delete</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
export default {
    name: `UserProfile`,
    components: {
        Header, Sidebar
    },
    data(){
        return {
            user: null
        }
    },
}
</script>