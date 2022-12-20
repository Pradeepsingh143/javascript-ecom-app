import React, { useState } from "react";
import { SubHeading, Paragraph } from "../utils/styledComponents/components";

const TabView = ({ tabs = {}}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabView">
      <div className="tabName">
        {Object.keys(tabs).length === 0 ? (
          <div>
            {" "}
            <Paragraph>No Value Passed, Please add Title, tabs=object of array then inside array name and content obj</Paragraph>{" "}
          </div>
        ) : (
          <div>
            <div className="tabs">
              {tabs.map((tab, index) => (
                <label
                  key={index}
                  className={
                    index === activeTabIndex
                      ? "bg-white text-primary cursor-pointer transition duration-300 ease-in-out border-x-2 border-t-2 border-primary rounded-t px-6 py-1 text-lg mr-1"
                      : "bg-primary text-white cursor-pointer border-t-2 border-l-2 border-r-2 border-solid border-transparent px-6 py-1 text-lg mr-1 rounded-t"
                  }
                  onClick={() => activeTab(index)}
                >
                  {tab.name}
                </label>
              ))}
            </div>
            <div className="content border-2 border-primary p-4 rounded">
              {tabs[activeTabIndex].content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabView;
