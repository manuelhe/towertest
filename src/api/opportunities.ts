import { stringify, StringifiableRecord } from 'query-string';
import constants from '../constants';

async function fetchOpportunities(queryParams?: StringifiableRecord, queryBody?: {}) {
  const config = {
    method: 'POST',
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(queryBody)
  };
  const querystring = queryParams ? `?${stringify(queryParams)}` : '';
  const { ok, json } = await fetch(`${constants.endpoints.opportunities}${querystring}`, config);

  if (!ok) {
    throw new Error('Network unexpected error');
  }

  return json();
}

export default fetchOpportunities;
