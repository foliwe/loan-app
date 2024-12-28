type CookieOptions = {
  name: string;
  value: string;
  days?: number;
  path?: string;
};

export const setCookie = ({ name, value, days = 365, path = '/' }: CookieOptions) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}; SameSite=Lax`;
};

export const getCookie = (name: string) => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
};

export const deleteCookie = (name: string, path = '/') => {
  setCookie({ name, value: '', days: -1, path });
};
