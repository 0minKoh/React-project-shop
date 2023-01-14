import {Table} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {addCount} from '../store.js'

function Cart() {
  let stock = useSelector((state) => {return state.stock})
  const dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((el, i) => {
            return (
              <tr key={i}>
                <th>{el.id}</th>
                <th>{el.name}</th>
                <th>{el.count}</th>
                <th><div className="btn btn-primary" onClick={() => {dispatch(addCount(i))}}>+</div></th>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Cart
