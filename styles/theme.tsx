export const theme: defaultTheme = {
  light: {
    mainBackground: '#fff',
    primary: '#037e8f',
    secondary: '#3983ad',
    secondaryVariant: '#65b2bf',
    text: '#333',
    error: '#ed7979',
  },
  dark: {
    mainBackground: '#494D5F',
    primary: '#8458B3',
    secondary: '#d0bdf4',
    secondaryVariant: '#a0d2eb',
    text: '#e5eaf5',
    error: '#ed9d8e',
  },
};

export interface defaultTheme {
  [name: string]: {
    [key: string]: string;
  };
}
