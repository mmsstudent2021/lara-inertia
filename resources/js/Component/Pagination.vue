<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">

            <li
                v-for="link in links"
                :class="[
                    'page-item',
                    {'active':link.active},
                    {'disabled':link.url===null}
                    ]"
                :key="link.label">
                <Link class="page-link" :href="link.url" v-html="link.label"></Link>
            </li>

        </ul>
    </nav>
</template>

<script>
export default {
    props:['links']
}
</script>

<style scoped>

</style>
