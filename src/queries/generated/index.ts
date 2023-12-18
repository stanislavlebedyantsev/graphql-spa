import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetchData } from '../../../gqlFetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  OpeningTimes: { input: any; output: any; }
};

/**
 * A unit of Administrative Geography
 * e.g. a district council
 */
export type AdminGeo = {
  __typename?: 'AdminGeo';
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AreaToiletCount = {
  __typename?: 'AreaToiletCount';
  active?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  removed?: Maybe<Scalars['Int']['output']>;
};

/** The name of a contributor. This requires a certain level of permissions to access. */
export type AuthedContributor = {
  __typename?: 'AuthedContributor';
  name: Scalars['String']['output'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/**
 * A Toilet
 * The data representing a toilet is computed from its **Report**s
 */
export type Loo = {
  __typename?: 'Loo';
  accessible?: Maybe<Scalars['Boolean']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  allGender?: Maybe<Scalars['Boolean']['output']>;
  area?: Maybe<Array<Maybe<AdminGeo>>>;
  attended?: Maybe<Scalars['Boolean']['output']>;
  automatic?: Maybe<Scalars['Boolean']['output']>;
  babyChange?: Maybe<Scalars['Boolean']['output']>;
  children?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  geohash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Point>;
  men?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  noPayment?: Maybe<Scalars['Boolean']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  openingTimes?: Maybe<Scalars['OpeningTimes']['output']>;
  paymentDetails?: Maybe<Scalars['String']['output']>;
  radar?: Maybe<Scalars['Boolean']['output']>;
  removalReason?: Maybe<Scalars['String']['output']>;
  reports?: Maybe<Array<Maybe<Report>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  urinalOnly?: Maybe<Scalars['Boolean']['output']>;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
  women?: Maybe<Scalars['Boolean']['output']>;
};

/** Include or Exclude Loos from search results based on whether they satisfy a filter condition */
export type LooFilter = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  areaName?: InputMaybe<Scalars['String']['input']>;
  contributors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  noPayment?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LooSearchResponse = {
  __typename?: 'LooSearchResponse';
  limit?: Maybe<Scalars['Int']['output']>;
  loos: Array<Loo>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  submitRemovalReport?: Maybe<ReportMutationResponse>;
  submitReport?: Maybe<ReportMutationResponse>;
  submitVerificationReport?: Maybe<ReportMutationResponse>;
};


export type MutationSubmitRemovalReportArgs = {
  report?: InputMaybe<RemovalReportInput>;
};


export type MutationSubmitReportArgs = {
  report?: InputMaybe<ReportInput>;
};


export type MutationSubmitVerificationReportArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationResponse = {
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export enum Permission {
  ModerateReport = 'MODERATE_REPORT',
  SubmitReport = 'SUBMIT_REPORT',
  ViewContributorInfo = 'VIEW_CONTRIBUTOR_INFO'
}

/**
 * A Geographical Point
 * Expressed in WGS84 coordinates (SRID 4326).
 */
export type Point = {
  __typename?: 'Point';
  /** Latitude */
  lat: Scalars['Float']['output'];
  /** Longitude */
  lng: Scalars['Float']['output'];
};

export type PointInput = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type ProximityInput = {
  /** Latitude */
  lat: Scalars['Float']['input'];
  /** Longitude */
  lng: Scalars['Float']['input'];
  /** Maximum Distance in meters */
  maxDistance?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a list of areas in existence, name and type only */
  areas: Array<AdminGeo>;
  /** Retrieve a Loo by ID */
  loo?: Maybe<Loo>;
  looNamesByIds: Array<Loo>;
  /** Search for loos matching a filter */
  loos: LooSearchResponse;
  /** Retrieve loos that sit within a given geohash */
  loosByGeohash: Array<Scalars['String']['output']>;
  /** Retrieve Loos by proximity to a Point */
  loosByProximity: Array<Loo>;
  reportsForLoo: Array<Report>;
  /** Get statistics about our data */
  statistics?: Maybe<Statistics>;
};


export type QueryLooArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLooNamesByIdsArgs = {
  idList?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryLoosArgs = {
  filters: LooFilter;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortOrder>;
};


export type QueryLoosByGeohashArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  geohash: Scalars['String']['input'];
};


export type QueryLoosByProximityArgs = {
  from: ProximityInput;
};


export type QueryReportsForLooArgs = {
  id: Scalars['ID']['input'];
};

export type RemovalReportInput = {
  edit: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};

/**
 * Reported information about a real-world toilet
 * Reports are submitted by contributors or created as part of data imports
 * A report can refer to another report (via the **previous** field) to indicate that it is intended to augment or adjust an existing Loo
 */
export type Report = {
  __typename?: 'Report';
  accessible?: Maybe<Scalars['Boolean']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  allGender?: Maybe<Scalars['Boolean']['output']>;
  area?: Maybe<Array<Maybe<AdminGeo>>>;
  attended?: Maybe<Scalars['Boolean']['output']>;
  automatic?: Maybe<Scalars['Boolean']['output']>;
  babyChange?: Maybe<Scalars['Boolean']['output']>;
  children?: Maybe<Scalars['Boolean']['output']>;
  /** An identifier for the user or process which contributed the report */
  contributor: Scalars['String']['output'];
  /** When the report was added to the system */
  createdAt: Scalars['DateTime']['output'];
  geohash?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /**
   * We insert location updates separately using a DB trigger because Prisma doesn't support PostGIS yet.
   * This field is used to indicate to the client that the system created the report so that it can be coalesced with the user's report.
   */
  isSystemReport?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Point>;
  /** The Loo which uses the data submitted in this report */
  loo?: Maybe<Loo>;
  men?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  noPayment?: Maybe<Scalars['Boolean']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  openingTimes?: Maybe<Scalars['OpeningTimes']['output']>;
  paymentDetails?: Maybe<Scalars['String']['output']>;
  /**
   * A link to the previous report in the chain
   * This is nullable since this might be the first report about a particular toilet
   */
  previous?: Maybe<Report>;
  radar?: Maybe<Scalars['Boolean']['output']>;
  removalReason?: Maybe<Scalars['String']['output']>;
  urinalOnly?: Maybe<Scalars['Boolean']['output']>;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
  women?: Maybe<Scalars['Boolean']['output']>;
};

export type ReportInput = {
  accessible?: InputMaybe<Scalars['Boolean']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  allGender?: InputMaybe<Scalars['Boolean']['input']>;
  attended?: InputMaybe<Scalars['Boolean']['input']>;
  automatic?: InputMaybe<Scalars['Boolean']['input']>;
  babyChange?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<Scalars['Boolean']['input']>;
  edit?: InputMaybe<Scalars['ID']['input']>;
  location: PointInput;
  men?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  noPayment?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  openingTimes?: InputMaybe<Scalars['OpeningTimes']['input']>;
  paymentDetails?: InputMaybe<Scalars['String']['input']>;
  radar?: InputMaybe<Scalars['Boolean']['input']>;
  urinalOnly?: InputMaybe<Scalars['Boolean']['input']>;
  women?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReportMutationResponse = MutationResponse & {
  __typename?: 'ReportMutationResponse';
  code: Scalars['String']['output'];
  loo?: Maybe<Loo>;
  message: Scalars['String']['output'];
  report?: Maybe<Report>;
  success: Scalars['Boolean']['output'];
};

export enum SortOrder {
  NewestFirst = 'NEWEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type Statistics = {
  __typename?: 'Statistics';
  active?: Maybe<Scalars['Int']['output']>;
  areaToiletCount?: Maybe<Array<Maybe<AreaToiletCount>>>;
  removed?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type GetLoosQueryVariables = Exact<{
  filters: LooFilter;
}>;


export type GetLoosQuery = { __typename?: 'Query', loos: { __typename?: 'LooSearchResponse', loos: Array<{ __typename?: 'Loo', id?: string | null, createdAt?: any | null, updatedAt?: any | null, verifiedAt?: any | null, active?: boolean | null, name?: string | null, openingTimes?: any | null, accessible?: boolean | null, allGender?: boolean | null, men?: boolean | null, women?: boolean | null, urinalOnly?: boolean | null, children?: boolean | null, babyChange?: boolean | null, radar?: boolean | null, attended?: boolean | null, automatic?: boolean | null, noPayment?: boolean | null, paymentDetails?: string | null, notes?: string | null, removalReason?: string | null, geohash?: string | null }> } };



export const GetLoosDocument = `
    query GetLoos($filters: LooFilter!) {
  loos(filters: $filters) {
    loos {
      id
      createdAt
      updatedAt
      verifiedAt
      active
      name
      openingTimes
      accessible
      allGender
      men
      women
      urinalOnly
      children
      babyChange
      radar
      attended
      automatic
      noPayment
      paymentDetails
      notes
      removalReason
      geohash
    }
  }
}
    `;

export const useGetLoosQuery = <
      TData = GetLoosQuery,
      TError = unknown
    >(
      variables: GetLoosQueryVariables,
      options?: UseQueryOptions<GetLoosQuery, TError, TData>
    ) => {
    
    return useQuery<GetLoosQuery, TError, TData>(
      ['GetLoos', variables],
      useFetchData<GetLoosQuery, GetLoosQueryVariables>(GetLoosDocument).bind(null, variables),
      options
    )};
