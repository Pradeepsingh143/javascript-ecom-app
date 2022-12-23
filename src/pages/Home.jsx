import React from "react";
import {
  Button,
  Heading,
  SubHeading,
  Paragraph,
} from "../utils/styledComponents/components";
import img from "../images/demoimg.jpg";
import ProdcuctCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      {/* homepage page */}
      <main className="homePage">
        {/* hero section*/}
        {/* # section 1 */}
        <section className="heroSection min-h-[500px] bg-primary flex ">
          <div className="container flex mx-auto items-center">
            {/* left cloumn */}
            <div className="left w-1/2">
              <Heading
                className="mb-1"
                fontSize={"36px"}
                color={"var(--white)"}
              >
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

        {/* About Section */}
        {/* # Section-2 */}
        <section className="aboutSection bg-white">
          {/* section container */}
          {/* About summary section */}
          <div className="container w-full md:w-8/12 mx-auto text-black">
            {/* sub heading div */}
            <div className="aboutSummary flex flex-col text-center p-4 md:py-12 md:px-8 bg-[#fff] md:shadow-xl hover:md:shadow-2xl md:rounded-2xl relative md:bottom-12 gap-3">
              <SubHeading className="capitalize">Sub Heading</SubHeading>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti at cum corporis praesentium delectus doloremque maiores
                similique. Non, quod perferendis voluptates dolorum quos,
                recusandae fugiat a deserunt in optio sapiente?
              </Paragraph>
            </div>
          </div>

          {/* About us container */}
          <div className="container flex flex-col md:flex-row mx-auto px-4 gap-6 md:gap-16 mt-5 md:mt-14 items-center">
            <div className="left-col w-full md:w-1/2">
              <img src={img} alt="" className="w-full md:h-[380px] object-cover"/>
            </div>
            <div className="right-col  w-full md:w-1/2">
              <Heading className="mb-3 md:mb-5" fontSize={'18px'} fontStyle={'italic'} fontWeight={'500'} textDecoration={'underline'} opacity={'.7'}>About Us</Heading>
              <SubHeading fontSize={'32px'} fontWeight={'600'} letterSpacing={'1px'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </SubHeading>
              <Paragraph className="mt-4 md:mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                tempora deserunt laborum sint aliquam magni molestiae maxime,
                praesentium totam in, ullam unde odio quasi autem amet eius
                numquam suscipit laudantium.
              </Paragraph>
              <Button className="mt-6" width={'140px'}>Contact</Button>
            </div>
          </div>
        </section>

        {/* product section 
        # section-3 */}
        <section className="productSection bg-white">
          <div className="container mx-auto min-h-[460px] flex flex-col justify-center">
            <Heading fontSize={'32px'} className="capitalize text-center">our products</Heading>
            <div className="product flex flex-wrap gap-4 justify-evenly mt-5">
              <ProdcuctCard />
              <ProdcuctCard />
              <ProdcuctCard />
              <ProdcuctCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
