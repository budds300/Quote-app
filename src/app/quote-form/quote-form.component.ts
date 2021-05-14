import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotedetails } from '../quotedetails';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quotedetails("","","", new Date);
  @Output() addQuote = new EventEmitter <Quotedetails>();

  submit( form: NgForm){
    this.addQuote.emit(this.newQuote)
    form.resetForm()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
