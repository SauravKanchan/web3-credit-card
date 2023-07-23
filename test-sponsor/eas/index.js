import {
  EAS,
  Offchain,
  SchemaRegistry,
  SchemaEncoder,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const provider = ethers.providers.getDefaultProvider("sepolia");

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider);

const uid =
  "0x600a6c6e521d0f7a4443e87f60da0f28f6f5dc1abbecdeb5876d5a5b76e193ed";

// const attestation = await eas.getAttestation(uid);
// console.log(attestation);
const EASVersion = await eas.getVersion();
const CHAINID = await eas.getChainId();
// Initialize Offchain class with EAS configuration
const EAS_CONFIG = {
  address: EASContractAddress,
  version: EASVersion, // 0.26
  chainId: CHAINID,
};

const offchain = new Offchain(EAS_CONFIG, 0);

// Initialize SchemaEncoder with the schema string
const schemaEncoder = new SchemaEncoder(
  "address sender,uint256 value,uint256 chainId"
);
const encodedData = schemaEncoder.encodeData([
  {
    name: "sender",
    value: "0xbd92a7c9BF0aE4CaaE3978f9177A696fe7eA179F",
    type: "address",
  },
  { name: "value", value: 1, type: "uint256" },
  { name: "chainId", value: 1, type: "uint256" },
]);

let privateKey =
  "0xf9bdd5f1ff7fcec9ed21b1619a5f9e2d61f6a20e74eff43929340ab3f2a9c877";

// Signer is an ethers.js Signer instance
const signer = new ethers.Wallet(privateKey, provider);

const offchainAttestation = await offchain.signOffchainAttestation(
  {
    recipient: "0xA9E78cef5e6c0081b68AdA2554c04198DfF17C69",
    // Unix timestamp of when attestation expires. (0 for no expiration)
    expirationTime: 0,
    // Unix timestamp of current time
    time: Math.floor(Date.now() / 1000),
    revocable: false,
    nonce: 0,
    schema:
      "0x600a6c6e521d0f7a4443e87f60da0f28f6f5dc1abbecdeb5876d5a5b76e193ed",
    refUID:
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    data: encodedData,
    version: 0,
  },
  signer
);

console.log(offchainAttestation);

// const attestation = await eas.getAttestation(
//   "0x13baa5b82c579f1c9064534f727dd4a98fce85c913eff84810e5b0f8433cd21d"
// );
// console.log(attestation);

// const attestation = await eas.getAttestation(
//   "0x13baa5b82c579f1c9064534f727dd4a98fce85c913eff84810e5b0f8433cd21d"
// );
// console.log(attestation);
// 5 hrs before time string

