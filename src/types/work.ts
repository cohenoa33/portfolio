export interface Work {
  company: string;
  title: string;
  years: string;
  location: string;
  jobDescription: Job[];
}
interface Job {
  title?: string;
  description: string;
  id: string;
}
