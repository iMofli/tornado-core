/* global artifacts */
const Hasher = artifacts.require('Hasher')

// Function to introduce a delay
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = async function (deployer) {
  await deployer.deploy(Hasher)

  await sleep(5000)
}
