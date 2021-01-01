const { Theme, ThemeManager } = require('tailwindcss-theming/api');

const dark = new Theme()
  .setName('dark')
  .addColors({
    "background": "#222931",
    "on-background": "#E9E9E9",
    "red": "#F2684E",
    "blue": "#50B1BA"
})
  .setVariable("sans",["Inter","sans-serif"],"fontFamily","font")

const light = new Theme()
  .setName('light')
  .addColors({
    "background": "#E9E9E9",
    "on-background": "#222931",
    "red": "#F2684E",
    "blue": "#50B1BA"
})
  .setVariable("sans",["Inter","sans-serif"],"fontFamily","font")


module.exports = new ThemeManager()
  .setDefaultTheme(light.targetable())
  .setDefaultLightTheme(light.targetable())
  .setDefaultDarkTheme(dark.targetable())
;