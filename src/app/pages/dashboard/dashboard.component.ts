import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { System } from '../../variables/system';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Var Installazione
  varInstallation;
  varInstName;
  // Var Display&Etichette
  varLabelStat;
  varTotMatch;
  // Var APs
  varAps;
  // Var Articoli
  varItem: any[] = [];
  varTotItem;
  // Var Importazioni
  varImport;
  // Var Mobile Device
  varMobile;

  // Variabili System
  system_info = new System('', '', '', '', '',  '',  '',  '',  '',  '',  '');
  // Var Templates via ItemType.ID
  templates;
  selectedOption;

  
  constructor(private httpClient: HttpClient, private router: Router) { }

    ngOnInit() {
      // Controllo l'accesso
      if (localStorage.getItem('apikey') != null || localStorage.getItem('apikey') != '') {
        // Richiamo le funzioni per API
        this.getInstallation();

        this.getDisplay();
        this.getTotalMatch();
        this.getAps();

        this.getItems();
        this.getTotItem();
        this.getImport();

        this.getMobile();

        this.getInfo();         
      } else {
        this.router.navigate(['../login']);
      }
    }

    // -------- API Requests -------------------------------------------------------------------------------------------------------------------------------------
    // Informazioni Installazione
    getInstallation() {
      let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
      this.httpClient.get(environment.URL_ROOT + '/system/configuration', { headers })
      .toPromise().then((data:any) => {
        let temp = data.configurations;
        this.varInstallation = temp;
        this.varInstName = temp.installation_name;
      }, error =>{
        console.log(error);
      });
    }
    // Templates
    getItemTypeTemplate(tid: string){
      if (tid == 'test') {
        
      } else {
        let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
        this.httpClient.get(environment.URL_ROOT + '/template/itemtype/' + tid, { headers })
        .toPromise().then((data:any) => {
          this.templates = data.templates;
        }, error =>{
          console.log(error);
        });
      }
      
    }
    // +++++++++++++++++++++
    // Display & Etichette
    getDisplay() {
      let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
      this.httpClient.get(environment.URL_ROOT + '/labelinfo/statistics', { headers })
      .toPromise().then((data:any) => {
        this.varLabelStat = data;
      }, error =>{
        console.log(error);
      });
    }
    // Total Matches
    getTotalMatch() {
      let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
      this.httpClient.get(environment.URL_ROOT + '/matching', { headers })
      .toPromise().then((data:any) => {
        this.varTotMatch = data.total_matching;
      }, error =>{
        console.log(error);
      });
    }
    // Access Point
    getAps() {
      let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
      this.httpClient.get(environment.URL_ROOT + '/accesspoint', { headers })
      .toPromise().then((data:any) => {
        this.varAps = data;
      }, error =>{
        console.log(error);
      });
    }
    // +++++++++++++++++++++
    // Articoli
    getItems() {
      let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
      this.httpClient.get(environment.URL_ROOT + '/item/type', { headers })
      .toPromise().then((data:any) => {
        this.varItem = data.itemtype;
        console.log(this.varItem[0].id);
        this.selectedOption = this.varItem[0].id;
        this.getItemTypeTemplate(this.selectedOption);
      }, error =>{
        console.log(error);
      });
    }
    // Totale Articoli
    getTotItem() {
      let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
      this.httpClient.get(environment.URL_ROOT + '/item/concrete', { headers })
      .toPromise().then((data:any) => {
        this.varTotItem = data;
      }, error =>{
        console.log(error);
      });
    }
    // Importazioni
    getImport(){
      this.httpClient.get(environment.URL_ROOT + '/import/queue')
      .toPromise().then((data:any) => {
        this.varImport = data;
      }, error =>{
        console.log(error);
      });
    }

    // +++++++++++++++++++++
    // Mobile Device
    getMobile() {
      let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
      this.httpClient.get(environment.URL_ROOT + '/mobiledevice', { headers })
      .toPromise().then((mobileAPI:any) => {
        this.varMobile = mobileAPI;
      }, error =>{
        console.log(error);
      });
    }

    // +++++++++++++++++++++
    // Info Sistema
    getInfo() {
      let headers = new HttpHeaders().set('apikey', localStorage.getItem('apikey'));
      this.httpClient.get(environment.URL_ROOT + '/system', { headers })
      .toPromise().then((data:any) => {
        this.system_info = data;
      }, error =>{
        console.log(error);
      });
    }
  
}
