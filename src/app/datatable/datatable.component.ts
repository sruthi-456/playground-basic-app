
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  title = 'fhir-app-test';
  data:any;
  birthdateData=[];
  BDdata : string[] = [];
  timeOfRequest:any;
  namesearch:any;
  birthdate:any;

  constructor(  private apiService: ApiService) {
    
   }

   ngOnInit() {
    
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
       
        this.data = data['entry'].sort(function(a, b){
          return b['resource']['birthDate']-a['resource']['birthDate'];
      });
        console.log("data===>",this.data);
      }
    )
 

  this.apiService.getPatientOnBirthDate().subscribe(
    data => {
      console.log(data);
      //this.BDdata = data;
      for(let i=0;i<data['entry'].length;i++){
        if(data['entry'][i]['resource']['birthDate']){
          let yearofBD = data['entry'][i]['resource']['birthDate'].split('-');
          if(yearofBD[0]>=1960 && yearofBD[0]<=1965){
            this.birthdateData.push(data['entry'][i]);
          }
        }
      }
      console.log("birthdatedata===>",this.birthdateData);
    }
  )
}

searchbyinput(namesearch,birthdate) {
  const dateSendingToServer = new DatePipe('en-US').transform(birthdate, 'yyyy/MM/dd')
  console.log(dateSendingToServer);
  this.apiService.searchPatient(namesearch,birthdate).subscribe(
    data => {
     this.data = data;
    });
  
}

}
