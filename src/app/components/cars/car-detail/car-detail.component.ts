import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { CreditCard } from 'src/app/models/creditCard';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: CarDetail[];
  customers: Customer[];
  customerId: number;
  creditCards: CreditCard[];
  creditCardId: number;
  currentUserId: number;
  carsForRent: CarDetail[];
  carImages: CarImage[];
  colors: Color[];
  brands: Brand[];
  filterText: string = '';
  dataLoaded: boolean = false;
  brandSelected: string = '';
  colorSelected: string = '';
  filterBrandColor: string[];
  rentDate: Date;
  returnDate: Date;
  addRent: Rental;
  control: boolean = false;
  imagePath: string;

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private rentService: RentalService,
    private customerService: CustomerService,
    private userService: UserService,
    private authService: AuthService,
    private creditCardService: CreditCardService,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.getCarImages();
    this.getCurrentUser();
    this.getColors();
    this.getBrands();
    this.getCustomer();
    this.getCarsDetails();
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarDetailsByColor(params['colorId']);
      } else if (params['brandId']) {
        this.getCarDetailsByBrand(params['brandId']);
      } else if (params['carId']) {
        this.getCarsDetailsByCar(params['carId']);
      }
    });
  }

  getCarsDetailsByCar(carId: number) {
    this.carService.getCarsDetailsByCar(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColor(colorName: string) {
    this.carService.getCarDetailsByColor(colorName).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrand(brandName: string) {
    this.carService.getCarDetailsByBrand(brandName).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCustomer() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
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

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarImageById(carId: number): string {
    let imagePath = '';
    this.carImages.forEach((car) => {
      if (car.carId == carId) {
        imagePath = 'https://localhost:44323' + car.imagePath;
      }
    });
    return imagePath;
  }

  currentBrand(brand: Brand) {
    this.brandSelected = brand.brandName;
  }

  currentColor(color: Color) {
    this.colorSelected = color.colorName;
  }

  currentCarForRent(carId: number) {
    this.carService.getCarsDetailsByCar(carId).subscribe((response) => {
      this.carsForRent = response.data;
    });
  }

  setFilter() {
    this.filterBrandColor = [];
    this.filterBrandColor.push(this.colorSelected, this.brandSelected);
  }

  setClear() {
    this.filterBrandColor = [];
    this.filterBrandColor.push('', '');
    this.colorSelected = 'Renk';
    this.brandSelected = 'Marka';
  }

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

}
