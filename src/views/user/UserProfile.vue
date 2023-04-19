<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <!-- <div class="page-wrapper">
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
    </div> -->


    <section style="background-color: #eee;">
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">User</a></li>
                            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
                            <h5 class="my-3">John Smith</h5>
                            <p class="text-muted mb-1">Full Stack Developer</p>
                            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                            <div class="d-flex justify-content-center mb-2">
                                <button type="button" class="btn btn-primary">Follow</button>
                                <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4 mb-lg-0">
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush rounded-3">
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fas fa-globe fa-lg text-warning"></i>
                                    <p class="mb-0">https://mdbootstrap.com</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                                    <p class="mb-0">mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                                    <p class="mb-0">@mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                                    <p class="mb-0">mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
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
                                    <p class="mb-0">Full Name</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Johnatan Smith</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">example@example.com</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Phone</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(097) 234-5678</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Mobile</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(098) 765-4321</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Address</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4 mb-md-0">
                                <div class="card-body">
                                    <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project
                                        Status
                                    </p>
                                    <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                                    <div class="progress rounded mb-2" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4 mb-md-0">
                                <div class="card-body">
                                    <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project
                                        Status
                                    </p>
                                    <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                                    <div class="progress rounded mb-2" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
export default {
    name: `UserProfile`,
    components: {
        Header, Sidebar
    },
    data() {
        return {
            user: null
        }
    },
}
</script>