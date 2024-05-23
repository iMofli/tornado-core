const path = require('path')
const fs = require('fs')
const genContract = require('circomlib/src/mimcsponge_gencontract.js')

// Define the output path for the Hasher.json file
const outputPath = path.join(__dirname, '..', 'build', 'Hasher.json')
const outputDir = path.dirname(outputPath)

// eslint-disable-next-line require-await
module.exports = async function (callback) {
  try {
    // Ensure the build directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Generate the contract object
    const contract = {
      contractName: 'Hasher',
      abi: genContract.abi,
      bytecode: genContract.createCode('mimcsponge', 220),
    }

    // Write the contract object to Hasher.json
    fs.writeFileSync(outputPath, JSON.stringify(contract))
    console.log('Hasher contract generated and written to', outputPath)

    callback()
  } catch (error) {
    console.error('Error generating Hasher contract:', error)
    callback(error)
  }
}
