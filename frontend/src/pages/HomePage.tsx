import { Row, Col } from "react-bootstrap";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MassageBox from "../components/MassageBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/ProductHooks";


export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MassageBox variant="danger">{getError(error as ApiError)}</MassageBox>
  ) : (
    <Row>
      <Helmet>
        <title>TS Amazona</title>
      </Helmet>
      {products!.map((product) => (
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
  );
}
