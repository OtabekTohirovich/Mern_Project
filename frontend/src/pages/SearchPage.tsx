import { useNavigate, useParams } from "react-router-dom";
import { useSearchProductDetailsQuery } from "../hooks/ProductHooks";
import { useContext, useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MassageBox from "../components/MassageBox";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Product } from "../types/Product";
import SearchContext from "../Context";
import ProductItem from "../components/ProductItem";

const ProductSearch = () => {
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState<Product[]>();
  const { mutateAsync: getSearch, isLoading, error } = useSearchProductDetailsQuery();
  const navigate = useNavigate()
  const { changeData } = useContext<any>(SearchContext);

  useEffect(() => {
    getSearch(id).then((data) => {
      setProducts(data);
      console.log(data)
      changeData("sads");
    });
  }, []);


  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MassageBox variant="danger">{getError(error as ApiError)}</MassageBox>
  ) : (
    <div style={{ width: "100%", color: '#fff' }}>
      <div onClick={()=> navigate('/')} style={{cursor: 'pointer',background: '#032830', padding: '10px', borderRadius: '10px', border: '1px solid #087990'}}>
        <div style={{ display: "flex", alignItems: "center", paddingLeft: '10px' }}>
          <i
            style={{ fontSize: "20px" }}
            className="fa-solid fa-right-from-bracket"
          ></i>
          <h6 style={{ paddingTop: "5px", paddingLeft: "10px" }}>Close</h6>
        </div>
      </div>
      <Row style={{ paddingTop: "10px" }}>
        <Helmet>
          <title>Search</title>
        </Helmet>
        {products?.map((product) => (
          <Col
            sm={6}
            md={4}
            lg={3}
            key={product.slug}
            style={{ listStyle: "none" }}
          >
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductSearch;
