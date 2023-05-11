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
                            <li class="breadcrumb-item active"> Đăng ký nghỉ phép</li>
                        </ul>
                        <h3>Đăng ký nghỉ phép</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-titles">Phiếu đăng ký nghỉ phép</h2>
                        </div>
                        <div class="form-creation">
                            <div class="row">
                                <div class="col-xl-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Loại nghỉ phép <span class="mandatory">*</span> </label>
                                        <select class="select chonLoaiNghiPhep">
                                            <option value="" selected>Chọn loại nghỉ phép</option>
                                            <option value="NghiPhep">Nghỉ phép</option>
                                            <option value="LamViecTaiNha">Làm việc tại nhà</option>
                                            <option value="DiCongTac">Đi công tác</option>
                                            <option value="Khac">Khác</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 col-12 formRegisterLeave" style="display: none;">
                                    <div class="form-group">
                                        <label>Remaining Leaves</label>
                                        <input type="text" value="10" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="formRegisterLeave" style="display: none;">
                                <div class="row">
                                    <div class="col-xl-6 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label>Từ ngày </label>
                                            <div class="input-group date datepicker-group datepicker"
                                                data-date-autoclose="true" data-provide="datepicker"
                                                data-date-format="dd/mm/yyyy">
                                                <input class="form-control tuNgay" data-inputmask="'alias': 'date'"
                                                    v-model="leave.dateApply" placeholder="dd/mm/yyyy">
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-secondary" type="button" value="">
                                                        <i class="fa fa-calendar"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label>Đến ngày </label>
                                            <!-- <div class="input-group date datepicker-group datepicker" data-date-autoclose="true"
                                            data-provide="datepicker" data-date-format="dd/mm/yyyy">
                                            <input class="form-control a" placeholder="__/__/____" 
                                            onkeyup=" 
                                            var v = this.value; 
                                            if (v.match(/^\d{2}$/) !== null || v.match(/^\d$/) === true) 
                                            { 
                                                this.value = v + '/'; 
                                            } else if (v.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/) !== null) 
                                            { 
                                                this.value = v + '/'; 
                                            }" 
                                            maxlength="10"
                                            />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" value="">
                                                    <i class="fa fa-calendar"></i>
                                                </button>
                                            </div>
                                        </div> -->
                                            <div class="input-group date datepicker-group datepicker"
                                                data-date-autoclose="true" data-provide="datepicker"
                                                data-date-format="dd/mm/yyyy">
                                                <input class="form-control denNgay" data-inputmask="'alias': 'date'"
                                                    placeholder="dd/mm/yyyy">
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-secondary" type="button" value="">
                                                        <i class="fa fa-calendar"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-xl-6 col-sm-12 col-12 ">
                                        <div class="form-group">
                                            <label>From </label>
                                            <input type="text">
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-xl-6 col-sm-12 col-12 ">
                                        <div class="form-group">
                                            <label>Thời gian ( cả ngày/ nửa ngày ) <span class="mandatory">*</span>
                                            </label>
                                            <select class="form-control" v-model="leave.duration" >
                                                <option value="" disabled selected>Chọn thời gian </option>
                                                <option value="0">Cả ngày</option>
                                                <option value="1">Nửa ngày</option>
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
                                            <label>Chú thích </label>
                                            <textarea rows="4" cols="50" placeholder="Chú thích...">	</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row formRegisterLeave" style="display: none;">
                                <div class="col-xl-12 col-sm-12 col-12 ">
                                    <div class="form-btn">
                                        <a href="#" class="btn btn-apply" @click="createLeave()">Đăng ký</a>
                                        <a href="#" class="btn btn-secondary btnHuyRegisLeave">Hủy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-titles">Phiếu nghỉ phép đang chờ phê duyệt</h2>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-responsive no-footer">
                                    <thead>
                                        <tr>
                                            <th>Ngày</th>
                                            <th style="padding: 12px 150px;">Thời gian gia hạn</th>
                                            <th style="padding: 12px 150px;">Chú thích </th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="leaveNoneApprove in lstLeaveUserNoneApprove">
                                        <tr>
                                            <td><label>{{ leaveNoneApprove.dateApply }} </label></td>
                                            <td style="padding: 12px 150px;"><label>{{ leaveNoneApprove.duration }} </label></td>
                                            <td style="padding: 12px 150px;"><label>Chú thích</label></td>
                                            
                                            <td>
                                                <a class="action_label4" data-toggle="modal" data-target="#deleteLeaveApprove"
                                                    id="xoaLeaveApprove" @click="getLeaveId(leaveNoneApprove.id)">Hủy phiếu<i data-feather="trash-2"></i>
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
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card ">
                        <div class="card-header">
                            <h2 class="card-titles">Danh sách các ngày đã nghỉ</h2>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-responsive no-footer">
                                    <thead>
                                        <tr>
                                            <th>Ngày</th>
                                            <th style="padding: 12px 150px;">Thời gian gia hạn</th>
                                            <th style="padding: 12px 150px;">Chú thích </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="leaveApprove in lstLeaveUserApprove">
                                        <tr>
                                            <td><label>{{ leaveApprove.dateApply }} </label></td>
                                            <td style="padding: 12px 150px;"><label>{{ leaveApprove.duration }} </label></td>
                                            <td style="padding: 12px 150px;"><label>Chú thích</label></td>
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
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header text-centers border-0">
                        <h5 class="modal-title text-center" id="staticBackdropLabels1">Xóa phiếu nghỉ phép này?
                        </h5>
                    </div>
                    <div class="modal-footer text-centers">
                        <button type="button" class="btn btn-primary" data-dismiss="modal"
                            @click="deleteLeave(leaveId)">Xóa</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="customize_popup">
        <div class="modal fade" id="deleteLeaveApprove" tabindex="-1" aria-labelledby="staticBackdropLabels1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header text-centers border-0">
                        <h5 class="modal-title text-center" id="staticBackdropLabels1">Hủy phiếu nghỉ phép này?
                        </h5>
                    </div>
                    <div class="modal-footer text-centers">
                        <button type="button" class="btn btn-primary" data-dismiss="modal"
                            @click="deleteLeaveApprove(leaveId)">Hủy phiếu</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
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
</template>

<script>
import axios from 'axios'
import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue'
export default {
    name: `LeaveRegister`,
    components: {
        Header, Sidebar
    },
    data() {
        return {
            lstLeaveUserNoneApprove: null,
            userId: null,
            lstLeaveUserApprove: null,
            leaveId: null,
            leave: {
                leaveId: 0,
                eplId: ``,
                duration : ``,
                dateApply: ``
            }
        }
    },
    methods: {

        onChange(event){
            this.leave.duration = event.target.value;
            console.log(`userId đây rồi: `+ this.leave.duration);
        },

        getUserIdLocalStorage() {
            this.userId = localStorage.getItem("userId");
            // console.log(`userId đây rồi: `+this.userId);
        },

        async getListLeaveUserNoneApprove(userId) {
            // userId = this.userId;
            // console.log(`userId đây rồi22: `+userId);
            await axios.get(`leave/list-leave-user-none-approve/` + userId)
                .then(res => {
                    this.lstLeaveUserNoneApprove = res.data.data;
                }).catch(err => console.log(err));
        },

        async getListLeaveUserApproveNoneDeleted(userId){
            await axios.get(`leave/list-leave-user-approve/` + userId)
            .then(res => {
                if(res != null){
                    this.lstLeaveUserApprove = res.data.data;
                }
            })
        },

        async getLeaveId(leaveId){
            await axios.get(`leave/`+ leaveId)
            .then(res => {
                if(res != null){
                    this.leaveId = res.data.data.id;
                    console.log(`userId đây rồi: `+this.leaveId);
                }
            }).catch(err => console.log(err));
        },

        async deleteLeaveApprove(leaveId){
            await axios.post(`leave/delete/` + leaveId)
            .catch(err => console.log(err));
            this.getListLeaveUserNoneApprove(this.userId);
        },

        async createLeave(){
            this.leave.eplId = this.userId;
            await axios.post(`leave/add-new`, this.leave)
            .catch(err => console.log(err));
            this.getListLeaveUserNoneApprove(this.userId);
        }
    },
    created() {
        this.getUserIdLocalStorage();
        this.getListLeaveUserNoneApprove(this.userId);
        this.getListLeaveUserApproveNoneDeleted(this.userId)
    },
    mounted(){
        var $this = this;
        afterRender();

        $('.tuNgay').change(function(){
            $this.leave.dateApply = $('.tuNgay').val();
            console.log($this.leave.dateApply);
        })
    },
    updated(){
        afterRender();
    }
}
</script>