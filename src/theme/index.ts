import {MantineThemeOverride} from "@mantine/core";

export const mealMartTheme: MantineThemeOverride = {
  /** Put your mantine theme override here */
  colorScheme: 'light',
  colors: {
    brand: ['#ffe9e0', '#ffc3b5', '#f89d87', '#f37658', '#ef502a', '#d53710', '#a7290c', '#771c07', '#4a0f01', '#1f0200']
  },
  primaryColor: 'orange',
  primaryShade: 9,
  loader: 'dots'
}
