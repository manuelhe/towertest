export type Compensation = {
  data: {
    code: string;
    currency: string;
    minAmmount?: number;
    maxAmmount?: number;
    periodicity?: string;
  };
  visible: boolean;
}

export type Skill = {
  name: string;
  experience: string;
}

export type Organization = {
  id: number;
  name: string;
  picture?: string;
}

export type Job = {
  compensation: null | Compensation;
  deadline: Date;
  id: string;
  objective: string;
  skills: Skill[];
  type: string;
  organizations: Organization[];
}
