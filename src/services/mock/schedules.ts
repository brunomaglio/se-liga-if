import type { ScheduleItem } from "./types";

export const mockSearchData = {
  turma: ["ADS 1", "ADS 2", "ADS 3", "ADS 4", "ADS 5"],

  professor: [
    "Carlos Silva",
    "Ana Paula",
    "Marcos Souza",
    "Fernanda Lima",
  ],

  sala: [
    "A101",
    "A102",
    "B201",
    "Laboratório 1",
    "Laboratório 2",
  ],
};

export const mockSchedules: Record<string, ScheduleItem[]> = {
  "ADS 1": [
    {
      id: "ads1-1",
      day: "Segunda-feira",
      startTime: "08:00",
      endTime: "09:40",
      subject: "Lógica de Programação",
      professor: "Carlos Silva",
      room: "A101",
    },
    {
      id: "ads1-2",
      day: "Segunda-feira",
      startTime: "10:00",
      endTime: "11:40",
      subject: "Fundamentos de Computação",
      professor: "Ana Paula",
      room: "Laboratório 1",
    },
    {
      id: "ads1-3",
      day: "Terça-feira",
      startTime: "08:00",
      endTime: "09:40",
      subject: "Matemática Discreta",
      professor: "Marcos Souza",
      room: "B201",
    },
  ],
};