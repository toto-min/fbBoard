<template>
    <v-card>
        <v-tabs
        background-color="deep-purple accent-4"
        center-active
        dark
        >
        <v-tab>
            <router-link :to="{name: 'Main'}">Main</router-link>
        </v-tab>
        <v-tab>
            <router-link :to="{name: 'Board'}">Board</router-link>
        </v-tab>
        <v-tab>Three</v-tab>
        <v-tab>Four</v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
export default {
  name: 'FbHeader'
}
</script>

<style lang="scss" scoped>
::v-deep .v-btn__content {
    width: 100%;
    height: 100%;
}
a {
    display: block;
    width: 100%;
    height: 100%;

    color: #ffffff;
    text-decoration: none;

    line-height: 350%;
}

</style>
