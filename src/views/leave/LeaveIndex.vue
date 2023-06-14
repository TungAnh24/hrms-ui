<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 mb-4">
                    <div class="breadcrumb-path ">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="trang-chu"><img src="assets/img/dash.png" class="mr-2"
                                        alt="breadcrumb">Trang chủ</a>
                            </li>
                            <li class="breadcrumb-item active"> Nghỉ phép</li>
                        </ul>
                        <h3>Danh sách nghỉ phép</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- <div class="col-xl-6 col-sm-12 col-12 d-flex	">
						<div class="card card-lists flex-fill">
							<div class="card-header">
								<h2 class="card-titles">Focus Technologies<span>Head Office</span></h2>
								<a class="edit-link" data-toggle="modal" data-target="#editmember"> <i
										data-feather="edit"></i></a>
							</div>
							<div class="card-body d-flex align-items-center">
								<div class=" member-head employee-image">
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
							</div>
						</div>
					</div> -->
                <div class="col-xl-6 col-sm-6 col-12 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <!-- <div class="employee_status text-center">
									<img alt="User Image" src="assets/img/profiles/avatar-17.jpg">
									<label>Jenni Sims is working <br>from home today.</label>
								</div> -->
                            <div style="font-size: 18px; font-weight: bold;">
                                <!-- <img alt="User Image" src="assets/img/profiles/avatar-18.jpg"> -->
                                <label>Tổng số phiếu nghỉ phép cần phê duyệt.</label>
                                <div class="text-center mt-4" style="font-size: 50px;">9</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-sm-6 col-12 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div style="font-size: 18px; font-weight: bold;">
                                <!-- <img alt="User Image" src="assets/img/profiles/avatar-18.jpg"> -->
                                <label>Tổng số phiếu nghỉ phép.</label>
                                <div class="text-center mt-4" style="font-size: 50px;">9</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="row">
					<div class="col-xl-12 col-sm-12 col-12 ">
						<div class="card">
							<div class="card-header">
								<h2 class="card-titles">Apply Leaves</h2>
							</div>
							<div class="form-creation">
								<div class="row">
									<div class="col-xl-6 col-sm-6 col-12 ">
										<div class="form-group">
											<label>Leave Type <span class="mandatory">*</span> </label>
											<select class="select">
												<option value="Select leave">Select leave</option>
												<option value="leave">Casual leave</option>
												<option value="leave">Earned leave</option>
											</select>
										</div>
									</div>
									<div class="col-xl-6 col-sm-6 col-12 ">
										<div class="form-group">
											<label>Remaining Leaves</label>
											<input type="text" value="10" disabled>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xl-6 col-sm-12 col-12 ">
										<div class="form-group">
											<label>From </label>
											<input type="text">
										</div>
									</div>
									<div class="col-xl-6 col-sm-12 col-12 ">
										<div class="form-group">
											<label>To</label>
											<input type="text">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xl-6 col-sm-12 col-12 ">
										<div class="form-group">
											<label>Half Day <span class="mandatory">*</span> </label>
											<select class="select">
												<option value="Select leave">Select </option>
												<option value="leave">Casual leave</option>
												<option value="leave">Earned leave</option>
											</select>
										</div>
									</div>
									<div class="col-xl-6 col-sm-12 col-12 ">
										<div class="form-group">
											<label>Remaining Leaves</label>
											<input type="text" value="2" disabled>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xl-12 col-sm-12 col-12 ">
										<div class="form-group">
											<label>From </label>
											<textarea rows="4" cols="50">	</textarea>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xl-12 col-sm-12 col-12 ">
										<div class="form-btn">
											<a href="#" class="btn btn-apply">Apply</a>
											<a href="#" class="btn btn-secondary">Cancel</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> -->
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-titles">Thống kê danh sách nghỉ phép theo ngày</h2>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table  custom-table  no-footer">
                                    <thead>
                                        <tr>
                                            <th>Ngày</th>
                                            <th>Số người nghỉ </th>
                                            <th>Cả ngày </th>
                                            <th>Nửa ngày </th>
                                            <th>Làm việc ở nhà </th>
                                            <th>Vắng</th>
                                            <th>On site</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><label>05 May 2019 </label></td>
                                            <td><label style="padding: 0 0 0 25%;">7 </label></td>
                                            <td><label style="padding: 0 0 0 25%;">6 </label></td>
                                            <td><label style="padding: 0 0 0 25%;">6 </label></td>
                                            <td><label style="padding: 0 0 0 25%;">1 </label></td>
                                            <td><label style="padding: 0 0 0 25%;">0 </label></td>
                                            <td><label style="padding: 0 0 0 25%;">1 </label></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card ">
                        <div class="card-header">
                            <h2 class="card-titles">Danh sách nghỉ phép cần phê duyệt</h2>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table custom-table  no-footer">
                                    <thead>
                                        <tr>
                                            <th>Họ tên</th>
                                            <th>Loại nghỉ phép </th>
                                            <th>Từ ngày </th>
                                            <th>Đến ngày</th>
                                            <th>Số ngày nghỉ</th>
                                            <th>Số ngày còn lại </th>
                                            <th>Chú thích</th>
                                            <!-- <th>Trạng thái</th>
                                            <th>Thao tác</th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(leaveInActived, index) in listLeaveInActived" :key="index">
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html"><img src="assets/img/profiles/avatar-13.jpg"
                                                            alt="profile" class="img-table"></a>
                                                    <label>{{ leaveInActived.eplName }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <label>{{ leaveInActived.duration }} </label>
                                            </td>
                                            <td>
                                                <label>{{ leaveInActived.dateApply }} </label>
                                            </td>
                                            <td><label>{{ leaveInActived.dateApply }} </label></td>
                                            <td class="text-center"><label>3</label></td>
                                            <td class="text-center"><label>9</label></td>
                                            <td><label>{{ leaveInActived.description }} </label></td>
                                            <td>
                                                <a v-if="leaveInActived.isActivated == false" class="action_label3" id="pheDuyet" @click="approvedLeave(leaveInActived.id)">Phê duyệt</a>
                                            </td>
                                            <td>
                                                <a class="action_label4"
                                                        data-toggle="modal" data-target="#delete" id="xoaLeave" @click="getLeaveById(leaveInActived.id)">Từ chối<i data-feather="trash-2"></i>
                                                    </a>
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
            <div class="modal-dialog modal-lg">
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
    <div class="customize_popup">
        <div class="modal fade" id="editmember" tabindex="-1" aria-labelledby="staticBackdropLabels" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabels">Edit Member</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup">
                                <input type="text" placeholder="Member Name">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="customize_popup">
        <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="staticBackdropLabels1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header text-centers border-0">
                        <h5 class="modal-title text-center" id="staticBackdropLabels1">Xóa phiếu nghỉ phép này?
                        </h5>
                    </div>
                    <div class="modal-footer text-centers">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="deleteLeave(leaveId)">Xóa</button>
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
    name: `LeaveIndex`,
    components: {
        Header, Sidebar
    },
    data() {
        return {
            leaveId: null,
            listLeaveInActived: null
        }
    },
    methods: {
        async getListLeaveInActived() {
            await axios.get(`leave/list-leave-inactive`)
                .then(res => {
                    this.listLeaveInActived = res.data.data;
                })
        },

        async getLeaveById(leaveId){
            await axios.get(`leave/` + leaveId)
            .then(res => {
                this.leaveId = res.data.data.id;
                console.log(`leaveId đây rồi ` + this.leaveId)
            }).catch(err => console.log(err));
        },

        async approvedLeave(leaveId){
            await axios.post(`leave/approved/`+ leaveId)
            .catch(err => console.log(err));
            this.getListLeaveInActived();
        },

        async deleteLeave(leaveId){
            await axios.post(`leave/delete/` + leaveId)
            .catch(err => console.log(err));
            this.getListLeaveInActived()
        }
    },
    created() {
        this.getListLeaveInActived();
    },
    updated(){
        afterRender();
    },
    mounted() {
        afterRender();
    }
}
</script>

<style>
#pheDuyet:hover{
    background: transparent;
    border-color: rgb(145, 185, 237);
    color: #3A3B3F;
    background-color: #22af46;
}
#xoaLeave:hover{
    background: transparent;
    border-color: rgb(220, 68, 71);
    color: #3A3B3F;
    background-color: #dc3545;
}
</style>