import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  donation?:Donation;

  constructor(
    private readonly activatedRoute:ActivatedRoute,
    private readonly donationService:DonateService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }


}
