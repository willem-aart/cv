import React from "react";
import { CurriculumVitae } from "./components/CurriculumVitae";
import { PDFViewer } from "@react-pdf/renderer";
import { curriculumVitae } from "./curriculum-vitae";
import "./reset.css";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <PDFViewer
        style={{
          boxSizing: "border-box",
          boxShadow:
            "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          height: "95vh",
          width: "100vh",
          margin: "1em",
          borderRadius: "2px"
        }}
      >
        <CurriculumVitae curriculumVitae={curriculumVitae} />
      </PDFViewer>
    </div>
  );
};

export default App;
