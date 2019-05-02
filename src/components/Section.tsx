import React from "react";
import { View } from "@react-pdf/renderer";

export const Section: React.FC = ({ children }) => (
  <View style={{ marginBottom: 10 }}>{children}</View>
);
