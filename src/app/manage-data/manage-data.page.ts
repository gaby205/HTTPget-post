import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.page.html',
  styleUrls: ['./manage-data.page.scss'],
})
export class ManageDataPage implements OnInit {
  post : any ={};
  
  constructor(
    private http : HttpClient,
    private toastCtrl : ToastController,
    private alertCtrl : AlertController,
    private loader : LoadingController) { }

  ngOnInit() {
  }
  add(){
    this.http.post("https://reqres.in/api/users", this.post).subscribe((res : any) => {
      console.log(res);
      this.toastCtrl.create({
        duration : 3000,
        message : "ID for new Item is "+ res.id
      }).then(l => l.present());
    });
  }
  edit(){
    this.http.put("https://reqres.in/api/users", this.post).subscribe((res : any) => {
      console.log(res);
      this.toastCtrl.create({
        duration : 3000,
        message : "ID for edited Item is "+ res.id
      }).then(l => l.present());
    });
  }
  delete(){
    this.alertCtrl.create({
      message: 'Are you truly sure to delete it?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Item(s) deleted');
            this.http.delete("https://reqres.in/api/users"+this.post).subscribe((res:any) =>{
              console.log(res);
                            
            });
          }
        }
      ]
    }).then(l => l.present());
  }
}
