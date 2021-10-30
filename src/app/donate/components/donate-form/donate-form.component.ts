import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { AlertMessage } from 'src/app/user-management/models/alert-message-interface';
import { Donation } from '../../model/model.donate';
import { DonateService } from '../../service/donate.service';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.scss']
})
export class DonateFormComponent implements OnInit {

  donationForm:FormGroup = new FormGroup({
    donor: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
    message: new FormControl()
  })

  message?:AlertMessage
  donation?:Donation;

  constructor(
    private readonly activatedRoute:ActivatedRoute,
    private readonly donationService:DonateService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }

  onReset():void{
    this.donation=undefined;
    this.donationForm.reset()
  }

  onSubmitDonations():void{
    const donation:Donation = this.donationForm.value;

    this.message = {
      status:'success',
      text:`Selamat ${donation.donor} berhasil melakukan donasi sebesar ${donation.amount}, semoga donasi yang diberikan bisa bermanfaat`
    }

    this.donationService.save(donation)
    .pipe(delay(3000))
    .subscribe(()=>{
      this.onReset()
      this.router.navigateByUrl('/');
    }, console.error
    )
  }


  isFieldValid(fieldName:string, parent?:AbstractControl):{[key:string]:boolean}{
    let control:AbstractControl = this.donationForm.get(fieldName) as AbstractControl;

    const classCss = {
      'is-invalid':false,
      'is-valid':false
    }

    if(parent){
      control = parent
    }

    if(control && control.invalid && control.touched){
      classCss['is-invalid']=true
    } else if(control && control.valid){
      classCss['is-valid']=true
    }

    return classCss
  }


  getControl(username:string):AbstractControl{
    return this.donationForm.get(username) as AbstractControl;
  }

  displayErrors(fieldName: string): string {
    const control: AbstractControl = this.donationForm.get(fieldName) as AbstractControl;
    const messages: any = {
      "required": 'Field harus diisi.',
    }

    if (control && control.errors) {
      const error = Object.values(control.errors).pop();
      const key: string = Object.keys(control.errors).pop() as string;
      let message = messages[key];


      return message;
    } else {
      return '';
    }
  }

}
