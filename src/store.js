import { configureStore, createSlice } from '@reduxjs/toolkit'

// 저장하기
let user = createSlice({
  name: 'user', // state의 이름
  initialState : 'kim', // state 값
  reducer: {
    changeName(state) {
      return 'john ' + state //return 바뀔 state 값
    }
  }
})

export let { changeName } = user.actions //object

let stock = createSlice({
  name: 'stock',
  initialState: [
    
  ],
  reducers: {
    addCount(stock, i) {
      stock.map((el) => {
        if (el.id == i.payload) {
          el.count += 1
        }
      })
    },
    addProduct(stock, arr) {
      stock.push(arr.payload)
    }
  }
})

export let { addCount, addProduct } = stock.actions

// 등록하기
export default configureStore({
  reducer: {
    user: user.reducer, // 작명: state_name.reducer
    stock: stock.reducer
  }
})