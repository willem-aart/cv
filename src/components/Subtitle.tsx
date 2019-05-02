import React from "react";
import { Text } from "@react-pdf/renderer";

export const Subtitle: React.FC = ({ children }) => (
  <Text
    style={{
      fontSize: 18,
      marginBottom: 20,
      opacity: 0.8
    }}
  >
    {children}
  </Text>
);
