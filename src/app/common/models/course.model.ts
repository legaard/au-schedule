import { LocationInformation } from './location-information.model';
import { ClassInformation } from './class-information.model';

export interface Course {
  courseName: string;
  type: string;
  day: string;
  time: string;
  location: LocationInformation;
  weeks: string;
  class: ClassInformation;
  note?: string;
}
