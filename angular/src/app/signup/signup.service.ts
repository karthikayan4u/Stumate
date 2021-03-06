import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from './signup';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SignupService {

  private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public addUser(signup: Signup): Observable<Signup> {
        return this.http.post<Signup>(`${this.apiServerUrl}/signup/`, signup);
    }

    public sendVerification(email: String): Observable<Boolean> {
        return this.http.post<Boolean>(`${this.apiServerUrl}/signup/send`, email);
    }

    public checkVerification(code: String): Observable<Boolean> {
        return this.http.post<Boolean>(`${this.apiServerUrl}/signup/verify`, code);
    }
}