// endpoints.ts

const getBaseURL = (): string => {
  // For Vite
  if (import.meta.env?.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // Fallback for development
  return "http://localhost:5173";
};

const baseURL = getBaseURL();

export const endpoints = {
  baseURL,
  property: {
    base: `${baseURL}/property`,
    getAll: () => `${baseURL}/property/getall`,
    getAllUsers: (id: string) => `${baseURL}/property/getallusers/${id}`,
    getById: (id: string) => `${baseURL}/property/${id}`,
    create: () => `${baseURL}/property`,
    update: (id: string) => `${baseURL}/property/${id}`,
    delete: (id: string) => `${baseURL}/property/${id}`,
  },
  realEstateCompany: {
    base: `${baseURL}/realEstateCompany`,
    getAll: () => `${baseURL}/realEstateCompany`,
    getById: (id: string) => `${baseURL}/realEstateCompany/${id}`,
    create: () => `${baseURL}/realEstateCompany`,
    update: (id: string) => `${baseURL}/realEstateCompany/${id}`,
    delete: (id: string) => `${baseURL}/realEstateCompany/${id}`,
  },
  laundryRoom: {
    base: `${baseURL}/laundryRoom`,
    getAll: () => `${baseURL}/laundryRoom`,
    getById: (id: string) => `${baseURL}/laundryRoom/${id}`,
    create: () => `${baseURL}/laundryRoom`,
    update: (id: string) => `${baseURL}/laundryRoom/${id}`,
    delete: (id: string) => `${baseURL}/laundryRoom/${id}`,
  },
  laundryTime: {
    base: `${baseURL}/laundryTime`,
    getAll: () => `${baseURL}/laundryTime`,
    getById: (id: string) => `${baseURL}/laundryTime/${id}`,
    create: () => `${baseURL}/laundryTime`,
    update: (id: string) => `${baseURL}/laundryTime/${id}`,
    delete: (id: string) => `${baseURL}/laundryTime/${id}`,
  },
  user: {
    base: `${baseURL}/user`,
    getAll: () => `${baseURL}/user`,
    getById: (id: string) => `${baseURL}/user/${id}`,
    create: () => `${baseURL}/user`,
    update: (id: string) => `${baseURL}/user/${id}`,
    delete: (id: string) => `${baseURL}/user/${id}`,
  },
};

// For TypeScript support
declare global {
  interface Window {
    __RUNTIME_CONFIG__?: {
      VITE_API_URL?: string;
    };
  }
}

export default endpoints;
