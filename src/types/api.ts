/**
 * Generic API Error structure expected from the backend
 */
export interface ApiErrorResponse {
  message: string;
  code?: string;
  details?: Record<string, string[]>;
}

/**
 * Generic pagination meta data
 */
export interface PaginationMeta {
  total: number;
  page: number;
  size: number;
  pages: number;
}

/**
 * Generic paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}
