import React from "react";
import { View, Text } from "@react-pdf/renderer";

type Item = {
  term: string;
  definition: React.ReactNode;
};

type Props = {
  children: Item[];
  applyBottomSpacing?: boolean;
};

export const DefinitionList: React.FC<Props> = ({
  applyBottomSpacing,
  children: items
}) => (
  <>
    {items.map((item, i) => (
      <View
        key={i}
        style={{
          flexDirection: "row",
          width: "100%",
          marginBottom: applyBottomSpacing ? 10 : 0
        }}
        wrap={false}
      >
        <View
          style={{
            width: 100,
            textAlign: "right",
            marginRight: 20,
            opacity: 0.75
          }}
        >
          <Text style={{ fontSize: 12 }}>{item.term}</Text>
        </View>
        <View style={{ flex: "1" }}>
          {typeof item.definition === "string" ? (
            <Text style={{ fontSize: 12 }}>{item.definition}</Text>
          ) : (
            item.definition
          )}
        </View>
      </View>
    ))}
  </>
);
