import { expect } from "vitest";
import "@testing-library/jest-dom";

// @testing-library/jest-dom에서 사용하는 expect를 Vitest의 expect로 연결
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).expect = expect;
