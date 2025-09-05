// lib/rbac.ts
export type Role = 'admin' | 'customer' | 'buyer'

export function hasRole(userRole: unknown, allowed: Role[]): boolean {
  if (typeof userRole !== 'string') return false
  return allowed.includes(userRole as Role)
}