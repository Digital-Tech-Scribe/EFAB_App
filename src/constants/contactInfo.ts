export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export const CONTACT_INFO: ContactInfo = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'info@efabproperties.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+2349088559026',
  address: import.meta.env.VITE_OFFICE_ADDRESS || '23 Lord Lugard St, Asokoro, Abuja, Nigeria.',
};