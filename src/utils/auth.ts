const AUTH_TOKEN_KEY = 'auth_token';
const AUTH_USER_KEY = 'auth_user';

export interface AuthUser {
  email: string;
  name?: string;
}

export const authUtils = {
  // Проверка авторизации
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  },

  // Получение текущего пользователя
  getCurrentUser: (): AuthUser | null => {
    const userStr = localStorage.getItem(AUTH_USER_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  },

  // Авторизация
  login: (email: string, password: string): boolean => {
    // Проверка учетных данных (в будущем здесь будет запрос к серверу)
    if (email === 'admin@admin.ru' && password === 'admin123') {
      const token = 'mock_token_' + Date.now();
      const user: AuthUser = {
        email,
        name: 'Иван Иванов',
      };
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  },

  // Выход
  logout: (): void => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  },
};

