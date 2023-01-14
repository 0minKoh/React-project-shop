import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';

import { addProduct } from '../store';

function Detail(props) {

  const dispatch = useDispatch()

  let { paramId } = useParams();

  let findProductById = props.products.find((el) => ((el.id == paramId)))

  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem('watched'))
    watched.push(findProductById.id)

    //Set으로 바꿨다가 다시 Array로 만들기
    watched = new Set(watched)
    watched = Array.from(watched)
    localStorage.setItem('watched', JSON.stringify(watched))
    console.log(localStorage.getItem('watched'))
  }, [])

  return(
    <div>
      <div className="row">
        <div className="col-md-6">
          <img src={"http://codingapple1.github.io/shop/shoes" + String(parseInt(paramId) + 1) + ".jpg"} width="100%" alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProductById.title}</h4>
          <p>{findProductById.content}</p>
          <p>{findProductById.price}</p>
          <button className="btn btn-danger" onClick={() => {
            console.log(findProductById.title)
            dispatch(addProduct({
              id: paramId, name: findProductById.title, count: 1
            }))}}>
            주문하기
          </button>
        </div>
      </div>
      <div>
        <div className="mt-10">
          <input onChange={(e) => {
            typeof e.target.value == Number ? console.log(true) : alert('그러지 마세요')
          }}/>
        </div>
      </div>
    </div>
  )
}

export default Detail