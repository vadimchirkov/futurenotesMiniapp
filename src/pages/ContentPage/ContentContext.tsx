import React, { createContext, useContext, ReactNode } from "react";
import PropTypes from "prop-types";

interface ContentProviderProps {
  children: ReactNode;
  value: string;
}

const ContentContext = createContext<string>("");

export const useContent = () => useContext(ContentContext);

export const ContentProvider: React.FC<ContentProviderProps> = ({
  children,
  value,
}) => {
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired, // Changed `any` to `string` for better type safety
};
