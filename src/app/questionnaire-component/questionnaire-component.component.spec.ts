import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireComponentComponent } from './questionnaire-component.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormBuilder, Validators } from '@angular/forms';
describe('QuestionnaireComponentComponent', () => {
  let component: QuestionnaireComponentComponent;
  let fixture: ComponentFixture<QuestionnaireComponentComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({      
      imports: [HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ QuestionnaireComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponentComponent);
    component = fixture.componentInstance;
    component.questionFormGroup = formBuilder.group({
      value: ['', Validators.required],
      2.1: ['', Validators.required],
      2.2:['', Validators.required],
      2.3:['', Validators.required],
      2.4:['',Validators.required],
      3.1:['',Validators.required],
      3.2:['',Validators.required]
    });
    fixture.detectChanges();
    component.dynamicJSON = [
      {
        "linkId": "1",
        "text": "Do you have allergies?",
        "type": "boolean"
      },
      {
        "linkId": "2",
        "text": "General questions",
        "type": "group",
        "item": [
          {
            "linkId": "2.1",
            "text": "What is your gender?",
            "type": "string"
          },
          {
            "linkId": "2.2",
            "text": "What is your date of birth?",
            "type": "date"
          },
          {
            "linkId": "2.3",
            "text": "What is your country of birth?",
            "type": "string"
          },
          {
            "linkId": "2.4",
            "text": "What is your marital status?",
            "type": "string"
          }
        ]
      },
      {
        "linkId": "3",
        "text": "Intoxications",
        "type": "group",
        "item": [
          {
            "linkId": "3.1",
            "text": "Do you smoke?",
            "type": "boolean"
          },
          {
            "linkId": "3.2",
            "text": "Do you drink alchohol?",
            "type": "boolean"
          }
        ]
      }
    ]
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test form validity', () => {
    const form = component.questionFormGroup;
    expect(form.valid).toBeFalsy();

    const allergies = form.controls['value'];
    allergies.setValue('Yes');

    const gender = form.controls['2.1'];
    gender.setValue('Male');

    const date = form.controls['2.2'];
    date.setValue('01/01/2020');

    const country = form.controls['2.3'];
    country.setValue('UK');
    const maritalstatus = form.controls['2.4'];
    maritalstatus.setValue('Single');
    const smoke = form.controls['3.1'];
    smoke.setValue('Yes');
    const alcohol = form.controls['3.2'];
    alcohol.setValue('No');

    expect(form.valid).toBeTruthy();
  });

});
