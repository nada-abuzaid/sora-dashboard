import { BASE_URL } from '../../config';

export const USER_URL = `${BASE_URL}/api/v1/auth/user`;

export const COMPANIES_DATA = `${BASE_URL}/api/v1/companies`;

export const USER_ENGAGEMENTS = (id) => `${COMPANIES_DATA}/${id}/users-engagements`;
export const USER_INTERESTS = (id) => `${COMPANIES_DATA}/${id}/users-interests`;
export const HEALTH_CONDITIONS = (id) => `${COMPANIES_DATA}/${id}/users-health-conditions`;
