/*
  THEMING
  - Store any colours in relevant objects below.
  - Ensure that themes.haven and themes.opus have the exact same keys
  - Only store themes.haven/themes.opus keys where there is a difference between environments
  - Keep any shared styles within the components e.g. the horizontal header/footer border in the conversation area has the same styles for both brands so no need to store any related values in the themes object
*/

/*
  Colour names in shared/haven/opusColours come from 'color description' section of www.colorhexa.com
*/

export const colours = {
  darkFont: '#303036',
  paleFont: '#fffbfa',
  brandLightBlue: '#5cd9d5ff',
  brandDarkBlueGreen: '#0d5c63ff',
  brandOrange: '#FC5130'
};

const theme = {
  brightBackground: colours.brandLightBlue,
  darkBackground: colours.brandDarkBlueGreen,
  headerFontColour: colours.brandOrange,
  headerFontWeight: '300',
  bodyFont: colours.darkFont,
  buttonPrimaryBackground: colours.brandOrange,
  buttonSecondaryBackground: colours.paleFont,
  buttonBorderRadius: '25px',
  buttonFontColour: colours.paleFont,
  footerFontColour: colours.paleFont,
  formBackgroundColour: colours.paleFont

};

export default theme;
