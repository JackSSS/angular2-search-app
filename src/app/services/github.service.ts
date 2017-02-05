import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '6902b8b1dace745f5bde';
    private client_secret = 'HAHA';
    constructor(private _http: Http) { //inject service from import and name it.
        console.log('Github Service Ready');
        this.username = "JackSSS";
    }

    getUsr(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_sercret='+this.client_secret)
        .map(res => res.json());
    }
}