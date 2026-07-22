import { mockSchedules } from './mock/schedules';
import type { ScheduleItem } from './mock/types';

async function getByClass(className: string): Promise<ScheduleItem[]> {
  return mockSchedules[className] ?? [];
}

export const scheduleService = {
  getByClass,
};