import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CepService } from 'src/app/Services/CEP/cep.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  registerForm: FormGroup;

  constructor(public cepService : CepService, public router : Router){
    this.registerForm = new FormGroup({
      login: new FormControl('', [Validators.required ]),
      password: new FormControl('', [Validators.required ]),
      apelido: new FormControl('', [Validators.required ]),
      bairro: new FormControl(),
      logradouro: new FormControl(),
      localidade: new FormControl(),
    });
  }

  onCepChange(event : any) {
    let cep = event.target.value;
    if (cep && cep.length >= 8) {
      event.target.value = cep.slice(0, 8);
      cep = cep.slice(0,8);

      this.cepService.consultarCep(cep).subscribe((data: any) => {
        this.registerForm.get('bairro')?.setValue(data.bairro);
        this.registerForm.get('logradouro')?.setValue(data.logradouro);
        this.registerForm.get('localidade')?.setValue(data.localidade);
      });

    }
  }

  register() : void {
    this.router.navigate(['/']);
  }
}
