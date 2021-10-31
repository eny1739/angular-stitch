import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
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
    if(this.isLoggedIn()){
      this.getAll();
      this.guestService.listUpdated()
      .subscribe((updated: boolean) => {
        if(updated){
          this.getAll();
        }
      })

      this.activatedRoute.params.pipe().subscribe({ next:()=> this.getForm()})
    }
  }

  guests: GuestBook[] = [];
  searchData!: string;

  guestForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null),

  })


  onSubmit(): void{
    const guest = this.guestForm.value;
    if(!guest.message) guest.message = " ";
    if(this.isLoggedIn()){
      this.guestService.save(guest).pipe(
        switchMap(()=> this.guestService.getAll())
      ).subscribe({
        next: () => {},
        error: console.error,
        complete: () => {}
      })
    } else if(!this.isLoggedIn()) {
      this.guestService.save(guest).pipe().subscribe({
        next: () => {},
        error: console.error,
        complete: () => {}
      })
    }

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

  onDelete(id: string):void{
    this.guestService.delete(id)
      .pipe(
        switchMap(() => this.guestService.getAll())
      )
      .subscribe((guests: any) => {
        console.log('guest deleted');
        this.guests = guests;
      }, (error) => {
        console.error(error);
        
      }, () => {}
      )
  }

  getForm(){
    this.activatedRoute.params.pipe(
      map((params) => params.id),
      switchMap((id: string) => {
        if(!id){
          return EMPTY;
        } 
        else{
          return this.guestService.getById(id);
        } 
      })
      )
      .subscribe((guest: GuestBook) => {
        if(guest){
            this.setFormValues(guest)
        }
      },  (error) => {
        console.error(error);
        
      }, () => {}
      )
  }

  setFormValues(guest: GuestBook): void{
    this.guestForm.addControl("id", new FormControl());
    this.guestForm.get("id")?.setValue(guest.id);
    this.guestForm.get('name')?.setValue(guest.name);
    this.guestForm.get('email')?.setValue(guest.email);
    this.guestForm.get('message')?.setValue(guest.message);

  }
  
}
