export class Quotedetails {
  showDetails!: boolean;
  constructor(public author: string, public entryQuote:string, public submittedName:string ,public Date : Date){
      this.showDetails= false;
  }  
}
