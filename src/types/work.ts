export interface Work {
  company: string;
  title: string;
  years: string;
  location: string;
  about?: string;
  job_description: Job[];
}
interface Job {
  title?: string;
  description: string;
}
