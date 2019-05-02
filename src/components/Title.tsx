import React from "react";
import { Text } from "@react-pdf/renderer";

export const Title: React.FC = ({ children }) => (
  <Text
    style={{
      fontSize: 24,
      marginBottom: 10
    }}
  >
    {children}
  </Text>
);
