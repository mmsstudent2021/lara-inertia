<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="my-5">
                    <div class="d-flex justify-content-between">
                        <h1 class="mb-3" >User Create</h1>
                        <div class="">
                            <Link href="/user" class="btn btn-outline-primary">User List</Link>
                        </div>
                    </div>

                    <form action="" @submit.prevent="save">
                        <div class="mb-3">
                            <label class="form-label">User Name</label>
                            <input type="text" class="form-control" :class="{'is-invalid':registerForm.errors.name}" v-model="registerForm.name">
                            <div class="invalid-feedback">{{ registerForm.errors.name }}</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">User Email</label>
                            <input type="email" class="form-control" :class="{'is-invalid':registerForm.errors.email}" v-model="registerForm.email">
                            <div class="invalid-feedback">{{ registerForm.errors.email }}</div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-primary" :disabled="registerForm.processing">
                                <i v-if="registerForm.processing" class="fa-solid fa-spinner fa-pulse"></i>
                                Create User
                            </button>
                        </div>

                    </form>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['status'],
    data() {
        return {
            // isProcessing:false,
            registerForm : this.$inertia.form({
                name: "",
                email : ""
            })
        }
    },
    methods: {
        save() {
            this.isProcessing = true
            this.registerForm.post("/user",{
                onSuccess:()=>{
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

                    this.registerForm.reset()
                }
            })
        }
    },
}
</script>

<style scoped>

</style>
