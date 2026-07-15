export type SearchType = "turma" | "professor" | "sala";

export type RootStackParamList = {
  Home: undefined;

  Search: {
    type: SearchType;
  };

  Schedule: {
    item: string;
  };
};