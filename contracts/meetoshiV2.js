export const METOSHI_PASS_CONTRACT_V2 = {
    allowedURLs: ["metoshi.com"],
    address: {
        97: "0x3878eFD0DA79c08d0E6808678c066B52BCA8Be9E"
    },
    allowedNetworks: [97],
    abi: [{
        "inputs": [{
            "internalType": "address",
            "name": "_mintpasstoken",
            "type": "address"
        }, {"internalType": "address", "name": "_owner", "type": "address"}, {
            "internalType": "address",
            "name": "_treasury",
            "type": "address"
        }], "stateMutability": "nonpayable", "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "count",
            "type": "uint256"
        }],
        "name": "AddedNFTS",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "address", "name": "buyer", "type": "address"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "BuyTokens",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
        "name": "Paused",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
        }, {"indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32"}],
        "name": "RoleAdminChanged",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
        "name": "RoleGranted",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
        "name": "RoleRevoked",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
        "name": "Transfer",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
        "name": "Unpaused",
        "type": "event"
    }, {"stateMutability": "payable", "type": "fallback"}, {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "bnbPerToken",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "recipient", "type": "address"}, {
            "internalType": "uint256",
            "name": "amountBNB",
            "type": "uint256"
        }],
        "name": "buyTokens",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_bnbPerToken", "type": "uint256"}],
        "name": "changeBNBPerToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_mintpasstoken", "type": "address"}],
        "name": "changeMintPass",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_sellId", "type": "uint256"}],
        "name": "changeSellTokenId",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_treasury", "type": "address"}],
        "name": "changeTreasury",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {"inputs": [], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function"}, {
        "inputs": [],
        "name": "getReserves",
        "outputs": [{"internalType": "uint256", "name": "_sellId", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_bnbPerToken",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_sold", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_blockTimestampLast",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}],
        "name": "getRoleAdmin",
        "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "count", "type": "uint256"}],
        "name": "giveNFTS",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "hasRole",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "mintpasstoken",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_operator", "type": "address"}, {
            "internalType": "address",
            "name": "_from",
            "type": "address"
        }, {"internalType": "uint256[]", "name": "_ids", "type": "uint256[]"}, {
            "internalType": "uint256[]",
            "name": "_values",
            "type": "uint256[]"
        }, {"internalType": "bytes", "name": "_data", "type": "bytes"}],
        "name": "onERC1155BatchReceived",
        "outputs": [{"internalType": "bytes4", "name": "", "type": "bytes4"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_operator", "type": "address"}, {
            "internalType": "address",
            "name": "_from",
            "type": "address"
        }, {"internalType": "uint256", "name": "_id", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
        }, {"internalType": "bytes", "name": "_data", "type": "bytes"}],
        "name": "onERC1155Received",
        "outputs": [{"internalType": "bytes4", "name": "", "type": "bytes4"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "paused",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [],
        "name": "reserveTokens",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "count",
            "type": "uint256"
        }], "name": "safeTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [],
        "name": "sold",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
        "name": "supportsInterface",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "treasury",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "unlocked",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {"inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function"}]
}
