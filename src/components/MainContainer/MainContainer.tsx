import { useQuery } from "react-query";
import { Job } from '../../types/job';
import opportunities, { QueryParams } from '../../api/opportunities';
import JobCard from '../JobCard/JobCard';
import { FlexboxGrid } from "rsuite";
import { ReactElement } from "react";

const MainContainer = (): ReactElement | null => {
  const queryParams: QueryParams = {
    aggregate: true,
    offset: 0,
    size: 10
  };
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

  return query.data ? (
    <FlexboxGrid.Item colspan={18}>
      <strong>Total Results</strong>: {query.data?.total}
      {query.data.results && query.data.results.map((item: Job) => (
        <JobCard job={item} key={item.id} />
      ))}
    </FlexboxGrid.Item>
  ) : null;
};

export default MainContainer;