import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usersvalue: any[];
  filteruserdata: any[];
  filterBy: string = '';
  users: any[];

  searchBoxTxt: string = '';

  constructor(private http: HttpClient, private _userService: UserService) {}

  ngOnInit() {
    this.getData();
    this.filter(2);
    // this.http
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .subscribe((usersvalue) => {
    //     this.usersvalue = usersvalue;
    //     this.filteruserdata = [...this.usersvalue];
    //   });
  }

  getData() {
    this._userService.getUsers().subscribe((usersvalue) => {
      this.usersvalue = usersvalue;
      this.filteruserdata = [this.usersvalue];
      console.log(this.users);
    });
  }

  filter(value) {
    this.filterBy = value;
    this.filteruserdata = this.usersvalue.filter((obj) => obj.name == value);
  }

  // filter() {
  //   this.filteruserdata = [
  //     this.usersvalue.filter((user) => user.name.includes(this.filterBy)),
  //   ];
  // }

  // filter() {
  //   this.filteruserdata = [
  //     ...this.usersvalue.filter((user) => user.name.includes(this.filterBy)),
  //   ];
  // }

  // userfilter() {
  //   this.filteruserdata = [
  //     this.usersvalue.filter((userdata) =>
  //       userdata.name.includes(this.filterBy)
  //     ),
  //   ];
  // }
}
