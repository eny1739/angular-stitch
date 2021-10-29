import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { GuestBook } from './model/guest-book';
import { GuestBookService } from './services/guest-book.service';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.scss']
})
export class GuestBookComponent implements OnInit {

  constructor(private readonly guestService: GuestBookService, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.getAll();
    this.guestService.listUpdated()
      .subscribe((updated: boolean) => {
        if(updated){
          this.getAll();
        }
      })
  }

  guests: GuestBook[] = [];

  guestForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required]),

  })


  onSubmit(): void{
    const guest =  this.guestForm.value;
    this.guestService.save(guest).pipe(
      switchMap(()=> this.guestService.getAll())
    ).subscribe({
      next: () => {},
      error: console.error,
      complete: () => {}
    })

    this.guestForm.reset();
    this.router.navigateByUrl(`/guest-book`)
  }

  isValid(): boolean{
    return !this.guestForm.value.name
  }

  isFieldValid(fieldName: string, parent?: AbstractControl): {[key:string]: boolean}{
    let control: AbstractControl = this.guestForm.get(fieldName) as AbstractControl;

    const classes = {
      'is-invalid': false,
      'is-valid': false
    }

    if(parent){
      control = parent;
    }

    if(control && control.touched && control.invalid){
      classes['is-invalid'] = true;
    } else if (control && control.valid) {
      classes['is-valid'] = true;
    } 
    return classes;
  }
  
  isLoggedIn(): boolean {
    return (sessionStorage.getItem('token') !== null)
  }

  getAll(){
    this.guestService.getAll()
    .pipe()
    .subscribe((guests) => {
      this.guests = guests;
    }, (error) => {
      console.error(error);
    }, () => {}
    )
  }
  
}
