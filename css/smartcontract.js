let web3=new Web3("http://localhost:7545")
let contractAddress = '0x53fE84b0E663ff7BfDE65C31a0a9E4E0c115b7C5';
let contractABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Account",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "Location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "District",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "plot_no",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "area",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "value",
				"type": "int256"
			}
		],
		"name": "add_asset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "plot",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Account",
				"type": "address"
			}
		],
		"name": "add_khatiyan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Account",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "add_user",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Account",
				"type": "address"
			}
		],
		"name": "remove_user",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_array",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Account",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Location",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "District",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "plot_no",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "area",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "asset_value",
						"type": "int256"
					}
				],
				"internalType": "struct Structregistry.asset[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Account",
				"type": "address"
			}
		],
		"name": "get_asset",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "plot",
				"type": "string"
			}
		],
		"name": "get_khatiyan",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Account",
				"type": "address"
			}
		],
		"name": "get_user",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]