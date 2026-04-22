---
title: Smart Contracts on TRON
category: smart-contracts
order: 2
---

# Smart Contracts on TRON

TRON supports Solidity-based smart contracts, compatible with Ethereum's EVM.

## Development Tools

- **TronIDE** - Online IDE for contract development
- **tronweb** - JavaScript SDK
- **TronBox** - Development framework

## Example: Hello World

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public greeting;
    
    constructor(string memory _greeting) {
        greeting = _greeting;
    }
    
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
    
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
```
