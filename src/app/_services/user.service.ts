import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }       

    getAll() {
        let options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}; 
        return this.http.get<User[]>(`${config.apiUrl}/api/users`, options);
    }

    getUser(id: number) {
        let options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}; 
        return this.http.get(`${config.apiUrl}/api/users/${id}`, options);
    }

    register(user: User) {
        let options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}; 
        return this.http.post(`${config.apiUrl}/api/register`, user, options);
    }

    delete(id: number) {
        let options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}; 
        return this.http.delete(`${config.apiUrl}/api/users/${id}`, options);
    }
}