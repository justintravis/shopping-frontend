const API_BASE = 'http://localhost:3000';

export const get = async (url: string) => {
  return fetch(`${ API_BASE }/${ url }`);
}