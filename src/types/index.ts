export * from "./api";

/**
 * Shared generic types that will be used across the application
 * once the backend is integrated.
 * 
 * Note: Feature-specific types (e.g. DemoStudent, HistoricalResult)
 * remain in their respective feature folders (src/features/.../types)
 * to maintain a modular, scalable architecture.
 */

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// Ensure the auth models align with standard representations
export type AppRole = "student" | "faculty" | "admin";
