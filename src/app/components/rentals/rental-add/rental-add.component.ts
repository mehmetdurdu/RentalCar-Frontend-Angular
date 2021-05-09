import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentAddForm: FormGroup;
  customers: Customer[];
  creditCards: CreditCard[];
  creditCardId: number;
  control: boolean = false;
  currentUserId: number;
  carId: number;
  customerId: number;

  constructor(
    private formBuilder: FormBuilder,
    private rentService: RentalService,
    private toastrService: ToastrService,
    private customerService: CustomerService,
    private creditCardService: CreditCardService,
    private userService: UserService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    this.getCurrentUser();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = parseInt(params['carId']);
        this.createRentAddForm();
      }
    });
  }

  createRentAddForm() {
    this.rentAddForm = this.formBuilder.group({
      carId: [this.carId, Validators.required],
      customerId: ['', Validators.required],
      returnDate: ['', Validators.required],
      rentDate: ['', Validators.required],
    });
  }

  rent() {
    if (this.rentAddForm.valid) {
      let rentModel = Object.assign({}, this.rentAddForm.value);

      this.rentService.add(rentModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          this.toastrService.error(responseError.error.message);
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat!');
    }
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  getCustomerById() {}

  getRentMinDate() {
    var today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0, 10);
  }
  getReturnMinDate() {
    var today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0, 10);
  }

  getCreditCardByCustomerId(currentCustomerId: number) {
    this.creditCardService
      .getAllByCustomerId(currentCustomerId)
      .subscribe((response) => {
        this.creditCards = response.data;
        if (this.creditCards.length > 0) {
          this.control = true;
        }
      });
  }

  getCurrentUser() {
    this.userService
      .getUserDetailByEmail(this.authService.getEmail())
      .subscribe((response) => {
        this.currentUserId = response.data.userId;
        this.getCreditCardByCustomerId(this.currentUserId);
      });
  }

}
