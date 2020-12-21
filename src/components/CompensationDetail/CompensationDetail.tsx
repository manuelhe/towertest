import { ReactElement } from "react";
import { Compensation } from "../../types/job";

interface CompensationDetailProps {
  compensation: Compensation
}

const CompensationDetail = (props: CompensationDetailProps): ReactElement | null => {
  const { compensation } = props;
  const { data, visible } = compensation;
  return visible ? (
    <div>
      <span>{data.currency}</span>
      <span>{data.minAmmount}</span> -
      <span>{data.maxAmmount}</span>/
      <span>{data.periodicity}</span>
    </div>
  ) : null;
};

export default CompensationDetail;
