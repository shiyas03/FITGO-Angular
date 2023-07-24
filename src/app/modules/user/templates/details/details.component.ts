import { Component, OnInit, OnDestroy } from '@angular/core';
import { Details } from '../../store/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DetailsReturn } from '../../services/user.interface';
import { pattern } from '../../../../helpers/regex.pattern';
import { showError } from '../../../../helpers/swal.popup';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  detailsForm!: FormGroup;
  submit: boolean = false;
  private subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private userService: UserAuthService,
    private router: Router,
  ) {
    this.detailsForm = this.fb.group({
      age: ['', [Validators.required, Validators.pattern(pattern.numeric)]],
      height: ['', [Validators.required, Validators.pattern(pattern.numeric)]],
      weight: ['', [Validators.required, Validators.pattern(pattern.numeric)]],
      goalWeight: [
        '',
        [Validators.required, Validators.pattern(pattern.numeric)],
      ],
      months: ['', [Validators.required, Validators.pattern(pattern.numeric)]],
      goal: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      activity: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submit = true;
    if (this.detailsForm.valid) {
      this.uploadDetails(this.detailsForm.value);
    }
  }

  uploadDetails(formDetails: Details) {
    const details: Details = formDetails;
    const calories = this.calorieCalculator();
    details.calorieBurn = Math.floor(calories.caloriesBurn);
    details.calorieNeed = Math.floor(calories.caloriesNeed);
    details.id = localStorage.getItem('id');
    this.subscription = this.userService.uploadDetails(details).subscribe(
      (res: DetailsReturn) => {
        if (res.success) {
          localStorage.setItem('userToken', res.token);
          this.router.navigate(['/']);
        }
      },
      (error) => {
        showError(error);
      },
    );
  }

  calorieCalculator() {
    const { age, height, weight, goal, goalWeight, months, gender, activity } =
      this.detailsForm.value;
    let BMR: number;
    let calories!: number;
    if (gender === 'Male') {
      BMR = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      BMR = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }

    switch (activity) {
      case 'Sedentary':
        calories = BMR * 1.2;
        break;
      case 'Lightly':
        calories = BMR * 1.375;
        break;
      case 'Moderately':
        calories = BMR * 1.55;
        break;
      case 'Hard':
        calories = BMR * 1.725;
        break;
      default:
        break;
    }

    const weightDiff = Math.abs(weight - goalWeight);
    const pound = weightDiff * 2.205;
    const totalPounds = pound * 4.5;
    const caloriePerMonth = (totalPounds / months) * 100;
    let totalCalories: number;
    if (goal === 'gain') {
      totalCalories = caloriePerMonth + calories;
    } else {
      totalCalories = Math.floor(calories - caloriePerMonth);
    }
    return { caloriesBurn: calories, caloriesNeed: totalCalories };
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
