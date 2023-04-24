const aliases = require('./aliases');

module.exports = {
  webpack: {
    alias: aliases
  },
  //   plugins: [
//     {
//       plugin: cracoAlias,
//       options: {
//         aliases: {
//             "@components": './src/components' 
//         },
//         baseUrl: "./src",
//         tsConfigPath: "./tsconfig.json",
//         source: 'tsconfig'
//       },
//     },
//   ],
};
