<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <UserHeader></UserHeader>
                <div class="col-xl-12 col-sm-12 col-12 ">
                    <div class="card m-0">
                        <div class="card-body pb-0">
                            <div class="row">
                                <div class="col-xl-6" v-for="assignment in assignmentList">
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="employee-head">
                                                <h2>{{ assignment.taskName }}</h2>

                                                <h2 class="text-warning">Số lượng người: {{ assignment.numberOfUserAssign
                                                }}</h2>
                                                <ul>
                                                    <li><a class="edit_employee" data-toggle="modal" data-target="#edit"><i
                                                                data-feather="edit"></i></a></li>
                                                    <li><a class="edit_delete" data-toggle="modal" data-target="#delete"><i
                                                                data-feather="trash-2"></i></a>
                                                    </li>
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
                                                <a class="btn-addmember" data-toggle="modal" data-target="#addteam" @click="createTaskUser(assignment)">Thêm
                                                    người</a>
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
    </div>


    <div class="customize_popup">
        <div class="modal fade" id="addteam" tabindex="-1" aria-labelledby="staticBackdropLabela" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabela">Create New Team</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup m-0">
                                <input type="text" v-model="task_user.task_id">

                                <select class="select selectRole" id="eplId" name="eplId"
                                    multiple>
                                    <option v-for="epl in listEpl" :value="epl.id">
                                        <label>{{ epl.fullName }}</label>
                                    </option>
                                </select>

                                <div> a : {{ task_user.task_id }}</div>
                                <div> b : {{ task_user.assign_by_id }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
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
                        <h5 class="modal-title" id="staticBackdropLa">Edit Employee</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-md-12 p-0">
                            <div class=" form-popup m-0">
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Add</button>
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
            assignmentList: null,
            listEpl: null
        }
    },
    methods: {
        async getAssignmentList() {
            await axios.get(`assignment/get-all`)
                .then(res => {
                    if (res != null) {
                        this.assignmentList = res.data.data;
                    }
                }).catch(err => console.log(err));
        },

        async getListEpl() {
            await axios.get(`user/get-listEpl`)
                .then(res => {
                    // debugger;
                    if (res != null) {
                        this.listEpl = res.data.data;
                        console.log(this.listEpl)
                    }
                }).catch(err => console.log(err))
        },

        async createTaskUser(taskUser) {
            this.task_user = taskUser;
            debugger;
            console.log(taskUser);
            await axios.post(`task-user/update/`+ taskUser.task_id)
                .then(res => {
                    debugger;
                    if (res != null) {
                        this.task_user.task_id = res.data.task_id,
                            this.task_user.assign_by_id = res.data.assign_by_id
                        // this.getAssignmentList();
                    }
                }).catch(err => console.log(err));
        },

        async deleteAssignment(asmId) {
            await axios.post(`assignment/delete/`+ asmId)
            .then(res => {
                if (res != null) {
                    this.getAssignmentList();
                }
            }).catch(err => console.log(err));
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
        }
    }
}
</script>