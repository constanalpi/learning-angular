import { Component, Input, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Address, Hero, states } from './data-model';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  
  heroForm: FormGroup; // heroForm is of type FormGroup
  states = states;
  @Input() hero: Hero;
  nameChangeLog: string[] = [];
  
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.logNameChange();
  }
  
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required], // <-- the FormControl called "name"
      secretLairs: this.fb.array([]), // <-- secretLairs as an empty FormArray
      power: '',
      sidekick: '',
    });
  }
  
  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }
  
  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }
  
  
  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }
  
  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }
  
  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }
  
  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe(/*Error handling*/);
    this.ngOnChanges();
  }
  
  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;
    const secretLairsDeepCopy: Address[] =
        formModel.secretLairs.map(
          (address: Address) => Object.assign({}, address)
    );
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }
  
  revert() { this.ngOnChanges(); }
}
