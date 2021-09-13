require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note rifle unknown hope enter olympic sketch'; 
let testAccounts = [
"0xb396f162b91991e156d573b5dea6b5676008f9146a1d881a7170737cae89272f",
"0xc29bb5a1ffc740ea897e11c2b3b4246daf7b4dc58ec290f5272e10538be84736",
"0x86f75ee61c02eac316b490b15380f79775def47be07b27ca9779e37ec933e8ef",
"0x4dacabb15d7e11aea98100c446fe91861d13d2f246e15073b522c70a81b6af2d",
"0x62360b3d712e88eca4a4a112778c82b32d508b204b75611e49e9d026cb67d9ff",
"0x67f56a19328fb0104c7d9ef391fcb7c2dc2cb26705d3204f3a9e9b61a7e29153",
"0x773cf97cee599d87d0d715c3f6ce27077f85fd2eea40dde40bfa4a0cfc584c73",
"0xf5c76b4f8c780182082fef1ed9756c02e6c5720f8ea85445eb83f95906bdd833",
"0x9b0d70f19289065484825242bb7861961618412bd220a26425cc2975f2a86c9d",
"0xf43413a2142e5b8b7e3f3a79bc9227599cc8ef22442fdb56d1c34fc5ceb68c94"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

