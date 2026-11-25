// Minimal types for Bun's built-in test runner (run with `bun test`).
declare module "bun:test" {
  export function describe(name: string, fn: () => void): void;
  export function test(name: string, fn: () => void | Promise<void>): void;
  export function expect(value: unknown): {
    toBe(v: unknown): void;
    toEqual(v: unknown): void;
    toBeUndefined(): void;
  };
}
