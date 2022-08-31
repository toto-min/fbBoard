<template>
    <v-navigation-drawer
    class="bg-deep-white"
    theme="white"
    app
    permanent
    >
    <v-list color="transparent">
        <v-list-item>
            <router-link :to="{name: 'Main'}">Main</router-link>
        </v-list-item>
        <v-list-item>
            <router-link :to="{name: 'Board'}">Board</router-link>
        </v-list-item>
        <v-list-item>
            test
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'FbNav'

}
</script>

<style lang="scss" scoped>
.v-card {
    width: 450px;
    height: 100vh;
}

a{
    text-decoration: none;
    color: #000000;
}
</style>
