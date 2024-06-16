import { spacing } from "src/values";

export const IosUtils = {
  getIosElevation: (elevation = spacing.xxxs) => {
    return {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: elevation / 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: elevation / 2,
    };
  },
};
