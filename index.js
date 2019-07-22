const { resolve } = require('path')
const { writeFileSync } = require('fs')

module.exports = opts => {
	// initialize the jest configuration from options
	opts = typeof opts === 'string'
		? { babelrc: true, configFile: resolve(opts) }
	: opts === Object(opts)
		? opts
	: { babelrc: true }

	// create the new jest configuration file
	const optsJSON = JSON.stringify(opts, null, '  ')
	const optsFunc = `module.exports=require('babel-jest').createTransformer(${optsJSON})`

	// find the existing jest configuration file
	const Module = module.constructor
	const babelTransformPath = Module._resolveFilename('react-scripts/config/jest/babelTransform.js', module.parent)

	// update the jest configuration file
	writeFileSync(babelTransformPath, optsFunc)

	// return an empty configuration function
	const noopConfig = config => config

	return noopConfig
}
