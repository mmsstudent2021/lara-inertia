<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="my-5">
                    <div class="d-flex justify-content-between">
                        <h1 class="mb-3" >User Detail</h1>
                        <div class="">
                            <Link href="/user" class="btn btn-outline-primary">User List</Link>
                        </div>
                    </div>

                    {{ user }}

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['user']
}
</script>

<style scoped>

</style>
