import { Component } from '@angular/core';
import { Quotedetails } from './quotedetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteEntry= [
    new Quotedetails('Bill Gates',`Success is a lousy teacher. It seduces smart people into thinking they can't lose. `,'John Othiambo',new Date(2021,15,5)),
    new Quotedetails('Nelson Mandela', 'I never lose I either win or learn.','Mabel Karani',new Date(2019,11,23)),
    new Quotedetails('Steve Jobs', 'Have the courage to follow your heart and intution.They somehow know what you truly want to become.','Tamminga Budds',new Date(2020,6,15)),
    new Quotedetails('Mother Teresa','Not all of us can do  reat things.But we can  small things, with great love.','Ian Olindi',new Date(2021,4,1)),
    new Quotedetails('Thomas Edison',"I have not failed. I've just found 10,000 ways that won't work.",'John Mwangi',new Date(2021,2,26)),
    new Quotedetails('Albert Einstein','Anyone who has never made a mistake has never done anything new.','James Kimani',new Date(2021,8,30)),
    new Quotedetails('Charles Schulz','Just remember once you are over  the hill you begin to pick up speed','Amos Arisi',new Date(2021,4,3))
  ];
toggleDetails(index:any){
  this.quoteEntry[index].showDetails= !this.quoteEntry[index].showDetails;
}
removeItem(removeQuote:any,index:any){
  
}
}
