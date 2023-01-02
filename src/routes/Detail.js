import { useParams } from 'react-router-dom'

function Detail(props) {
  let { id } = useParams();

  let findProductById = props.products.find((el) => {el.id == id})

  return(
    <div className="row">
      <div className="col-md-6">
        <img src={"http://codingapple1.github.io/shop/shoes" + String(parseInt(id) + 1) + ".jpg"} width="100%" alt="" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{findProductById.title}</h4>
        <p>{findProductById.content}</p>
        <p>{findProductById.price}</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </div>
  )
}

export default Detail