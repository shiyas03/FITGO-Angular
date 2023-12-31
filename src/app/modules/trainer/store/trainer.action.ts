import { createAction, props } from '@ngrx/store';
import { Blog, Payment, Workout } from '../services/trainer.interface';
import { Profile } from './trainer.interface';

export const fetchBlogData = createAction('[Blog API] Fetch Blog Data');
export const fetchBlogDataSuccess = createAction(
  '[Blog API] Fetch Blog Data Success',
  props<{ blogs: Blog[] }>(),
);

export const fetchTrainerData = createAction(
  '[Trainer API] Fetch Trainer Data',
  props<{ id: string }>(),
);
export const fetchTrainerDataSuccess = createAction(
  '[Trainer API] Fetch Trainer Data Success',
  props<{ trainer: Profile }>(),
);

export const fetchWorkoutsData = createAction('[Workout API] Fetch Workouts Data')
export const fetchWorkoutsDataSuccess = createAction('[Workout API] Fetch Workouts Data Success',
  props<{ workouts: Workout[] }>()
)

export const fetchPaymentData = createAction('[Payment API] Fetch Payments Data', props<{ trainerId: string }>())
export const fetchPaymentSuccess = createAction('[Payment API] Fetch Payments Data Success',
  props<{ payments: Payment[] }>()
)