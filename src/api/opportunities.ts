import { stringify } from 'query-string';
import constants from '../constants';
import { Job } from '../types/job';

export type QueryParams = {
  offset?: number,
  size?: number,
  aggregate?: boolean,
  currency?: string,
  page?: number,
  periodicity?: string,
  lang?: string,
};
export type QueryResponse = {
  aggregators?: Record<string, any>,
  results?: Job[],
  offset?: number,
  size?: number,
  total?: number
};

type QueryFunctionParams = {
  queryParams: QueryParams,
  queryBody: string;
}
interface CustomQueryFunctionContext {
  queryKey: [key: string, params: QueryFunctionParams]
}

const fetchOpportunities = async ({ queryKey }: CustomQueryFunctionContext): Promise<QueryResponse> => {
  const [key, { queryParams, queryBody }] = queryKey;
  const config = {
    method: 'POST',
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: queryBody
  };
  const querystring = stringify(queryParams);
  const response = await fetch(`${constants.endpoints.opportunities}?${querystring}`, config);

  if (!response.ok) {
    throw new Error('Network unexpected error');
  }

  return response.json();
}

export default fetchOpportunities;
