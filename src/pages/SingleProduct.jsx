import React from "react";
import img from "../images/demoimg.jpg";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineSetting } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";

import {
  Button,
  Heading,
  SubHeading,
  Paragraph,
} from "../utils/styledComponents/components";
import TabView from "../components/TabView";

const SingleProduct = () => {
  return (
    <>
      {/* hero section*/}
      {/* # section 1 */}
      <section className="heroSection min-h-[500px] bg-primary flex ">
        <div className="container flex mx-auto items-center">
          {/* left cloumn */}
          <div className="left w-1/2">
            <Heading className="mb-1" fontSize={"36px"} color={"var(--white)"}>
              Lorem ipsum dolor
            </Heading>
            <SubHeading
              fontStyle={"italic"}
              color={"var(--white)"}
              letterSpacing={"1px"}
            >
              <mark
                style={{ background: "var(--black)", color: "var(--white)" }}
              >
                Lorem ipsum dolor sit, amet consectetur.
              </mark>
            </SubHeading>
            <Paragraph className="mt-4" color={"var(--white)"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              obcaecati voluptas aut sint, culpa beatae ratione id maxime
              debitis officiis.
            </Paragraph>
            <div className="buttons flex gap-5 mt-6">
              <Button
                color="var(--black)"
                bgColor="var(--white)"
                border="1px solid var(--white)"
                width="8em"
                height="2.4em"
                borderRadius="5px"
                hoverBgColor="var(--primary)"
                hoverColor="var(--white)"
                hoverBorder="1px solid var(--white)"
              >
                Shop Now
              </Button>
              <Button
                color="var(--white)"
                bgColor="var(--black)"
                border="1px solid var(--primary)"
                width="8em"
                height="2.4em"
                borderRadius="5px"
              >
                Contact Us
              </Button>
            </div>
          </div>
          {/* right column */}
          <div className="right w-1/2 flex justify-end">
            <div className="images grid grid-cols-2 gap-2 w-4/5">
              <img src={img} alt="" className="h-40 object-cover rounded" />
              <img src={img} alt="" className="h-40 object-cover rounded" />
              <div className="col-span-2">
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product feature tabs start*/}
      <section className="product-features">
       <div className="container mx-auto">
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
              name: "About",
              content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
            },
            {
              name: "Fetatures",
              content:
                "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
            },
          ]}
          />
       </div>
      </section>
      {/* product feature tabs end*/}
    </>
  );
};

export default SingleProduct;
