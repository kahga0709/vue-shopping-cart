<template>
    <div class="menu">
        <router-link class="link" to="/">
            <p class="item-menu">
                Home
            </p>
        </router-link>
        <router-link class="link" to="/cart-detail">
            <p class="item-menu">
                Cart Detail
            </p>
        </router-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.menu {
    display: flex;
    justify-content: center;
}

.item-menu {
    margin: 10px;
    font-size: large;
    cursor: pointer;
    font-weight: 600;
}

.link {
    color: inherit;
    text-decoration: none;
}
</style>