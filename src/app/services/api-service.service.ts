import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPatients() {
    return this.httpClient.get(environment.queryURI + '/Patient',
      { headers: this.getHeaders() });
  }

  getPatientOnBirthDate(){
    return this.httpClient.get(environment.queryURI + '/Patient',
    { headers: this.getHeaders() });
}

searchPatient(name,birthdate){
  return this.httpClient.get(environment.queryURI + '/Patient?birthdate='+birthdate+'&name='+name,
  { headers: this.getHeaders() });
}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json'
    });
    return headers;
  }
}


