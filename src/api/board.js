import { getDatabase, ref, set } from 'firebase/database'

const db = getDatabase()

function addboard (param) {
  console.log(param)
  set(ref(db, 'board/'), param)
}

export {
  addboard
}
