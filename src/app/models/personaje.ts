import { Episode } from './episode';
import { Origin } from './origin';
import { Locations } from './locations';

export interface Personaje {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  // origin: Origin;
  // location: Locations;
  image?: string;
  // episode: Array<Episode>;
  url?: string;
  created?: string;
}

