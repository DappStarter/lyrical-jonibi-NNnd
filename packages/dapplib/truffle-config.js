require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth predict universe harvest battle equal gift'; 
let testAccounts = [
"0xa2947441583b7b0ae62116605ebc316c9b6db8952b09aea22f1aebf4b4e6bbbe",
"0x2e88921650c68db2b1bd2993a9f76092e8d5a3febedee6c245643c7c067cefa4",
"0x58f65b2bdd333e6e1fc309748c4f0cbb06e088623c4924124988a82ac31fc519",
"0xe703f733a4f40844723b0beb8b9a841cedd4fc571d11f3a9fb2aaa156cf96309",
"0x8f74bf7f3f6753b99a556a85f6cbb870a9901895504f006f6fb6a06eea48f6f2",
"0x1e40dba2f446a9a7cc55bacff0c1c2c027eb17cc01b9797dbd93c54ec13ebf5a",
"0x8db166171dbdac630940957fb8f45f5479f170a93ca164a1f881d214d1d256a8",
"0xed36116e6b09ff0950d5cdd7da7317909415d737d36f0ad8b3a60e6b2220118a",
"0x86b98cfb258274e4da4cd55ed7e0863075cd19403488aa6185323e9ec38d0c5c",
"0x8f130a311731a7724338e2a6302d4686d48003d24ecafa00a4cdb6040408f8a6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

