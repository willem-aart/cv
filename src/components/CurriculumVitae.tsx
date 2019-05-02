import React from "react";
import { Page, Document, Text, Font } from "@react-pdf/renderer";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { DefinitionList } from "./DefinitionList";
import { CurriculumVitae as CurriculumVitaeType } from "../types";
import { curriculumVitae } from "../curriculum-vitae";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";

type Props = {
  curriculumVitae: CurriculumVitaeType;
};

Font.register(
  "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  // @ts-ignore
  { family: "Oswald" }
);

export const CurriculumVitae: React.FC<Props> = () => (
  <Document
    title="Curriculum vitae - Willem-Aart van Dorpen"
    author="Willem-Aart van Dorpen"
  >
    <Page
      size="A4"
      style={{
        padding: "50pt 50pt 0 50pt",
        flexGrow: 1,
        color: "#222",
        fontFamily: "Oswald"
      }}
    >
      <Section>
        <Title>Curriculum vitae</Title>
        <Subtitle>{curriculumVitae.name}</Subtitle>

        <SectionTitle>Persoonlijke gegevens</SectionTitle>

        <DefinitionList>
          {[
            {
              term: "Geboren",
              definition: `${curriculumVitae.dateOfBirth.getDate()}-${curriculumVitae.dateOfBirth.getMonth()}-${curriculumVitae.dateOfBirth.getFullYear()} te ${
                curriculumVitae.placeOfBirth
              }`
            },
            {
              term: "Adres",
              definition: curriculumVitae.address
            },
            {
              term: "Telefoonnummer",
              definition: curriculumVitae.phoneNumber
            },
            {
              term: "E-mailadres",
              definition: curriculumVitae.emailAddress
            }
          ]}
        </DefinitionList>
      </Section>

      <Section>
        <SectionTitle>Opleidingen</SectionTitle>

        <DefinitionList applyBottomSpacing>
          {curriculumVitae.studies.map(study => ({
            term: study.level,
            definition: <Text style={{ fontSize: 12 }}>{study.title}</Text>
          }))}
        </DefinitionList>
      </Section>

      <Section>
        <SectionTitle>Werkervaring</SectionTitle>

        <DefinitionList applyBottomSpacing>
          {curriculumVitae.workExperience.map(workExperienceItem => ({
            term: workExperienceItem.period,
            definition: (
              <>
                <Text
                  style={{
                    fontSize: 12,
                    marginBottom: 5
                  }}
                >
                  {workExperienceItem.title}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    marginBottom: 5,
                    fontFamily: "Times-Roman"
                  }}
                >
                  {workExperienceItem.description}
                </Text>
                {workExperienceItem.achievements.map((achievement, i) => (
                  <Text
                    key={i}
                    style={{
                      fontSize: 10,
                      marginBottom: 3,
                      fontFamily: "Times-Roman"
                    }}
                  >
                    • {achievement}
                  </Text>
                ))}
              </>
            )
          }))}
        </DefinitionList>
      </Section>

      <Text
        style={{
          position: "absolute",
          fontSize: 10,
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "grey"
        }}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);
