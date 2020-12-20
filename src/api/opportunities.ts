async function fetchOpportunities(queryParams: {}) {
  const config = {
    method: 'POST',
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(queryParams)
  };
  const { ok, json } = await fetch('/todos/', config);

  if (!ok) {
    throw new Error('Network unexpected error');
  }

  return json();
}

export default fetchOpportunities;
