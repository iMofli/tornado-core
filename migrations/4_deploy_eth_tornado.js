/* global artifacts */
require('dotenv').config({ path: '../.env' })
const ETHTornado = artifacts.require('DEVTornado')
const Verifier = artifacts.require('Verifier')
// const Hasher = artifacts.require('Hasher')
const HASHER_ADDRESS = '0xA0C3cc7D8091EbcC184Ec77aa3a7c1F96DA64EAB'
const OWNERS = ['0x7ca9774bF5e6913fB192C60CEF79E25b61559Ee1']

module.exports = function (deployer) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, ETH_AMOUNT } = process.env
    const verifier = await Verifier.deployed()
    // const hasher = await Hasher.deployed()

    const tornado = await deployer.deploy(
      ETHTornado,
      verifier.address,
      HASHER_ADDRESS,
      ETH_AMOUNT,
      MERKLE_TREE_HEIGHT,
      OWNERS,
    )
    console.log('ETHTornado address', tornado.address)
  })
}
