import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  hobbies: string[];
  showHobbies: boolean;
  emaill: string;
  posts: Post[];

  constructor(public postsService: PostsService) {
    this.hobbies = ['Programare', 'Angular', 'JScript'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
    });
   }
  
   toggleHobbies(){
      if (this.showHobbies == true){
      
       this.showHobbies = false;
     } else{
       this.showHobbies = true;
     }
   }

   showEmail(email){
     this.emaill = email;
     console.log(email);
   }

   deleteHobby(i){
     this.hobbies.splice(i, 1);
   }

   addHobby(hobbyInput){
     this.hobbies.push(hobbyInput);
   }


  ngOnInit() {
  }

}

   interface Post{
     id: number;
     title: string;
     body: string;
   }