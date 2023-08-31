

import ContextWrapper from "../global/Context";
import SubComp from "./Comp/SubComp";

const TopLabel = () => {
  
  return (
    <ContextWrapper>
    <div className=" border-b bg-gray-800 text-gray-100 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <p>
            <img
              src="https://readme-typing-svg.demolab.com?font=Maven_Pro&weight=200&size=19&pause=1000&vCenter=true&width=435&lines=Here+to+provide+you+with+best+services;Signup+to+understand+our+policies;SignUp+to+get+big+deals;Nice+to+meet+you;Here+to+provide+you+with+best+services;Find+variety+of+different+products"
              alt="Typing SVG"
            />
          </p>
        </div>
        <SubComp/>
      </div>
    </div>
    </ContextWrapper>
  );
};

export default TopLabel;
