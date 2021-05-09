import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.css']
})
export class CreditCardsComponent implements OnInit {

  creditCardAddForm: FormGroup;
  currentUserId: number;

  constructor(
    private FormBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private authService: AuthService,
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {
    this.createCreditCardAddForm();
    this.getCurrentUser();
  }

  createCreditCardAddForm() {
    this.creditCardAddForm = this.FormBuilder.group({
      userId: [this.currentUserId, Validators.required],
      cardNumber: ['', Validators.required],
      fullName: ['', Validators.required],
      CCV: ['', Validators.required],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
    });
  }

  getCurrentUser() {
    this.userService
      .getUserDetailByEmail(this.authService.getEmail())
      .subscribe((response) => {
        this.currentUserId = response.data.userId;
        this.createCreditCardAddForm();
      });
  }

  add() {
    if (this.creditCardAddForm.valid) {
      let creditCardModel = Object.assign({}, this.creditCardAddForm.value);
      this.creditCardService.add(creditCardModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı!');
      });
    }
  }

}
