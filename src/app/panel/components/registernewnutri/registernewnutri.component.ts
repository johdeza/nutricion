import { NutriologosService } from './../../../services/nutriologos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-registernewnutri',
  templateUrl: './registernewnutri.component.html',
  styleUrls: ['./registernewnutri.component.css']
})
export class NewNutriologoComponent implements OnInit {

  constructor(private nutriologosService: NutriologosService) { }

  newNutriologo = new FormGroup({
    address: new FormControl('', Validators.required),
    name: new FormControl("", Validators.required),
    birthday: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    clinicName: new FormControl('', Validators.required),
    addressClinic: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    identificationCard: new FormControl('', Validators.required),
    roleId: new FormControl('1', Validators.required),
  })

  savedNutriologo() {
    alert("Registro realizado...");
    console.log(this.newNutriologo.value);
    this.nutriologosService.savedNutriologo(this.newNutriologo.value).subscribe(res =>
      console.log(res))
  }


  ngOnInit(): void {
  }
}