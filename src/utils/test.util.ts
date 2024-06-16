export function testIdProps(id = '') {
    return {
      testID: id,
      accessibilityLabel: id,
    };
  }
  
  export const getFormattedTestingId = (name = '') => {
    if (!name) return '';
    return name.toLowerCase().replace(/[,]? /g, '-');
  };