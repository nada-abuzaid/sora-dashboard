import { BASE_URL } from '../../config';

export const USER_URL = `${BASE_URL}/api/v1/auth/user`;

export const COMPANIES_DATA = `${BASE_URL}/api/v1/companies`;
export const COMPANY_DATA = (id) => `${BASE_URL}/api/v1/companies/${id}`;

export const USER_ENGAGEMENTS = (id) => `${COMPANY_DATA(id)}/users-engagements`;
export const USER_INTERESTS = (id) => `${COMPANY_DATA(id)}/users-interests`;
export const HEALTH_CONDITIONS = (id) => `${COMPANY_DATA(id)}/users-health-conditions`;

export const EMPLOYEES_GENDER = (id) => `${COMPANY_DATA(id)}/employees-gender`;
