export interface INote {
  id: string;
  title: string;
  text: string;
  color: 'default' | 'red' | 'yellow' | 'green' | 'blue' | 'brown';
  edited: number;
}
