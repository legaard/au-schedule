import { LocationInformation } from './location-information.model';
import { ClassInformation } from './class-information.model';

export interface Exam {
  examName: string;
  type: string;
  date: string;
  time: string;
  location?: LocationInformation;
  class: ClassInformation;
  note?: string;
}

export enum ExamPeriode {
  Summer,
  Winter
}
