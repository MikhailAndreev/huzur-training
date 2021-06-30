export const fontGenerator = (fontsArray: string[], fontWeight: number) => {
  const getFontType = (): string[] =>
    fontsArray.map(item => {
      const format = item.split('.').pop();
      switch (format) {
        case 'woff':
          return `url(${item}) format('woff')`;
        case 'ttf':
          return `url(${item}) format('truetype')`;
        case 'eot':
          return `url(${item}) format('embedded-opentype')`;
      }
      return '';
    });

  return {
    fontFamily: 'MuseoSansCyrl',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight,
    src: `
				local('MuseoSansCyrl'),
				local('MuseoSansCyrl-Regular'),
				${getFontType().join(',\n')}
			`,
  };
};
