import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Trainers, Users } from './admin.interface';
import { Blog, PaymentDetails, Workout } from '../services/admin-interface';

export const usersSelectorState = createFeatureSelector<Users[]>('users');
export const usersSelectorData = createSelector(
  usersSelectorState,
  (state: Users[]) => state,
);

export const trainersSelectorState =
  createFeatureSelector<Trainers[]>('trainers');
export const trainersSelectorData = createSelector(
  trainersSelectorState,
  (state: Trainers[]) => state,
);

export const blogsSelectorState = createFeatureSelector<Blog[]>('blogs');
export const blogSelectorData = createSelector(
  blogsSelectorState,
  (state: Blog[]) => state,
);

export const blogFilterData = (id: string) =>
  createSelector(blogsSelectorState, (state: Blog[]) => {
    const _id = <string[]>Object.values(id);
    return state.find((blog) => blog._id === _id[0]);
  });

export const workoutsSelectorState = createFeatureSelector<Workout[]>('workouts');
export const workoutsSelectorData = createSelector(
  workoutsSelectorState,
  (state: Workout[]) => state
)

export const workoutFilterData = (id: string) =>
  createSelector(workoutsSelectorData, (state: Workout[]) => {
    const workout = state.find((data) => data._id == id)
    return workout
  })

export const paymentSelectorState = createFeatureSelector<PaymentDetails[]>('payments')
export const paymentSelectorData = createSelector(
  paymentSelectorState,
  (state: PaymentDetails[]) => state
)
