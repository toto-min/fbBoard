<template>
  <div class="d-flex justify-space-around">
    <v-btn
      id="menu-activator"
      icon
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item block>
          <v-btn color="blue" :to="{name: 'Login'}">
            <v-icon>mdi-alpha-g</v-icon>
            로그인
          </v-btn>
        </v-list-item>
        <v-list-item block>
            <v-btn>
                로그아웃
            </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'fbDrobdown'
}
</script>

<style lang="scss" scoped>

</style>
