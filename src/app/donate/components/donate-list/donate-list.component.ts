import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Donation } from '../../model/model.donate';
import { DonateService } from '../../service/donate.service';

@Component({
  selector: 'app-donate-list',
  templateUrl: './donate-list.component.html',
  styleUrls: ['./donate-list.component.scss']
})
export class DonateListComponent implements OnInit {

  donations:Donation[] = [];
  loading:boolean = false;
  subscriber!:Observer<any>

  constructor(private readonly donateService:DonateService) { }

  ngOnInit(): void {
    this.getAll();
    this.donateService.listUpdated()
    .subscribe((updated)=>{
      if(updated){
        this.getAll()
      }
    })
  }

  getAll():void{
    this.subscriber = {
      next:(donations) =>{
        this.donations = donations
      },
      error:console.error,
      complete:()=>{this.loading = false}
      
    }

    this.loading = true
    this.donateService.getAll()
    .subscribe(this.subscriber)
  }

}
