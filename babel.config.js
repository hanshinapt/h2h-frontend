module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./app'],
				extensions: [
					'.ios.ts',
					'.android.ts',
					'.ts',
					'.ios.tsx',
					'.android.tsx',
					'.tsx',
					'.jsx',
					'.js',
					'.json',
				],
				alias: {
					'@': './app',
					'@api': './app/api',
					'@assets': './app/assets',
					'@components': './app/components',
					'@constants': './app/constants',
					'@screens': './app/screens',
					'@store': './app/store',
					'@styles': './app/styles',
					'@utils': './app/utils',
				},
			},
		],
	],
};
