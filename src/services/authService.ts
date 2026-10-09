/**
 * Mock Auth Service
 * 
 * This isolates the demo authentication logic. 
 * In Phase 16+, these functions will be replaced with real API calls via apiClient.
 */

import type { User } from "@/features/auth/types/auth";

export const authService = {
  /**
   * Future implementation: await fetch(`${API_BASE_URL}/auth/login`, ...)
   */
  async login(_email: string): Promise<User> {
    // Current Demo Implementation:
    // ... logic is handled in AuthContext directly for demo purposes ...
    // This is just a placeholder interface for the future.
    return {} as User;
  },

  /**
   * Future implementation: await fetch(`${API_BASE_URL}/auth/logout`, ...)
   */
  async logout(): Promise<void> {
    // Current Demo Implementation simply clears localStorage
    localStorage.removeItem("auth_user");
    localStorage.removeItem("auth_token");
  }
};
