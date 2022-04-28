<template>
    <button @click="del(id)" class="btn btn-sm btn-outline-primary" :disabled="isClicked">
        <i v-if="isLoading" class="fa-solid fa-spinner fa-pulse"></i>
        <i v-else class="fa-solid fa-trash"></i>
    </button>
</template>

<script>
export default {
    props:['id'],
    data() {
        return {
            isClicked: false,
            isLoading : false
        }
    },
    methods: {
        del() {
            this.isClicked= true
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.isLoading = true
                    this.$inertia.delete(`user/${this.id}`,{
                        preserveScroll: true,
                        onSuccess : ()=>{
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
                    })
                }
                else{
                    this.isClicked = false
                }
            })

        },
    },
}
</script>

<style scoped>

</style>
