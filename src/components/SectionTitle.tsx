import React from "react";
import { Text } from "@react-pdf/renderer";

export const SectionTitle: React.FC = ({ children }) => (
  <Text
    style={{
      fontSize: 16,
      paddingBottom: 3,
      marginBottom: 5,
      borderBottom: "1pt solid #aaa"
    }}
  >
    {children}
  </Text>
);
