import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import React from 'react';
import axiosBaseURL from '../httpCommon';

function BusinessDetail() {
    const currentURL = window.location.href;
    const lastSegment = currentURL.split("/").pop();

    const [business, setBusiness] = React.useState([]);
  
    const fetchDataBusiness = async (pageCurrent = 1) => {
        const response = axiosBaseURL.get(`/api/business/` + lastSegment)
        return response;
    }

    const fetchData = (pageCurrent = 1) => {
        fetchDataBusiness(pageCurrent)
        .then((res) => {
            setBusiness(res.data.data)
        })
        .catch((err) => console.log(err))
    }

    const shouldLogDetail = React.useRef(true);
    React.useEffect(() => {
        if (shouldLogDetail.current) {
            shouldLogDetail.current = false;
            fetchData()
        }
    })

    return (
        <>
        <Container>
            <div className="row">
                <div className="col-12 mb-12" >
                    <Card>
                        <Card.Img variant="top" style={{ height: "500px" }} src={business.image_url} />
                        <Card.Body>
                        <Card.Title>{business.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
        </>
    );
}

export default BusinessDetail;