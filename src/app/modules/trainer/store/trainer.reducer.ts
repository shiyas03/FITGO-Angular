import { createReducer, on } from '@ngrx/store';
import { Blog, Payment, Workout } from '../services/trainer.interface';
import { InitailProfile } from './trainer.interface';
import {
  fetchBlogDataSuccess,
  fetchPaymentSuccess,
  fetchTrainerDataSuccess,
  fetchWorkoutsDataSuccess,
} from './trainer.action';

const InitialBlogsState: Blog[] = [];
export const blogsReducer = createReducer(
  InitialBlogsState,
  on(fetchBlogDataSuccess, (_state, { blogs }) => {
    return blogs;
  }),
);

export const InitialProfileState: InitailProfile = { trainer: null };
export const profileReducer = createReducer(
  InitialProfileState,
  on(fetchTrainerDataSuccess, (_state, { trainer }) => {
    return { trainer };
  }),
);

export const InitialWorkoutsState: Workout[] = []
export const workoutReducer = createReducer(
  InitialWorkoutsState,
  on(fetchWorkoutsDataSuccess, (_state, { workouts }) => workouts)
)

export const InitialPaymentsState: Payment[] = []
export const paymentReducer = createReducer(
    InitialPaymentsState,
    on(fetchPaymentSuccess,(_state, { payments })=> payments)
)