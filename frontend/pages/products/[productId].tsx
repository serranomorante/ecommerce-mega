import React from "react";
import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Product from "../../components/product/Product";

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <Product />;
};

export default ProductDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
