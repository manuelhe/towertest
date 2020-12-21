import { ReactElement } from "react";
import { Avatar, Grid, Panel, Row, Col } from "rsuite";
import { Job } from "../../types/job";
import constants from '../../constants';
import CompensationDetail from "../CompensationDetail/CompensationDetail";
import './JobCard.css';

interface JobCardProps {
  job: Job
}

const JobCard = (props: JobCardProps): ReactElement => {
  const { job } = props;

  let organization;

  if (job.organizations.length) {
    organization = job.organizations[0];
  }

  return (
    <Panel bordered className="card">
      <a className="cardContentLink" href={constants.jobsBaseUrl + job.id} target="blank" rel="nofollow">
        <Grid fluid>
          <Row>
            <Col sm={4}>
              <Avatar src={organization?.picture} alt={organization?.name} />
            </Col>
            <Col sm={20}>
              <h3 className="cardTitle">{job.objective}</h3>
              <h4 className="cardJobType">{job.type}</h4>
              {job.compensation && <CompensationDetail compensation={job.compensation} />}
            </Col>
          </Row>
        </Grid>
      </a>
    </Panel>
  );
}

export default JobCard;
