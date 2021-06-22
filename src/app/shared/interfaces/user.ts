export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  phoneNumber: string;
  location?: {
    city?: string;
    country?: string;
    postalCode?: string;
    address?: string;
  };
}
