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
        v-for="(item, i) in board"
        :key="item"
      >
        <td class="title" @click="details(i)">{{ item.title }}</td>
        <td>{{ item.write }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
// import { useRouter } from 'vue-router'
export default {
  name: 'FbTable',
  props: {
    headers: Object,
    board: Array
  },

  setup (props, { emit }) {
    // const router = useRouter()
    function details (i) {
      // console.log(i)
      emit('boardDtail', i)
      // console.log(props.board[i])
      // router.push({
      //   name: 'BoardDetail',
      //   // path: `/boardDetail/${props.board.id}`
      //   path: '/boardDetail',
      //   params: { id: props.board[i].id }
      // })
    }

    return {
      details
    }
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
