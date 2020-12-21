import { useQuery } from "react-query";
import { Job } from '../../types/job';
import opportunities, { QueryParams } from '../../api/opportunities';
import JobCard from '../JobCard/JobCard';
import { Button, ButtonToolbar, FlexboxGrid } from "rsuite";
import { ReactElement, useState } from "react";

const MainContainer = (): ReactElement | null => {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    aggregate: true,
    offset: 0,
    size: 5
  });
  const queryBody = JSON.stringify({
    and: [
      {
        remote: {
          term: true
        }
      },
      {
        status: {
          code: "open"
        }
      }
    ]
  });

  const query = useQuery(['opportunities', { queryParams, queryBody }], opportunities);

  const nextPage = () => {
    const offset = queryParams.offset + queryParams.size;
    setQueryParams({ ...queryParams, offset });
  };

  return query.data ? (
    <>
      <FlexboxGrid.Item colspan={18}>
        <strong>Total Results</strong>: {query.data?.total}
        {query.data.results && query.data.results.map((item: Job) => (
          <JobCard job={item} key={item.id} />
        ))}
        <ButtonToolbar>
          <Button size="lg" appearance="ghost" onClick={nextPage}>Next Page -&gt;</Button>
        </ButtonToolbar>
      </FlexboxGrid.Item>
    </>
  ) : null;
};

export default MainContainer;