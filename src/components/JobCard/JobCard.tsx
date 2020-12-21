import { Job } from "../../types/job";
import constants from '../../constants';

import CompensationDetail from "../CompensationDetail/CompensationDetail";
import { ReactElement } from "react";

interface JobCardProps {
  job: Job
}

const JobCard = (props: JobCardProps): ReactElement => {
  const { job } = props;

  return (
    <div>
      <a href={constants.jobsBaseUrl + job.id} target="blank" rel="nofollow">
        <h3>{job.objective}</h3>
        <h4>{job.type}</h4>
        {job.compensation && <CompensationDetail compensation={job.compensation} />}
      </a>
    </div>
  );
}

export default JobCard;
