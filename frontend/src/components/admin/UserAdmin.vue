<template>
	<div class="user-admin">
		<b-table hover striped :items="users">

		</b-table>
	</div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
	name: 'UserAdmin',
	data: function (){
		return {
			mode: 'save',
			user: {},
			users: []
		}
	},
	methods: {
		loadUsers() {
			const url = `${baseApiUrl}/users`
			axios.get(url).then(res => {
				this.users = res.data
				console.log(this.users)
			})
		}
	},
	mounted(){
		this.loadUsers()
	}
}
</script>

<style>

</style>