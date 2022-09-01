<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left title">
          {{ headers.text }}
        </th>
        <th class="text-left">
          {{ headers.write }}
        </th>
        <th class="text-left">
          {{ headers.date }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in board"
        :key="item"
      >
        <td class="title">{{ item.title }}</td>
        <td>{{ item.write }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: 'FbTable',
  props: {
    headers: Object,
    board: Array
  }
}
</script>

<style lang="scss" scoped>
.v-table {
  width: 80%;
  margin: 30px auto 0;
}

.title {
  width: 80%;
}
</style>
