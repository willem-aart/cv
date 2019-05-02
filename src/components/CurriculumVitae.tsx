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
                <Text style={{ fontSize: 10, marginBottom: 5 }}>
                  {workExperienceItem.description}
                </Text>
                {workExperienceItem.achievements.map(achievement => (
                  <Text style={{ fontSize: 10, marginBottom: 3 }}>
                    • {achievement}
                  </Text>
                ))}
              </>
            )
          }))}
        </DefinitionList>
      </Section>
    </Page>
  </Document>
);
