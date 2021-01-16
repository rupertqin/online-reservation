
import { atom } from 'recoil';

export const introState = atom({
  key: 'intro',
  default: {} as IntroState,
});
export interface IntroState {
  step1: number;
  step2: string;
  step3: string;
  step4: number;
  step5: string;
}