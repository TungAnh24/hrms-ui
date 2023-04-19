<template>
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
</template>

<script>

import axios from 'axios'
export default {
    name: `AssignmentEdit`,
    data() {
        return {
            task_user: {
                task_id: ``,
                assign_by_id: ``
            },
            listEpl: null
        }
    },
    methods: {
        
        async getListEpl() {
            await axios.get(`user/get-listEpl`)
                .then(res => {
                    // debugger;
                    if (res != null) {
                        this.listEpl = res.data.data;
                    }
                }).catch(err => console.log(err))
        },

        async getTaskById(itemTaskUser) {
            // this.task_user = itemTaskUser;
            // debugger;
            console.log(itemTaskUser);
            await axios.post(`task-user/getTaskUserByTaskId/`+ itemTaskUser.taskId)
                .then(res => {
                    debugger;
                    if (res != null) {
                        console.log('fdsdfdsfs'+res.data.data)
                        // this.task_user.task_id = res.data.task_id,
                        //     this.task_user.assign_by_id = res.data.assign_by_id
                        // this.getAssignmentList();
                    }
                }).catch(err => console.log(err));
        },
    },
    created() {
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