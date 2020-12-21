import { useQuery } from "react-query";
import { Job } from '../../types/job';
import opportunities, { QueryParams } from '../../api/opportunities';
import JobCard from '../JobCard/JobCard';

const MainContainer = () => {
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

  console.log(query);

  return (
    <>
      {query.data && (
        <>
          <strong>Total Results</strong>: {query.data?.total}
          {query.data.results && query.data.results.map((item: Job) => (
            <JobCard job={item} key={item.id} />
          ))}
        </>
      )}
    </>
  );
};

export default MainContainer;