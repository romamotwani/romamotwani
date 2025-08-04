---
title: "TypeScript Best Practices for 2024"
date: "2024-01-05"
excerpt: "Explore the latest TypeScript best practices and patterns to write more maintainable and type-safe code."
tags: ["TypeScript", "JavaScript", "Programming"]
---

# TypeScript Best Practices for 2024

TypeScript has become the de facto standard for building large-scale JavaScript applications. With its powerful type system and excellent tooling, it helps developers write more maintainable and bug-free code. In this post, we'll explore the latest best practices for TypeScript development.

## Why TypeScript?

TypeScript offers several advantages over plain JavaScript:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Improved Documentation**: Types serve as living documentation
- **Easier Refactoring**: Safe refactoring with confidence
- **Better Team Collaboration**: Clear interfaces and contracts

## TypeScript Configuration

### tsconfig.json Best Practices

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Type Definitions

### Use Interfaces for Object Shapes

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Read-only property
}

// Use interfaces for object shapes
const user: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
};
```

### Use Type Aliases for Unions and Primitives

```typescript
// Union types
type Status = "loading" | "success" | "error";

// Function types
type EventHandler = (event: Event) => void;

// Complex types
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};
```

### Generic Types

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Repository<T> {
  find(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}

// Generic class
class Cache<T> {
  private data: Map<string, T> = new Map();

  set(key: string, value: T): void {
    this.data.set(key, value);
  }

  get(key: string): T | undefined {
    return this.data.get(key);
  }
}
```

## Function Types

### Function Overloads

```typescript
function processData(data: string): string;
function processData(data: number): number;
function processData(data: string | number): string | number {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  return data * 2;
}
```

### Async Functions

```typescript
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.statusText}`);
  }
  
  return response.json();
}
```

## Error Handling

### Custom Error Types

```typescript
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public value: unknown
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code?: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}
```

### Result Types

```typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { success: false, error: "Division by zero" };
  }
  return { success: true, data: a / b };
}
```

## React with TypeScript

### Component Props

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### Custom Hooks

```typescript
interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

function useCounter(initialValue: number = 0): UseCounterReturn {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}
```

## Advanced Patterns

### Discriminated Unions

```typescript
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: User[];
};

type ErrorState = {
  status: "error";
  error: string;
};

type UserListState = LoadingState | SuccessState | ErrorState;

function renderUserList(state: UserListState) {
  switch (state.status) {
    case "loading":
      return <div>Loading...</div>;
    case "success":
      return <div>{state.data.map(user => <UserCard key={user.id} user={user} />)}</div>;
    case "error":
      return <div>Error: {state.error}</div>;
  }
}
```

### Mapped Types

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Usage
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
```

### Conditional Types

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type Parameters<T> = T extends (...args: infer P) => any ? P : never;
```

## Performance Tips

### Use `const` Assertions

```typescript
// Instead of
const colors = ["red", "green", "blue"];

// Use
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number]; // "red" | "green" | "blue"
```

### Avoid `any`

```typescript
// Bad
function processData(data: any): any {
  return data;
}

// Good
function processData<T>(data: T): T {
  return data;
}
```

### Use `unknown` for External Data

```typescript
function parseUserData(data: unknown): User {
  if (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "name" in data &&
    "email" in data
  ) {
    return data as User;
  }
  throw new Error("Invalid user data");
}
```

## Testing with TypeScript

### Jest with TypeScript

```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    screen.getByText("Click me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Conclusion

TypeScript is a powerful tool that can significantly improve your development experience and code quality. By following these best practices, you'll write more maintainable, type-safe, and robust applications.

Remember to:
- Use strict TypeScript configuration
- Prefer interfaces for object shapes
- Use type aliases for unions and primitives
- Handle errors properly with custom types
- Leverage TypeScript's advanced features like generics and conditional types
- Write comprehensive tests with proper typing

Happy coding! 🚀