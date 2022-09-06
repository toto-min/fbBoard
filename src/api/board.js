// import { getDatabase, ref, set } from 'firebase/database'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// const db = getDatabase()
const db = getFirestore()

async function addboard (param) {
//   console.log(param)
//   set(ref(db, 'board/'), param)
//   const boarddata = doc(collection(db, 'board', 'boarddata'))
//   const adds = await addDoc(doc(db, 'board', 'boarddata'))
  const adds = doc(db, 'board', 'boarddata')
  setDoc(adds, { param })
}

async function getboard () {
  const datas = await getDoc(doc(db, 'board', 'boarddata'))
  if (datas.exists()) {
    // console.log(datas.data().param)
    return datas.data().param
  }
// .then((data) => {
//   console.log(data.data())
// }).catch((err) => {
//   console.log(err)
// })
}
export {
  addboard,
  getboard
}
