import { INote } from './types';

export const fetchNotes = async (): Promise<INote[] | never> => {
  const response = await fetch(`${process.env.PUBLIC_URL}/notes.json`);
  if (response.ok) return (await response.json()) as INote[];
  throw new Error(response.statusText);
};
