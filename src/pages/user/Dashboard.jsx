import React, { useState } from "react";
import NavBar from "../../components/user/NavBar"
import AddPostForm from "../../components/userModal/AddPost";

const AddPostComponent = () => {
  return <div className=" mt-5 bg-blue-500 p-4 text-white">Add Post Component</div>;
};

const ProposalComponent = () => {
  return <div className="bg-green-500 p-4 text-white mt-5">Proposal Component</div>;
};

const OngoingProjectComponent = () => {
  return (
    <div className="bg-yellow-500 p-4 text-white mt-5">Ongoing Project Component</div>
  );
};

const AnotherOptionComponent = () => {
  return <div className="bg-red-500 p-4 text-white mt-5">Another Option Component</div>;
};

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "addPost":
        return <AddPostForm/>;
      case "proposal":
        return <ProposalComponent />;
      case "ongoingProject":
        return <OngoingProjectComponent />;
      case "anotherOption":
        return <AnotherOptionComponent />;
      default:
        return <AddPostForm/>;
    }
  };

  return (
    <>
      <NavBar />
      <div className="bottom-4 sm:bottom-0 left-0 right-0 mt-5 z-20">
        <nav className="bg-slate-200">
          <div className="max-w-3xl mx-auto px-8   py-2">
            <ul className="flex space-x-36">
              <li>
                <button className="focus:outline-none"
                 onClick={() => handleOptionClick("addPost")}>
                  <h1 >AddPost </h1>
                </button>
              </li>
              <li>
                <button className="focus:outline-none"
                onClick={() => handleOptionClick("proposal")}>
                  <h1 >MyFeed</h1>
                </button>
              </li>
              <li>
                <button className="focus:outline-none"
                 onClick={() => handleOptionClick("ongoingProject")}>
                  <h1 >Preposals</h1>
                </button>
              </li>
              <li>
                <button className="focus:outline-none"
                 onClick={() => handleOptionClick("anotherOption")}>
                  <h1 >Ongoing</h1>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>{renderComponent()}</div>
    </>

  );
};

export default Dashboard;
