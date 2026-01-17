# Cursor AI Rules - React Native/Expo/TypeScript Project

## Core Philosophy
Follow Martin Fowler's refactoring principles: make small, behavior-preserving transformations. The system should remain fully working after each refactoring step.

## General Code Quality Rules

### 1. Keep It Simple and DRY (Don't Repeat Yourself)
- If you see the same logic twice, extract it into a reusable function or component
- Eliminate duplicate code through extraction and abstraction
- Prefer composition over duplication

### 2. File Size and Organization
- **Maximum 250 lines per file** - if approaching this limit, split into smaller modules
- **Maximum 50 lines per function/component** - extract smaller functions if exceeded
- One component per file (except for tightly coupled sub-components)
- Group related utilities in focused modules (e.g., `dateUtils.ts`, `validationUtils.ts`)

### 3. Component Structure
- Break large components into smaller, focused components
- Each component should have a single, clear responsibility
- Extract reusable UI patterns into shared components
- Prefer function components over class components

### 4. Naming Conventions - Human Readable
- Use descriptive, intention-revealing names
- **Components**: PascalCase, noun-based (`UserProfile`, `NotificationList`)
- **Functions**: camelCase, verb-based (`calculateTotal`, `fetchUserData`)
- **Variables**: camelCase, descriptive (`isUserLoggedIn`, `selectedItems`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRY_ATTEMPTS`, `API_BASE_URL`)
- **Interfaces/Types**: PascalCase with descriptive names (`UserProfile`, `ApiResponse`)
- Avoid abbreviations unless universally understood (OK: `id`, `url`; Avoid: `usr`, `btn`)

### 5. Replace Regex with Readable Code
- Avoid complex regex patterns when simple string methods work
- If regex is necessary, extract it to a named constant with a comment explaining its purpose
- Prefer libraries for common patterns (email validation, phone formatting)
```typescript
// Bad
if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) { }

// Good
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Matches standard email format: localpart@domain.tld
const isValidEmail = EMAIL_PATTERN.test(email);

// Better - use a validation library
import { isEmail } from 'validator';
const isValidEmail = isEmail(email);
```

### 6. Function Extraction Rules
When you see these patterns, extract functions:
- **Long method**: Break into smaller, named functions
- **Duplicate code fragments**: Extract common logic
- **Complex conditionals**: Extract into named boolean functions
- **Comments explaining code**: The explanation should become the function name

```typescript
// Bad
if (user.age >= 18 && user.hasVerifiedEmail && user.acceptedTerms) { }

// Good
const isEligibleUser = (user: User) => 
  user.age >= 18 && user.hasVerifiedEmail && user.acceptedTerms;

if (isEligibleUser(user)) { }
```

## React Native Specific Rules

### Component Organization
```
src/
  components/
    common/        # Reusable UI components
    features/      # Feature-specific components
    layouts/       # Screen layouts
  screens/         # Screen components
  hooks/          # Custom hooks
  utils/          # Pure utility functions
  services/       # API calls and external services
  types/          # TypeScript types and interfaces
  constants/      # App constants
```

### Utility Functions Location
- **ALL utility functions MUST be in `src/utils/` directory**
- Components directory should only contain React components and their related types
- Utility functions (pure functions, formatters, helpers) belong in `src/utils/`
- Name utility files descriptively (e.g., `reminder-settings.ts`, `dateUtils.ts`, `validationUtils.ts`)
- Components should import utilities from `@/utils/` path alias

### Component Best Practices
- Extract custom logic into hooks (prefix with `use`)
- Keep JSX readable - if it's complex, extract it
- Separate business logic from presentation logic
- Use composition: pass components as props instead of conditional rendering

```typescript
// Bad - mixed concerns
const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <View>
      {loading ? <ActivityIndicator /> : users.map(user => <Text>{user.name}</Text>)}
    </View>
  );
};

// Good - separated concerns
const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await userService.getUsers();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  };
  
  return { users, loading };
};

const UserScreen = () => {
  const { users, loading } = useUsers();
  
  if (loading) return <LoadingSpinner />;
  
  return <UserList users={users} />;
};
```

### Styling with Tailwind (NativeWind)
- Use Tailwind classes for consistency
- Extract repeated style combinations into components
- Group related styles together
- Consider extracting complex style combinations to constants

```typescript
// If you see the same style pattern repeated
const CARD_STYLES = "bg-white rounded-lg p-4 shadow-md";
```

## TypeScript Rules

### Type Safety
- Always define explicit types for function parameters and return values
- Use interfaces for object shapes, types for unions/intersections
- Avoid `any` - use `unknown` if type is truly unknown
- Enable strict mode in tsconfig.json

### Type Organization
```typescript
// Bad - inline types
const fetchUser = (id: string): Promise<{name: string, email: string}> => {};

// Good - extracted types
interface User {
  name: string;
  email: string;
}

const fetchUser = (id: string): Promise<User> => {};
```

## Refactoring Patterns to Apply

### 1. Extract Function
When you see a code fragment that can be grouped together:
```typescript
// Before
const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
const tax = total * 0.08;
const shipping = total > 100 ? 0 : 10;

// After
const calculateOrderTotal = (items: CartItem[]) => {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping(subtotal);
  return subtotal + tax + shipping;
};
```

### 2. Replace Temp with Query
Replace temporary variables with function calls:
```typescript
// Before
const basePrice = quantity * itemPrice;
const discount = Math.max(0, quantity - 500) * itemPrice * 0.05;
return basePrice - discount;

// After
const calculateBasePrice = () => quantity * itemPrice;
const calculateDiscount = () => Math.max(0, quantity - 500) * itemPrice * 0.05;
return calculateBasePrice() - calculateDiscount();
```

### 3. Introduce Parameter Object
When you see groups of parameters that naturally go together:
```typescript
// Before
const createUser = (name: string, email: string, age: number, address: string) => {};

// After
interface UserData {
  name: string;
  email: string;
  age: number;
  address: string;
}

const createUser = (userData: UserData) => {};
```

### 4. Replace Conditional with Polymorphism
For complex type-based conditionals, consider object maps:
```typescript
// Before
const getDiscount = (customerType: string, amount: number) => {
  if (customerType === 'regular') return amount * 0.05;
  if (customerType === 'premium') return amount * 0.10;
  if (customerType === 'vip') return amount * 0.15;
  return 0;
};

// After
const DISCOUNT_RATES: Record<CustomerType, number> = {
  regular: 0.05,
  premium: 0.10,
  vip: 0.15,
};

const getDiscount = (customerType: CustomerType, amount: number) => 
  amount * (DISCOUNT_RATES[customerType] ?? 0);
```

## Code Review Checklist
Before suggesting code, verify:
- [ ] No duplicate code
- [ ] Functions are small and focused (< 50 lines)
- [ ] Files are manageable (< 250 lines)
- [ ] Names clearly express intent
- [ ] No complex regex without explanation
- [ ] TypeScript types are explicit
- [ ] Components have single responsibility
- [ ] Business logic separated from UI
- [ ] No magic numbers or strings (use constants)

## When Refactoring
1. Make one small change at a time
2. Test after each change
3. Commit working code frequently
4. Don't change behavior while refactoring
5. If adding features, refactor first to make the addition easy

## Anti-Patterns to Avoid
- God components (components that do too much)
- Prop drilling (pass data through many layers)
- Inline styles when Tailwind classes exist
- Boolean props (prefer component composition)
- Nested ternaries (extract to functions)
- Side effects in render logic
- Mutating state directly

## Remember
"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
