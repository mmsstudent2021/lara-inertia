<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="my-5">
                    <h1 class="mb-3">User Lists</h1>
                    <p v-if="status" class="alert alert-success">
                        {{ status }}
                    </p>
                    <ul class="list-group">
                        <li v-for="user in users" class="list-group-item d-flex justify-content-between align-items-center" :key="user.id">
                            <div class="">
                                {{ user.name }}
                                <br>
                                <span class="small text-black-50">{{ user.email }}</span>
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-outline-primary">
                                    <i class="fa-solid fa-info-circle"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-primary">
                                    <i class="fa-solid fa-pencil-alt"></i>
                                </button>
                                <button @click="del(user.id)" class="btn btn-sm btn-outline-primary">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['users','status'],
    methods: {
        del(id) {
            this.$inertia.delete(`user/${id}`,{ preserveScroll: true })
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
