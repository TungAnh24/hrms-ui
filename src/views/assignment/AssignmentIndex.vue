<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <!-- <UserHeader></UserHeader> -->
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="breadcrumb-path ">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><img src="assets/img/dash.png" class="mr-2"
                                        alt="breadcrumb" />Trang chủ</a>
                            </li>
                            <li class="breadcrumb-item active"> Công việc</li>
                        </ul>
                        <h3>Danh sách công việc</h3>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="head-link-set">
                        <ul>
                            <li><a href="/nhan-vien">All</a></li>
                            <li><a class="active" href="/cong-viec">Công việc</a></li>
                            <li><a href="/van-phong">Phòng ban</a></li>
                        </ul>
                        <a class="btn-add" data-toggle="modal" data-target="#addAsm"><i data-feather="plus"></i>
                            Thêm mới</a>
                    </div>
                </div>
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card m-0">
                        <div class="card-body pb-0">
                            <div class="row">
                                <div class="col-xl-6 asmItem" v-for="(assignment, index) in assignmentList" :key="index">
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="employee-head">
                                                <h2>{{ assignment.taskName }}</h2>

                                                <h2 class="text-warning">Số lượng người: {{ assignment.numberOfUserAssign
                                                }}</h2>
                                                <ul>
                                                    <li><a @click="getAssignmentById(assignment.asmId), getListUserInAsm(assignment.asmId)"
                                                            class="edit_employee" data-toggle="modal" data-target="#edit"
                                                            title="Sửa"><i data-feather="edit"></i></a></li>
                                                    <li><a @click="getAssignmentById(assignment.asmId)" class="edit_delete"
                                                            data-toggle="modal" data-target="#delete" title="Xóa"><i
                                                                data-feather="trash-2"></i></a>
                                                    </li>
                                                    <!-- <li><a @click="getAssignmentById(assignment.asmId)" class="edit_info" data-toggle="modal" data-target="#info"><i
                                                                data-feather="info"></i></a>
                                                    </li> -->
                                                    <!-- <div class="member_link">
                                                        <a data-toggle="collapse" :href=hrefinfoAsm role="button"
                                                            @click="getIndexHrefInfoAsm(index)" aria-expanded="false" aria-controls="table"><i
                                                                data-feather="chevron-down"></i></a>
                                                    </div> -->
                                                    <li>

                                                        <a href="javascript://" title="Thông tin"
                                                            @click="toggleTable($event), getListUserInAsm(assignment.asmId)"
                                                            id="infoAsm"><i data-feather="info"></i></a>
                                                        <!-- <a data-toggle="collapse" :href=hrefinfoAsm role="button"
                                                            @click="getAssignmentById(assignment.asmId)" aria-expanded="true"
                                                            aria-controls="true"><i data-feather="chevron-down"></i></a> -->
                                                    </li>
                                                    <!-- <li>
                                                        <a role="button" aria-expanded="false" aria-controls="table" id="asmInfo"
                                                            :itemClickAsmInfo=index ><i data-feather="info"></i></a>
                                                    </li> -->
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="employee-content">
                                                <div class="employee-image">
                                                    <div class="avatar-group">
                                                        <div class="avatar avatar-xs group_img group_header">
                                                            <img class="avatar-img rounded-circle" alt="User Image"
                                                                src="assets/img/profiles/avatar-14.jpg">
                                                        </div>
                                                        <div class="avatar avatar-xs group_img group_header">
                                                            <img class="avatar-img rounded-circle" alt="User Image"
                                                                src="assets/img/profiles/avatar-15.jpg">
                                                        </div>
                                                        <div
                                                            style="padding-left: 70px; display: flex; flex-direction: column;">
                                                            <p class="text-primary"
                                                                style="font-size: large; font-weight: bold;"> Quản lý: {{
                                                                    assignment.assignByUserName }}</p>

                                                            <p class="mt-1" style="font-size: larger;">{{
                                                                assignment.taskDescription }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <Router-link :to="{path: '/assignment/edit/' + assignment.asmId}" @click="getTaskById(assignment.asmId)" class="btn-addmember" data-toggle="modal" data-target="#addteam">
                                                    Thêm người
                                                </Router-link> -->
                                                <!-- <a class="btn-addmember" data-toggle="modal" data-target="#addteam"
                                                    @click="getTaskById(assignment.asmId)">Thêm
                                                    người</a> -->
                                                <a class="btn-addmember" data-toggle="modal" data-target="#addPerson"
                                                    @click="getAssignmentById(assignment.asmId)">Thêm
                                                    người</a>
                                            </div>
                                        </div>
                                        <!-- info department -->
                                        <div class="table-responsive activity_scroll" :id=assignment.taskName
                                            style="width: 100%; display: none;">
                                            <table class="table custom-table  no-footer">
                                                <thead>
                                                    <tr>
                                                        <!-- <th>STT</th> -->
                                                        <th>Họ tên</th>
                                                        <th>Điện thoại</th>
                                                        <th>Email</th>
                                                        <th class="d-flex justify-content-center">Chi tiết</th>
                                                        <!-- <th>Tài khoản</th>
                                                        <th>Vị trí</th>
                                                        <th>Trạng thái</th> -->
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(user, indexU_Asm) in userListInAsm" :key="indexU_Asm">
                                                        <!-- <td>{{ indexU_Asm + 1}}</td> -->
                                                        <td>
                                                            <div class="table-img">
                                                                <a href="profile.html">
                                                                    <img src="assets/img/profiles/avatar-13.jpg"
                                                                        alt="profile" class="img-table" />
                                                                </a>
                                                                <!-- <label>{{ user.fullName }}</label> -->
                                                                <label>{{ user.fullName }}</label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <!-- <label class="action_label">{{ user.phone }} </label> -->
                                                            <label>{{ user.phone }}</label>
                                                        </td>
                                                        <td>
                                                            <!-- <label class="action_label2">{{ user.email }} </label> -->
                                                            <label>{{ user.email }}</label>
                                                        </td>
                                                        <td>
                                                            <a @click="getUserInfo(user.id)" data-target="#userProfile"
                                                                class="d-flex justify-content-center"
                                                                style="align-items: center;" data-toggle="modal"
                                                                title="Thông tin">
                                                                <i class="fa-solid fa-circle-info"
                                                                    style="color: #2883fb;"></i>
                                                            </a>
                                                        </td>
                                                        <!-- <td><label>{{ user.username }} </label></td>
                                                        <td><label>{{ user.username }}</label></td>
                                                        <td><label>Test đã</label></td>
                                                        <td class="tab-select">
                                                            <select class="select">
                                                                <option value="active">Active</option>
                                                                <option value="inactive">Inactive</option>
                                                            </select>
                                                        </td> -->
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
            </div>
        </div>
    </div>

    <!-- Tạo mới Assignment -->
    <div class="customize_popup">
        <div class="modal fade" id="addAsm" tabindex="-1" aria-labelledby="staticBackdropLabela" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabela">Tạo công việc mới</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup m-0">
                                <div class="row">
                                    <label class="lable-form col-md-3 pt-2">Tên công việc: </label>
                                    <input class="col-md-9 form-control" v-model="assignmentEdit.taskName"
                                        placeholder="Tên công việc...">
                                </div>

                                <div class="row mt-3">
                                    <label class="lable-form col-md-3 pt-2">Chú thích: </label>
                                    <input class="col-md-9 form-control" v-model="assignmentEdit.description"
                                        placeholder="Chú thích...">
                                </div>

                                <!-- <div class="row mt-3">
                                    <label class="lable-form col-md-3 pt-2">Nhân viên: </label>
                                    <div class="col-md-9" style="padding-left: 0px; padding-right: 0px;">
                                        <select class="select selectRole form-control" id="eplId" style="height: 40px;"
                                            name="eplId">
                                            <option selected disabled>Chọn nhân viên</option>
                                            <option style="height: 40px;" v-for="epl in listEpl" :value="epl.id">
                                                <label>{{ epl.fullName }}</label>
                                            </option>
                                        </select>
                                    </div>
                                </div> -->

                                <div> a : {{ assignmentEdit.taskName }}</div>
                                <div> b : {{ assignmentEdit.description }}</div>
                                <div> c : {{ task_user.assign_by_id }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal"
                            @click="createAssignment()">Thêm</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="customize_popup">
        <div class="modal fade" id="addPerson" tabindex="-1" aria-labelledby="staticBackdropLabela" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabela">Thêm thành viên công việc</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup m-0">
                                <div class="row">
                                    <label class="lable-form col-md-3">Tên công việc: </label>
                                    <input class="col-md-9 form-control" readonly v-model="taskNameExist">
                                </div>
                                <input hidden readonly class="form-group" type="text" v-model="task_user.task_id">

                                <div class="row mt-3">
                                    <label class="lable-form col-md-3">Nhân viên: </label>
                                    <div class="col-md-9" style="padding-left: 0px; padding-right: 0px;">
                                        <select class="select selectRole form-control" id="eplId" name="eplId">\
                                            <option selected disabled>Chọn nhân viên</option>
                                            <option style="height: 40px;" v-for="epl in listEpl" :value="epl.id">
                                                <label>{{ epl.fullName }}</label>
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div> a : {{ task_user.task_id }}</div>
                                <div> b : {{ task_user.assign_by_id }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal"
                            @click="updateTaskUser(taskIdDelete)">Thêm</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="customize_popup">
        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="staticBackdropLa" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLa">Chỉnh sửa công việc</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup m-0">
                                <input class="col-md-12 form-control" placeholder="Tên công việc"
                                    v-model="assignmentEdit.taskName">
                            </div>
                            <div class=" form-popup mt-2 m-0">
                                <input class="col-md-12 form-control" placeholder="Chú thích"
                                    v-model="assignmentEdit.description">
                            </div>
                        </div>
                    </div>
                    <!-- Bổ sung -->
                    <div class="table-responsive activity_scroll">
                        <table class="table custom-table  no-footer" style="font-size: 12px;">
                            <thead>
                                <tr>
                                    <!-- <th>STT</th> -->
                                    <th>Họ tên</th>
                                    <th>Điện thoại</th>
                                    <th>Email</th>
                                    <!-- <th class="d-flex justify-content-center">Chi tiết</th> -->
                                    <!-- <th>Tài khoản</th>
                                                        <th>Vị trí</th>
                                                        <th>Trạng thái</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, indexU_Asm) in userListInAsm" :key="indexU_Asm">
                                    <!-- <td>{{ indexU_Asm + 1}}</td> -->
                                    <td>
                                        <div class="table-img">
                                            <a href="profile.html">
                                                <img src="assets/img/profiles/avatar-13.jpg" alt="profile"
                                                    class="img-table" />
                                            </a>
                                            <!-- <label>{{ user.fullName }}</label> -->
                                            <label>{{ user.fullName }}</label>
                                        </div>
                                    </td>
                                    <td>
                                        <!-- <label class="action_label">{{ user.phone }} </label> -->
                                        <label>{{ user.phone }}</label>
                                    </td>
                                    <td>
                                        <!-- <label class="action_label2">{{ user.email }} </label> -->
                                        <label>{{ user.email }}</label>
                                    </td>
                                    <!-- <td>
                                        <a @click="getUserInfo(user.id)" data-target="#userProfile"
                                            class="d-flex justify-content-center" style="align-items: center;"
                                            data-toggle="modal" title="Thông tin">
                                            <i class="fa-solid fa-circle-info" style="color: #2883fb;"></i>
                                        </a>
                                    </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal"
                            @click="updateAssingment(asmIdEdit)">sửa</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
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
                        <h5 class="modal-title text-center" id="staticBackdropLabels1">Bạn có chắc chắn xóa công việc
                            này?
                        </h5>
                    </div>
                    <div class="modal-footer text-centers">
                        <button type="button" class="btn btn-primary" @click="deleteAssignment(taskIdDelete)"
                            data-dismiss="modal">Xóa</button>
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
                                            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/337653271_870564127371622_2229865266489732045_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7bc6BpDgbc8AX-jvkgl&_nc_ht=scontent.fhan2-4.fna&oh=00_AfB7nP-ui97_sbnLKwJqo0r-LrSXjeaGcC5MNrHQg3DiRg&oe=644B95F4"
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
                                            <ul class="list-group list-group-flush rounded-3">
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
import UserHeader from '../user/UserHeader.vue';
import axios from 'axios';
import { thisExpression } from '@babel/types';
export default {
    name: `AssignmentIndex`,
    components: {
        Header, Sidebar, UserHeader
    },
    data() {
        return {
            task_user: {
                task_id: ``,
                assign_by_id: ``
            },
            assignmentEdit: {
                taskName: ``,
                description: ``
            },
            assignmentList: {
                isActivated: ``,
                taskDescription: ``,
                taskName: ``,
                assignByUserName: ``,
                numberOfUserAssign: ``,
                asmId: ``
            },
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
            },
            asmIdEdit: null,
            taskIdDelete: null,
            taskNameExist: null,
            listEpl: null,
            hrefinfoAsm: null,
            userListInAsm: null
        }
    },
    methods: {
        async getIndexHrefInfoAsm(indexx) {
            await axios.get(`assignment/get-all`)
                .then(res => {
                    if (res != null) {
                        // debugger;
                        this.assignmentList = res.data.data;
                    }
                    this.hrefinfoAsm = `#` + this.assignmentList[indexx].taskName;
                    console.log('href day rồi: ' + this.hrefinfoAsm);
                    console.log(res.data.code);
                }).catch(err => console.log(err));
        },

        async getAssignmentList() {
            await axios.get(`assignment/get-all`)
                .then(res => {
                    if (res != null) {
                        this.assignmentList = res.data.data;
                        this.hrefinfoAsm = `#` + this.assignmentList.taskName;
                        console.log(this.assignmentList.taskName);
                        console.log(res.data.code);
                    }
                }).catch(err => console.log(err));
        },

        async getListEpl() {
            await axios.get(`user/get-listEpl`)
                .then(res => {
                    // debugger;
                    if (res != null) {
                        this.listEpl = res.data.data;
                        // console.log(this.listEpl)
                    }
                }).catch(err => console.log(err))
        },

        async createTaskUser(taskId) {
            this.task_user.task_id = taskId;
            // debugger;
            // console.log(taskUser);
            // await axios.post(`task-user/update/` + taskUser.task_id)
            //     .then(res => {
            //         // debugger;
            //         if (res != null) {
            //             this.task_user.task_id = res.data.task_id,
            //                 this.task_user.assign_by_id = res.data.assign_by_id
            //             // this.getAssignmentList();
            //         }
            //     }).catch(err => console.log(err));
        },

        async createAssignment(){
            await axios.post(`assignment/add-new`, this.assignmentEdit)
            .then((res) => {
                if(res){
                    this.$router.push(`/assignment`);
                    console.log(`assnm` + res.data.data.taskName);
                    this.getAssignmentList();
                }
            }).catch(err => console.log(err));
        },

        async getAssignmentById(asmId) {
            await axios.get(`assignment/getById/` + asmId)
                .then(res => {
                    if (res != null) {
                        this.asmIdEdit = res.data.data.id;
                        this.task_user.task_id = res.data.data.id;
                        this.taskNameExist = res.data.data.taskName;
                        this.taskIdDelete = res.data.data.id;
                        this.assignmentEdit = res.data.data;
                        this.assignmentEdit.description = res.data.data.taskDescription;
                        this.hrefinfoAsm = `#` + res.data.data.taskName;
                    }
                }).catch(err => console.log(err));
        },

        async getTaskById(taskId) {
            // debugger;
            console.log(taskId);
            await axios.get(`task-user/getTaskUserByTaskId/` + taskId)
                .then(res => {
                    // debugger;
                    if (res != null) {
                        // console.log('fdsdfdsfs' + res.data.data.taskId)

                        // this.task_user.task_id = res.data.data.taskId;
                        // this.taskNameExist = res.data.data.taskName;
                        // console.log(`bbbb: ` + res.data.taskName)
                        // this.task_user.task_id = res.data.task_id,
                        //     this.task_user.assign_by_id = res.data.assign_by_id
                        // this.getAssignmentList();
                    }
                }).catch(err => console.log(err));
        },

        async updateTaskUser() {
            await axios.post(`task-user/add-new`, this.task_user)
                .then(res => {
                    console.log(res.data.data);
                }).catch(err => console.log(err));
            $("#eplId").prop('selectedIndex', 0);
            this.getAssignmentList();
        },

        async updateAssingment(asmId) {
            await axios.post(`assignment/update/` + asmId, this.assignmentEdit)
                .then(res => {
                    this.assignmentEdit = res.data.data;
                }).catch(err => console.log(err));
            this.getAssignmentList();
        },

        async deleteAssignment(asmId) {
            // debugger;
            await axios.post(`assignment/delete/` + asmId)
                .then(res => {
                    if (res != null) {
                        this.getAssignmentList();
                    }
                }).catch(err => console.log(err));
        },

        async getListUserInAsm(asmId) {
            // debugger;
            await axios.get(`assignment/getListUserBy/` + asmId)
                .then(res => {
                    if (res != null) {
                        this.userListInAsm = res.data.data;
                        console.log(`ussrlistAsm đây rồi: ` + asmId);
                    }
                }).catch(err => {
                    console.log(err);
                })
        },

        async getUserInfo(userId) {
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
                        console.log(`usserId Info đây rồi: ` + userId);
                        console.log(`userInfo đây rồi: ` + this.userInfo.fullName);
                        console.log(`userInfo rolename đây rồi: ` + this.userInfo.role);
                    }
                }).catch(err => console.log(err));
        },

        toggleTable(event) {
            $(event.target).parents(".card-header").parent(".card").find(".table-responsive").slideToggle();
        }

    },
    created() {
        this.getAssignmentList();
        this.getListEpl();
    },
    updated() {
        afterRender();
    },
    mounted() {
        var $this = this;
        if ($("#eplId").length > 0) {
            $('#eplId').change(function () {
                var eplId = $('#eplId').val();
                $this.task_user.assign_by_id = eplId;
            });
        };
        afterRender();
    }
}
</script>

<style>
.employee-head h2 {
    font-size: 18px;
}</style>