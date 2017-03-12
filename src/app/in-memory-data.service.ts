import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
    { id: 11, name: 'Goblin Shaman' },
    { id: 12, name: 'Aboleth' },
    { id: 13, name: 'Beholder' },
    { id: 14, name: 'Gelatinous Cube' },
    { id: 15, name: 'Mind Flayer' },
    { id: 16, name: 'Gnoll' },
    { id: 17, name: 'Blue Dragon' },
    { id: 18, name: 'Angel of Vengeance' },
    { id: 19, name: 'Magma Golem' },
    { id: 20, name: 'Roc' },
    { id: 21, name: 'Chimera' },
    { id: 22, name: 'Basilisk' },
    { id: 23, name: 'Lich' }
    ];
    return {heroes};
  }
}
