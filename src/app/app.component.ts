import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  takerQuestionsData:any
  title = 'lib-app';
  constructor(){}
  
  ngOnInit(){
    this.takerQuestionsData={
      questions:[{
        questionId:"ques1",
        questionType:'QUESTION_TYPE.SUBJECTIVE_LONG',
        question:'How are you? Write a 200 word essay on global warming'
      },
      {
        questionId:"ques2",
        questionType:'QUESTION_TYPE.DATE',
        question:'Date of birth'
      },
      { questionId:"ques3",
        questionType:'QUESTION_TYPE.OBJECTIVE',
        question:'Which car would you choose',
        options:['Merc G-wagon','BMW i8','Pagani Zonda','Ferrari la ferrari']
      }],
      bannerImage:'assets/laptop.png',
      headerText:'This is a taker Poc'
    }
  }
  dataTransfer(data:any){
    console.log(data)
  }
}
