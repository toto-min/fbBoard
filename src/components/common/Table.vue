<template>
  <table>
    <thead>
      <tr>
        <th class="text-center">
          {{ headers.text }}
        </th>
        <th class="text-center">
          {{ headers.write }}
        </th>
        <th class="text-center">
          {{ headers.date }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in board"
        :key="item.id"
      >
        <td>{{ item.title }}</td>
        <td>{{ item.write }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </table>
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

table {
  // width: 100%;
}

</style>
