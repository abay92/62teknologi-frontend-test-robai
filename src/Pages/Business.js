import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import axiosBaseURL from '../httpCommon';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

function Business() {
  function plusMinus(num) {
    let a = num.toString().split('').map(int => parseInt(int))
  
    if (a.length < 2) {
      return "not possible"
    }
  
    return recursiveFunc(a.slice(1), a[0])
  
    function recursiveFunc(updatedArray, updatedSum) {
  
      if (updatedArray.length === 1) {
        if  (updatedSum + updatedArray[0] === 0) {
          return '+'
        } else if (updatedSum - updatedArray[0] === 0) {
          return '-'
        } else {
        return 'not possible'
        }
      }
  
      let string2 = recursiveFunc(updatedArray.slice(1), updatedSum - updatedArray[0])
  
      if (string2 !== 'not possible') {
        return '-' + string2
      }
  
      let string1 = recursiveFunc(updatedArray.slice(1), updatedSum + updatedArray[0])
  
      if (string1 !== 'not possible') {
        return '+' + string1
      }
  
      return 'not possible'
    }
  }

  console.log(plusMinus(26712));

  const [business, setBusiness] = React.useState([]);
  const [meta, setMeta] = React.useState([]);
  
  const fetchDataBusiness = async (pageCurrent = 1) => {
    const response = axiosBaseURL.get(`/api/business/search?limit=4&page=`+pageCurrent+``)
    return response;
  }

  const fetchData = (pageCurrent = 1) => {
    fetchDataBusiness(pageCurrent)
      .then((res) => {
        setBusiness(res.data.data.data)
        setMeta(res.data.data.meta)
      })
      .catch((err) => console.log(err))
  }

  const shouldLog = React.useRef(true);
  React.useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      fetchData()
    }
  })

  const handlePageClick = (data) => {
    fetchData(data.selected + 1)
  };

  return (
    <>
    <Container>
      <div className="row">
      {business.map((item) => (
        <div className="col-3 mb-3" key={item.id} >
          <Card>
            <Card.Img variant="top" style={{ height: "10rem" }} src={item.image_url} />
            <Card.Body>
              <Card.Title>{ item.name }</Card.Title>
              <Link className="nav-link" to={ '/business/'+item.id }>
                <Button variant="primary">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>)) }
        { meta.total ?
          <ReactPaginate 
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={Math.ceil(meta.total/meta.per_page)}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            initialPage={meta.current_page - 1}
            forcePage={meta.current_page - 1}
            marginPagesDisplayed={2}
            containerClassName="pagination"
            activeClassName="page-item"
            disabledClassName="uk-disabled"
            disableInitialCallback={true}
            /> : ''
        }
      </div>
    </Container>
    </>
  );
}

export default Business;