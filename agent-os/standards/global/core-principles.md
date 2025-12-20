---
description: Core coding principles following Martin Fowler and Sandy Metz
alwaysApply: true
---

# Core Principles (Martin Fowler & Sandy Metz)

## Single Responsibility Principle (Sandy Metz)
- Each function, class, or module should have ONE reason to change
- Functions should do ONE thing and do it well
- Keep functions small (ideally < 10 lines, max 20 lines)
- Extract complex logic into well-named functions

## Tell, Don't Ask (Martin Fowler)
- Objects should tell other objects what to do, not ask for their data
- Prefer methods that encapsulate behavior over exposing internal state
- Example: `referral.isActive()` instead of checking `referral.status === 'active'` externally

## Composition Over Inheritance
- Prefer composition and small, focused functions
- Use higher-order functions and function composition
- Avoid deep inheritance hierarchies

## Domain-Driven Design (Martin Fowler)
- Models (`app/models/`) represent domain entities
- Services (`app/services/`) contain business logic
- Routes (`app/routes/`) handle HTTP concerns only
- Keep domain logic out of routes

## Refactoring Principles (Martin Fowler)
- Extract Method: Break large functions into smaller, named functions
- Extract Variable: Use descriptive variable names
- Replace Magic Numbers/Strings: Use constants
- Remove Duplication: DRY (Don't Repeat Yourself)

## Code Quality Rules

### Naming Conventions
- Functions: verb phrases (`getReferral`, `createConversion`, `validateCode`)
- Variables: noun phrases (`referralCode`, `orderAmount`, `commissionRate`)
- Booleans: predicate phrases (`isActive`, `hasExpired`, `shouldProcess`)
- Constants: UPPER_SNAKE_CASE (`REFERRAL_CODE_ATTRIBUTE_NAME`)

### Comments and Documentation
- Use JSDoc for public functions
- Explain WHY, not WHAT (code should be self-documenting)
- Document complex business rules

### Error Messages
- Use descriptive error messages
- Include context (shop, orderId, etc.)
- Use consistent error message format

## Anti-Patterns to Avoid

### ❌ Don't Do This
- Large functions (> 20 lines)
- Deeply nested conditionals (> 2 levels)
- Magic numbers or strings
- `any` types
- Mixing concerns (data access + business logic)
- Duplicate code
- Unclear variable names (`data`, `result`, `temp`)

### ✅ Do This Instead
- Extract small, named functions
- Use early returns and guard clauses
- Extract constants
- Use proper types
- Separate concerns (models vs services)
- Extract common logic
- Use descriptive names (`referralCode`, `orderAmount`)
