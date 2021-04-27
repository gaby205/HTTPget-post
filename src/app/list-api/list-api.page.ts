import { Router, RouterModule } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.page.html',
  styleUrls: ['./list-api.page.scss'],
})
export class ListAPIPage implements OnInit {
  loading: any;
  dataPOST = [];

  constructor(
    private http : HttpClient,
    private loadCtrl : LoadingController,
    private router : Router
  ) { }

  ngOnInit() {
  }
  
  async getDataPost(){
    
    this.loading = await this.loadPresent();

    this.http.get("https://reqres.in/api/users").subscribe((res : any) =>{
      this.dataPOST = res;
      console.log(res);
      if (this.loading) {
        this.loading.dismiss();
      }
    });
    
  }

  ionViewDidEnter() {
    this.getDataPost();
  }

  public async loadPresent(): Promise<any>{

    const loading = await this.loadCtrl.create({
      message: "LOADING ...",
      backdropDismiss: true
    })
    await loading.present();

    return loading;

  }

  goToData(){
    this.router.navigate(['/manage-data']);
  }
}
