module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _img: './src/assets/img',
          _components: './src/components',
          _navigations: './src/navigations',
          _screens: './src/screens',
          _actions: './src/actions',
          _styles: './src/styles',
          _helpers: './src/helpers',
          _constants: './src/constants',
          _store: './src/store',
          _reducers: './src/reducers',
          _providers: './src/providers',
          _styles: './src/styles',
        },
      },
    },
  },
};
