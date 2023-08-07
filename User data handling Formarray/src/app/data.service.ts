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
    {name: 'Ali Rehman', Id: 5, Password: 'user5', Email:'user5@gmail.com'},
    {name: 'Zain Ali', Id: 6, Password: 'user6', Email:'user6@gmail.com'},
    {name: 'Yasir', Id: 7, Password: 'user7', Email:'user7@gmail.com'},
    {name: 'Moazzam Haider', Id: 8, Password: 'user8', Email:'user8@gmail.com'},
    {name: 'Zia Ullah', Id: 9, Password: 'user9', Email:'user9@gmail.com'},
    {name: 'Ahtisham', Id: 10, Password: 'user10', Email:'user10@gmail.com'},

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

  update(updatedUser: users): boolean {
    const index = this.ELEMENT_DATA.findIndex((user) => user.Id === updatedUser.Id);
    if (index !== -1) {
      this.ELEMENT_DATA[index] = { ...updatedUser };
      return true; 
    }
    return false; 
  }
}
