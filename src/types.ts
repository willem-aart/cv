export type PersonalData = {
  name: string;
  placeOfBirth: string;
  dateOfBirth: Date;
  address: string;
  phoneNumber: string;
  emailAddress: string;
};

export type Study = {
  level: string;
  title: string;
};

export type WorkExperienceItem = {
  period: string;
  title: string;
  description: string;
  achievements: string[];
};

export type CurriculumVitae = PersonalData & {
  studies: Study[];
  workExperience: WorkExperienceItem[];
};
