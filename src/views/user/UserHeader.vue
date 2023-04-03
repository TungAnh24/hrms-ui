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
				<li><a href="employee-team.html">Teams</a></li>
				<li><a href="employee-office.html">Offices</a></li>
			</ul>
			<a class="btn-add" href="#addEmployeeModal" data-toggle="modal"><i data-feather="plus"></i> Thêm mới</a>
		</div>
	</div>

	<!-- Edit Modal HTML -->
	<div id="addEmployeeModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent="createUser()">
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
												<select v-model="user.rolesId" :options="roleList" class="selectRole" name="rolesId" multiple="multiple" style="min-height: 70px;">
													<option v-for="role in roleList" :value="role.id">
														<label>{{ role.roleName }}</label>
													</option>
												</select>
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
													class=" selectBank" style="width: 100%;">
													<option disabled>Ngân hàng</option>
													<option :linkIcon=bank.logo v-for="bank in bankList"
														:key="bank.shortName" :value="bank.shortName">
														{{ bank.name }} ( {{ bank.shortName }} )
													</option>
												</select>
											</div>
										</div>
										<p>Bank account: {{ user.bankAccount }}</p>
										<p>RoleIds: {{ user.rolesId }}</p>
										<p>Bank shortName: {{ user.bankShortName }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Thoát">
						<input type="submit" class="btn btn-success" value="Thêm">
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
				bankFullName: `Techcombank`,
				bankShortName: `TCB`,
				rolesId: null
			},
			roleList: null,
			bankList: null
		}
	},
	methods: {
		async createUser() {
			await axios.post(`user/create-user`, this.user)
				.then((res) => {
					if (res) {
						debugger;
						this.$router.push("/user");
						console.log(res.data);
					}
				})
				.catch((error) => console.log(error));
		},

		async getListRole() {
			await axios.get(`role/get-all`)
				.then(res => {
					if (res != null) {
						this.roleList = res.data.data;
						console.log(this.roleList)
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
						console.log(this.bankList)
					}
				}).catch(err => console.log(err));
		},

		onChange: function (event) {
			debugger;
			var test = $("#bankId option:selected").val();
			// this.user.bankShortName = event.target.value
			this.user.bankShortName = test;
		}
	},
	created() {
		this.getListRole();
		this.getListBank();
	}
}

</script>