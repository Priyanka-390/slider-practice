import React, { useState, useEffect } from "react";

const TabsTitle = () => {

  const [activeTab, setActiveTab] = useState(
    parseInt(localStorage.getItem("activeTab")) || 0
  );


  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="py-10">
      <div className="container max-w-[1140px] mx-auto px-4">
        <div className="flex gap-9">
          {/* Tab Links */}
          {["Tab-1", "Tab-2", "Tab-3", "Tab-4"].map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`py-4 px-9 border-2 rounded-xl text-2xl font-semibold text-black ${
                activeTab === index ? "bg-red-500 text-white" : "border-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-9">
          {activeTab === 0 && (
            <div>
              <h3 className="text-xl mb-3 font-medium text-black">
                TAB-1 DESCRIPTION
              </h3>
              <p className="text-lg font-normal text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                ipsum temporibus Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Illo ipsum temporibus ullam culpa praesentium
                iste dolorum, alias eaque facere non sunt, aspernatur quibusdam
                voluptatum at expedita ad exercitationem eveniet repellendus.
                ullam culpa praesentium iste dolorum, alias eaque facere non
                sunt, aspernatur quibusdam voluptatum at expedita ad
                exercitationem eveniet repellendus.
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h3 className="text-xl mb-3 font-medium text-black">
                TAB-2 DESCRIPTION
              </h3>
              <p className="text-lg font-normal text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                ipsum temporibus ullam culpa praesentium iste dolorum, alias
                eaque facere non sunt, aspernatur quibusdam voluptatum at
                expedita ad exercitationem eveniet repellendus.ipsum temporibus
                ullam culpa praesentium iste dolorum, alias
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h3 className="text-xl mb-3 font-medium text-black">
                TAB-3 DESCRIPTION
              </h3>
              <p className="text-lg font-normal text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                ipsum temporibus ullam culpa praesentium iste dolorum, alias
                eaque facere non sunt, aspernatur quibusdam voluptatum at
                expedita ad exercitationem eveniet repellendus.
              </p>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <h3 className="text-xl mb-3 font-medium text-black">
                TAB-4 DESCRIPTION
              </h3>
              <p className="text-lg font-normal text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                ipsum temporibus ullam culpa praesentium iste dolorum, alias
                eaque facere non sunt, aspernatur quibusdam voluptatum at
                expedita ad exercitationem eveniet repellendus.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsTitle;
