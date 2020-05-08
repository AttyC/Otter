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
  black: '#000000',
  paleFont: '#ffffff',
  darkBlue: '#0069af',
  darkGrayishBlue: '#677378',
  lightGrayishBlueA: '#bfd8e8',
  lightGrayishBlueB: '#e1e3e4',
  lightGrayishCyan: '#eff1f1',
};

const theme = {
  headerFontColour: `${colours.paleFont}`,
  headerFontWeight: '300',

};

export default theme;
