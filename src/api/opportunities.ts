import { stringify } from 'query-string';
import constants from '../constants';

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
  results?: Record<string, any>[],
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
  const { ok, json } = await fetch(`${constants.endpoints.opportunities}?${querystring}`, config);

  if (!ok) {
    throw new Error('Network unexpected error');
  }

  return json();
}

export default fetchOpportunities;
