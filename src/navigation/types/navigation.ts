export type SearchType = 'turma' | 'professor' | 'sala';
import type { ScheduleItem } from '../../services/mock/types';

export type RootStackParamList = {
  Home: undefined;

  Search: {
    type: SearchType;
  };

  Schedule: {
    item: string;
  };

  LessonDetails: {
  schedule: ScheduleItem;
};
};
