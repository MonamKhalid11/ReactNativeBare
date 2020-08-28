// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from 'react-native-elements';
type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
  export interface Colors {
    trainee: string;
    traineeLight: string;
    coach: string;
    coachLight: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
  }
}
