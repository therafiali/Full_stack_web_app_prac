import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className="max-w-7xl mx-auto px-4 md:px-10">{children}</section>;
};

export default Wrapper;
