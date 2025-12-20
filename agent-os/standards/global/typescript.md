---
description: TypeScript best practices and type safety
globs: ["**/*.ts", "**/*.tsx"]
---

# TypeScript Best Practices

## Type Safety
- Always use strict TypeScript (`strict: true`)
- Prefer `type` over `interface` for domain models (aligns with Prisma patterns)
- Use Prisma's generated types: `Prisma.ReferralGetPayload<{ include: {...} }>`
- Never use `any` - use `unknown` and type guards instead
- Use branded types for IDs when appropriate

## Type Definitions
```typescript
// Good: Explicit types with Prisma integration
type Referral = Omit<PrismaReferral, 'data'> & {
  data: ReferralData;
};

// Bad: Using any
function processOrder(order: any) { ... }
```

## Function Signatures
- Always type function parameters and return types
- Use async/await, never raw Promises
- Return `Promise<Type | null>` for optional results

```typescript
// Good: Fully typed function
async function getReferral(shop: string, id: string): Promise<Referral | null> {
  // ...
}

// Bad: Missing types
async function getReferral(shop, id) {
  // ...
}
```

## Type Guards
- Use type guards for runtime validation
- Prefer type guards over type assertions

```typescript
// Good: Type guard
function isReferralCodeExpired(referral: Referral): boolean {
  if (!referral.data.expiresAt) return false;
  return new Date() > new Date(referral.data.expiresAt);
}
```

## Anti-Patterns
- ❌ Using `any` types
- ❌ Missing return types
- ❌ Type assertions without validation
- ✅ Proper types everywhere
- ✅ Type guards for runtime checks
- ✅ Prisma type integration
