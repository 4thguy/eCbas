import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'guest', surname: 'user', username: 'guest', password: 'guest', },
    ];
    return { users };
  }
}
