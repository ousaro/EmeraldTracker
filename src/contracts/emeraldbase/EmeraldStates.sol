// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EmeraldStates {

    // Define enum 'State' with the following values:
    enum State { 
        Mined,               // 0
        Scaled,              // 1
        PackedForLab,        // 2
        ShipedToLab,         // 3
        LabReceived,         // 4
        Certified,           // 5
        ShippedToStore,      // 6
        StorageReceived,     // 7
        Stored,              // 8
        ForSale,             // 9
        Sold,                // 10
        ShipToManufacture,   // 11
        ManufacturerReceived,// 12
        Manufactured,        // 13
        PackedForSale,       // 14
        Published,           // 15
        Buyed,               // 16
        ShippedToCustomer,   // 17
        Delivered            // 18
    }
}
