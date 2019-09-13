import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cuartelcinefilo';
  movie:any;
  constructor(private httpClient: HttpClient){
    
    this.httpClient.get('http://www.omdbapi.com/?i=tt3896198&apikey=211e9fd4').subscribe((res)=>{
      console.log(res);
        console.log(res['Title']);
        this.movie = res;
        console.log(res.Title);
    });
  }
}

