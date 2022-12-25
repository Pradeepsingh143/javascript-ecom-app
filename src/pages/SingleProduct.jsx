import React from "react";
import img from "../images/demoimg.jpg";
import RelativeProductCard from "../components/RelativeProductCard";
import { useParams } from "react-router-dom";

import {
  Button,
  Heading,
  SubHeading,
  Paragraph,
} from "../utils/styledComponents/components";
import TabView from "../components/TabView";
import { useProduct } from "../context/Product.state";

const SingleProduct = () => {
  const productData = useProduct();
  const { id } = useParams();
  const product = productData.filter(
    (productData) => productData.id === Number(id)
  );
  const data = product[0];

  return (
    <>
      {data ? (
        <>
          {/* hero section*/}
          {/* # section 1 */}
          <section className="heroSection min-h-[500px] bg-primary flex ">
            <div className="container flex gap-10 mx-auto items-center">
              {/* left column */}
              <div className="left w-1/2 flex justify-start">
                <div className="images grid grid-cols-2 gap-2 w-full">
                  <img src={img} alt="" className=" object-cover rounded" />
                  <img src={img} alt="" className=" object-cover rounded" />
                  <div className="col-span-2">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
              {/* right cloumn */}
              <div className="right w-1/2">
                <Heading
                  className="mb-1"
                  fontSize={"36px"}
                  color={"var(--white)"}
                >
                  {data.title}
                </Heading>
                <SubHeading
                  fontStyle={"italic"}
                  color={"var(--white)"}
                  letterSpacing={"1px"}
                >
                  <mark
                    style={{
                      background: "var(--black)",
                      color: "var(--white)",
                    }}
                  >
                    {data.shortdescription}
                  </mark>
                </SubHeading>
                <Paragraph className="mt-4" color={"var(--white)"}>
                  {data.description}
                </Paragraph>

                {/* product Price  */}
                <h4 className="text-white my-5">
                  <strong>Price: </strong>
                  {data.price}$
                </h4>

                {/* Add to Cart Button */}
                <Button
                  color="var(--black)"
                  bgColor="var(--white)"
                  border="1px solid var(--primary)"
                  width="8em"
                  height="2.4em"
                  borderRadius="5px"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </section>

          {/* product feature tabs start*/}
          <section className="product-features my-10">
            <div className="container mx-auto px-4">
              <SubHeading className="mb-5"> Product Details </SubHeading>
              <TabView
                title={"Product Specification"}
                tabs={[
                  {
                    name: "Specification",
                    content:
                      "Lorem ipsum has no intelligible meaning. It is simply a display of letters to be viewed as a sample with given graphical elements in a file.",
                  },
                  {
                    name: "Details",
                    content:
                      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
                  },
                  {
                    name: "Features",
                    content:
                      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
                  },
                ]}
              />
            </div>
          </section>
          {/* product feature tabs end*/}

          {/* relative products list */}
          <section className="relative-products">
            <div className="container mx-auto px-4 my-10">
              <SubHeading>Relative Products</SubHeading>
              <div className="product-list flex flex-wrap gap-4 mt-4 justify-between">
                <RelativeProductCard
                  title={"demo product card"}
                  subTitle={
                    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                  }
                />

                <RelativeProductCard
                  title={"demo product card"}
                  subTitle={
                    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                  }
                />

                <RelativeProductCard
                  title={"demo product card"}
                  subTitle={
                    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                  }
                />

                <RelativeProductCard
                  title={"demo product card"}
                  subTitle={
                    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                  }
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <section>
          <Heading>Page Not Found</Heading>
        </section>
      )}
    </>
  );
};

export default SingleProduct;
