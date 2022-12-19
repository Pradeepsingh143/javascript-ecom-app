import React from "react";
import { Button, Heading, SubHeading, Paragraph } from "../utils/styledComponents/components";
import img from "../images/demoimg.jpg";

const Home = () => {
  return (
    <>
      {/* homepage page */}
      <main className="homePage">
        {/* hero section*/}
        {/* # section 1 */}
        <section className="heroSection min-h-[500px] bg-primary flex">
          <div className="container flex mx-auto items-center">
            {/* left cloumn */}
            <div className="left w-1/2">
              <Heading className="mb-1" fontSize={'36px'} color={'var(--white)'}>Lorem ipsum dolor</Heading>
              <SubHeading fontStyle={'italic'} bgColor={'var(--black)'} display={'inline'} color={'var(--white)'} letterSpacing={'1px'}>Lorem ipsum dolor sit, amet consectetur.</SubHeading>
              <Paragraph className="mt-4" color={'var(--white)'}>
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
                  hoverBorder = "1px solid var(--white)"
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
                <img src={img} alt="" className="w-full h-40 object-cover rounded"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
