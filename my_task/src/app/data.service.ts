
import { Injectable } from '@angular/core';

export interface users {
  name: string;
  Id: number;
  Password: string;
  Email: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

   ELEMENT_DATA: users[] = [
    {name: 'Abdul Raheem', Id: 1, Password: 'user1', Email:'user1@gmail.com'},
    {name: 'Zain ', Id: 2, Password: 'user2', Email:'user2@gmail.com'},
    {name: 'Rapheal', Id: 3, Password: 'user3', Email:'user3@gmail.com'},
    {name: 'Moazzam', Id: 4, Password: 'user4', Email:'user4@gmail.com'},
  
  ]
  
  public get_id(id: number)
  {
    const user = this.ELEMENT_DATA.find((users) => users.Id === id);
    if (!user) 
    {
      return null; 
    } 

    return user;
  }

  update(data: any)
  {
      

  }
}
