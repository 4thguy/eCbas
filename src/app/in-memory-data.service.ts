import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, name: 'guest', surname: 'user', username: 'guest', password: 'guest', },
    ];
    let items = [{
          id: 1,
          name: "Red Item",
          description: "This is a red item",
        }, {
          id: 2,
          name: "Orange Item",
          description: "This is an orange item"
        }, {
          id: 3,
          name: "Yellow Item",
          description: "This is a yellow item"
        }, {
          id: 4,
          name: "Green Item",
          description: "This is a green item"
        }, {
          id: 5,
          name: "Blue Item",
          description: "This is a blue item"
        }, {
          id: 6,
          name: "Indigo Item",
          description: "This is a indigo item"
        }, {
          id: 7,
          name: "Violet Item",
          description: "This is a violet item"
        }
    ];
    return {
      users: users,
      items: items,
    };
  }
}
