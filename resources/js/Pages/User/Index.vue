<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="my-5">
                    <div class="d-flex justify-content-between">
                        <h1 class="mb-3">User List</h1>
                        <div class="">
                            <Link href="/user/create" class="btn btn-outline-primary">
                                User Create
                            </Link>
                        </div>
                    </div>
                    <ul class="list-group mb-3">
                        <li v-for="user in users.data" class="list-group-item d-flex justify-content-between align-items-center" :key="user.id">
                            <div class="">
                                {{ user.name }}
                                <br>
                                <span class="small text-black-50">{{ user.email }}</span>
                            </div>
                            <div class="btn-group">
                                <Link :href="`user/`+user.id" class="btn btn-sm btn-outline-primary">
                                    <i class="fa-solid fa-info-circle"></i>
                                </Link>
                                <Link :href="`user/${user.id}/edit`" class="btn btn-sm btn-outline-primary">
                                    <i class="fa-solid fa-pencil-alt"></i>
                                </Link>
                                <Link :href="`user/`+user.id" method="delete" preserve-scroll as="button" class="btn btn-sm btn-outline-primary">
                                    <i class="fa-solid fa-trash"></i>
                                </Link>
<!--                                <DeleteButton :id="user.id" />-->

                            </div>
                        </li>
                    </ul>
                    <Pagination :links="users.links" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import DeleteButton from "../../Component/DeleteButton";
import Pagination from "../../Component/Pagination";
export default {
    components: {Pagination, DeleteButton},
    props:['users','status'],
    methods: {

        showAlert(){
            this.$swal("hello hello")
        }
    },
    mounted() {
        if(this.status){
            const Toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: this.status
            })
        }
    }
}
</script>

<style scoped>

</style>
