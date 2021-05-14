import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotedetails } from '../quotedetails';

@Component({
  selector: 'app-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.css']
})
export class QuoteMessageComponent implements OnInit {
@Input() message!: Quotedetails;
@Output() removeQuote = new EventEmitter <boolean>();
 quoteDelete(deleteItem:boolean){
this.removeQuote.emit(deleteItem);
 }  
 numberOfLikes: number = 0;
 numberOfDislikes: number = 0;

constructor() { }


  ngOnInit(): void {
  }

}
