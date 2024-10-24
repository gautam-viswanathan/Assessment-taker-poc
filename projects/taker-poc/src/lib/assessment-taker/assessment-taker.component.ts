import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-assessment-taker',
  templateUrl: './assessment-taker.component.html',
  styleUrls: ['./assessment-taker.component.css']
})
export class AssessmentTakerComponent implements OnInit {
  @Input() inputQuestionnaire:any
  @Input() outputData!:(data:any)=>void;
  questionnaireForm!:FormGroup;
  isVisible:boolean=false;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.inputQuestionnaire)
    this.initializeForm()
  }
  private initializeForm(){
    const formControls:any={}

    this.inputQuestionnaire?.questions?.forEach((quesId:any,index:any)=>{
      formControls[quesId?.questionId]=['',Validators.required]
    });

    this.questionnaireForm=this.fb.group(formControls)
  }
  onSubmit() {
    if (this.questionnaireForm.valid) {
      const formValues = this.questionnaireForm.value;
      console.log('Form Values:', formValues);
      this.isVisible=true
    } else {
      this.markFormGroupTouched(this.questionnaireForm);
    }
  }
    private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  closeModal(){
    this.isVisible=false
    this.outputData(this.questionnaireForm.value)
  }
}
