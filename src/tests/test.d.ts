import 'vitest';
import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  namespace Vi {
    type Assertion<T = any> = TestingLibraryMatchers<T, void>;
  }
}
