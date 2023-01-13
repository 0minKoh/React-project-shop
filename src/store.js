import { configureStore, createSlice } from '@reduxjs/toolkit'

// 저장하기
let user = createSlice({
  name: 'user', // state의 이름
  initialState : 'kim' // state 값
})

// 등록하기
export default configureStore({
  reducer: {
    user: user.reducer // 작명: state_name.reducer
  }
})