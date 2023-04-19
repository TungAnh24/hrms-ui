<template>
	<div class="col-xl-12 col-sm-12 col-12">
		<div class="breadcrumb-path mb-4">
			<ul class="breadcrumb">
				<li class="breadcrumb-item"><a href="/trang-chu"><img src="assets/img/dash.png" class="mr-2"
							alt="breadcrumb" />Trang chủ</a>
				</li>
				<li class="breadcrumb-item active"> Nhân viên</li>
			</ul>
			<h3>Nhân viên</h3>
		</div>
	</div>
	<div class="col-xl-12 col-sm-12 col-12 mb-4">
		<div class="head-link-set">
			<ul>
				<li><a class="active" href="#">All</a></li>
				<li><a href="/assignment">Công việc</a></li>
				<li><a href="/department">Phòng ban</a></li>
			</ul>
			<a class="btn-add" href="#addEmployeeModal" data-toggle="modal"><i data-feather="plus"></i> Thêm mới</a>
		</div>
	</div>

	<!-- Edit Modal HTML -->
	<div id="addEmployeeModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">
						<h4 class="modal-title">Add Employee</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<div class="col-xl-12 col-sm-12 col-12 ">
							<div class="card ">
								<div class="card-header">
									<h2 class="card-titles">Employment Details<span>Let everyone know the essentials so
											they're fully prepared.</span></h2>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-xl-5 col-sm-12 col-12 ">
											<div class="form-group">
												<input type="text" placeholder="Tên tài khoản" v-model="user.userName">
											</div>
									</div>
									<div class="col-xl-4 col-sm-12 col-12 ">
										<div class="form-group">
											<input type="text" placeholder="Mật khẩu" v-model="user.password">
											</div>
										</div>
										<div class="col-xl-3 col-sm-12 col-12 ">
											<div class="form-group">
												<select v-model="user.rolesId" class="select selectRole" id="rolesId" name="rolesId" multiple style="min-height: 70px;">
														<option v-for="role in roleList" :value="role.id">
															<label>{{ role.roleName }}</label>
														</option>
													</select>
												<!-- <select v-model="user.rolesId" class="selectpicker" multiple>
													<option v-for="role in roleList" :value="role.id">
															<label>{{ role.roleName }}</label>
														</option>
												</select> -->
											</div>
										</div>
									</div>
									<div class="row">	
										<div class="col-xl-5 col-sm-12 col-12 ">
											<div class="form-group">
												<input type="text" placeholder="Họ tên" v-model="user.fullName">
											</div>
										</div>
										<div class="col-xl-7 col-sm-12 col-12 ">
											<div class="form-group">
												<input type="text" placeholder="Địa chỉ" v-model="user.address">
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-xl-5 col-sm-12 col-12 ">
											<div class="form-group">
												<input type="text" placeholder="Số điện thoại" v-model="user.phone">
											</div>
										</div>
										<div class="col-xl-7 col-sm-12 col-12 ">
											<div class="form-group">
												<input type="text" placeholder="Email" v-model="user.email">
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-xl-5 col-sm-12 col-12 ">
											<div class="form-group">
												<input type="text" placeholder="Số tài khoản" v-model="user.bankAccount">
											</div>
										</div>
										<div class="col-xl-7 col-sm-12 col-12 ">
											<div class="form-group">
												<select id="bankId" name="bankId" v-model="user.bankShortName"
													class="selectBank" style="width: 100%;">
													<option disabled>Ngân hàng</option>
													<option class="bankInfo" :linkIcon=bank.logo :bankFullName=bank.name v-for="bank in bankList"
														:key="bank.shortName" :value="bank.shortName">
														{{ bank.name }}
													</option>
												</select>
											</div>
										</div>
										<p>Bank account: {{ user.bankAccount }}</p>
										<p>RoleIds: {{ user.rolesId }}</p>
										<p>Bank shortName: {{ user.bankShortName }}</p>
										<p>Bank fullName: {{ user.bankFullName }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
						<input type="button" class="btn btn-success" data-dismiss="modal" @click="createUser()" value="Thêm">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: `UserHeader`,
	data() {
		return {
			user: {
				userName: ``,
				fullName: ``,
				password: ``,
				email: ``,
				phone: ``,
				address: ``,
				bankAccount: ``,
				bankFullName: ``,
				bankShortName: ``,
				rolesId: []
			},
			roleList: null,
			bankList: null,
			userList: null,
			totalItems: null
		}
	},
	methods: {
		async createUser() {
			await axios.post(`user/create-user`, this.user)
				.then((res) => {
					if (res) {
						this.$router.push("/user-list");
						console.log(res.data);
						// this.getUserList();
					}
				})
				.catch((error) => console.log(error));
		},

		async getListRole() {
			await axios.get(`role/get-all`)
				.then(res => {
					if (res != null) {
						this.roleList = res.data.data;
						// console.log(this.roleList)
					}
				}).catch((error) => {
					console.log(error)
				})
		},

		async getListBank() {
			await axios.get(`https://api.vietqr.io/v2/banks`)
				.then((res) => {
					if (res != null) {
						this.bankList = res.data.data;
						// console.log(this.bankList)
					}
				}).catch(err => console.log(err));
		},   
		
		async getUserList() {
            await axios.get(`/user/get-all`)
                .then(res => {
                    if (res != null) {
                        this.userList = res.data.data;
						this.totalItems = res.data.totalItems;
                    }
                }).catch(err => {
                    console.log(err);
                })
        },

		onChange(event){ 
			alert(123);
			// event = $("#rolesId").val();
			// console.log(event)
			// // this.user.bankShortName = event.target.value
			// this.user.rolesId = event;
		}
	},
	created() {
		this.getListRole();
		this.getListBank();
	}, 
	mounted(){  
		var $this = this;
		if ($("#rolesId").length > 0){
			$('#rolesId').change(function(){
				var roleId = $('#rolesId').val();
				$this.user.rolesId = roleId;
			});
		}
		
		if ($("#bankId").length > 0){
			$('#bankId').change(function(){
				var bankShortName = $('#bankId').val();
				$this.user.bankShortName = bankShortName;
				// var bankFullname = $('.bankInfo').attr('bankFullName');
				var bankFullname = $("#bankId option:selected").text();
				$this.user.bankFullName = bankFullname;
			}) 
		}
	},
} 



</script>