/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCV
// ====================================================

export interface GetCV_cvCollection_items_profile {
  __typename: "Profile";
  name: string | null;
  nativeName: string | null;
  linkedIn: string | null;
  email: (string | null)[] | null;
  phone: (string | null)[] | null;
  skype: (string | null)[] | null;
  telegram: (string | null)[] | null;
  gitHub: (string | null)[] | null;
}

export interface GetCV_cvCollection_items_historyCollection_items_description {
  __typename: "CvHistoryItemDescription";
  json: any;
}

export interface GetCV_cvCollection_items_historyCollection_items {
  __typename: "CvHistoryItem";
  companyName: string | null;
  companyUrl: string | null;
  title: string | null;
  description: GetCV_cvCollection_items_historyCollection_items_description | null;
  start: any | null;
  end: any | null;
  responsibility: (string | null)[] | null;
  technologies: (string | null)[] | null;
  achievements: (string | null)[] | null;
}

export interface GetCV_cvCollection_items_historyCollection {
  __typename: "CvHistoryCollection";
  items: (GetCV_cvCollection_items_historyCollection_items | null)[];
}

export interface GetCV_cvCollection_items {
  __typename: "Cv";
  profile: GetCV_cvCollection_items_profile | null;
  historyCollection: GetCV_cvCollection_items_historyCollection | null;
}

export interface GetCV_cvCollection {
  __typename: "CvCollection";
  items: (GetCV_cvCollection_items | null)[];
}

export interface GetCV {
  cvCollection: GetCV_cvCollection | null;
}
