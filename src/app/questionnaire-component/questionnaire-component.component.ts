import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup,FormBuilder,FormArray,Validators } from "@angular/forms"


@Component({
  selector: 'app-questionnaire-component',
  templateUrl: './questionnaire-component.component.html',
  styleUrls: ['./questionnaire-component.component.scss']
})
export class QuestionnaireComponentComponent implements OnInit {

  private _jsonURL = 'assets/questionnaire.json';

  dynamicJSON: any ;
  submitted : boolean = false;
  abc="";
  showData:any;
  questionFormGroup:FormGroup;

  constructor(private http: HttpClient ,private formBuilder:FormBuilder)
   { }  
  

  ngOnInit(): void {

    this.getJSON().subscribe(data => {
   
      this.dynamicJSON = data.item;

      // let questionForm = {
      //   questions: this.dynamicJSON
      // }
      this.questionFormGroup = this.formBuilder.group({
        questions: this.formBuilder.array([])
      })

      this.questionFormGroup = this.formBuilder.group({
        value: ['', Validators.required],
        2.1: ['', Validators.required],
        2.2:['', Validators.required],
        2.3:['', Validators.required],
        2.4:['',Validators.required],
        3.1:['',Validators.required],
        3.2:['',Validators.required]
      })

       //this.generateForm()

    })

  }

  get f() { return this.questionFormGroup.controls; }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);  
  }

  
 
  generateForm(){
    this.dynamicJSON.forEach( (t , i) =>{
      let questions =<FormArray> this.questionFormGroup.controls["questions"]; 
     questions.push(this.formBuilder.group({
      value :['' , Validators.required],
      2.1:['', Validators.required],
      2.2:['', Validators.required],
      2.3:['', Validators.required],
      2.4:['',Validators.required],
      3.1:['',Validators.required],      
      3.2:['',Validators.required]
     }))
    })
  }

  sortDynamicJson(){
    let newArray = this.dynamicJSON;
    let questions: any = [    ]
    newArray.forEach(element => { 
        questions.push(element)
    });
    questions.sort((a, b) => a.order - b.order);
    this.dynamicJSON = questions;
  }

  onSubmit() {
    this.submitted = true
    //this.showData = this.questionFormGroup.value;
    this.showData = {      
      item: [
        {
        linkId: "1",
        answer: [
          {
            valueCoding: {
              value:this.questionFormGroup.value['value'],
              display: "Yes"
            },
          }
        ],
           
        item: [
          {
            linkId: "2",
            item: [
              {
                linkId: "2.1",
                answer: [
                  {
                  valueCoding: {
                    value:this.questionFormGroup.value['2.1'],
                    display: "Yes"
                  },
                }
                ]
              },
              {
                linkId: "2.2",
                answer: [
                  {
                    valueCoding: {
                      value:this.questionFormGroup.value['2.2'],
                      display: "Yes"
                    },
                  }
                ]
              },
              {
                linkId: "2.3",
                answer: [
                  {
                    valueCoding: {
                      value:this.questionFormGroup.value['2.3'],
                      display: "Yes"
                    },
                  }
                ]
              },
              {
                linkId: "2.4",
                answer: [
                  {
                    valueCoding: {
                      value:this.questionFormGroup.value['2.4'],
                      display: "Yes"
                    },
                  }
                ]
              }
            ]
          },
          {
          item:[
            {
            linkId: "3",
            item: [
              {
                linkId: "3.1",
                answer: [
                  {
                  valueCoding: {
                    value:this.questionFormGroup.value['3.1'],
                    display: "Yes"
                  },
                }
                ]
              },
              {
                linkId: "3.2",
                answer: [
                  {
                    valueCoding: {
                      value:this.questionFormGroup.value['3.2'],
                      display: "Yes"
                    },
                  }
                ]
              },
          ]
        }
        ],
        
      }
    ]
  }
]
    }
    console.log(this.questionFormGroup.value)
  }
}



