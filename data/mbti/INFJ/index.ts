import { Genre, ScriptEntry } from '../../../types';
import { ACTION } from './action';
import { ROMANCE } from './romance';
import { HORROR } from './horror';
import { CRIME } from './crime';
import { COMEDY } from './comedy';

export const INFJ_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: ACTION,
  [Genre.ROMANCE]: ROMANCE,
  [Genre.HORROR]: HORROR,
  [Genre.CRIME]: CRIME,
  [Genre.COMEDY]: COMEDY
};