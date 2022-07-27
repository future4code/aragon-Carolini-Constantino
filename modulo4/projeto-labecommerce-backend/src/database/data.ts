import { Product } from "../models/Product";
import { Purchase } from "../models/Purchase";
import { User } from "../models/User";

export const users: User[] = [
    {
        id: "101",
        email: "joao@gmail.com",
        password: "abc123"   
    },
    {
        id: "102",
        email: "maria@gmail.com",
        password: "0l9u8i"   
    },
    {
        id: "103",
        email: "helena@gmail.com",
        password: "a1b2c3"   
    },
    {
        id: "104",
        email: "pedro@gmail.com",
        password: "948372"   
    },
    {
        id: "105",
        email: "jorge@gmail.com",
        password: "oaksur"   
    }
];

export const products: Product[] = [
    {
        id: "201",
        name: "Vela aromática - canela",
        price: 70.55
    },
    {
        id: "202",
        name: "Espelho redondo",
        price: 189.99
    },
    {
        id: "203",
        name: "Quadro decorativo",
        price: 140
    },
    {
        id: "204",
        name: "Almofada veludo - preta",
        price: 70.55
    },
    {
        id: "205",
        name: "Adorno macramê",
        price: 250
    },
];

export const purchases: Purchase[] = [
    {
        id: "301",
        user_id: "101",
        product_id: "201",
        quantity: 1,
        total_price: 70.55
    },
    {
        id: "302",
        user_id: "101",
        product_id: "202",
        quantity: 2,
        total_price: 379.98
    },
    {
        id: "303",
        user_id: "103",
        product_id: "203",
        quantity: 2,
        total_price: 180
    },
    {
        id: "304",
        user_id: "104",
        product_id: "205",
        quantity: 1,
        total_price: 250
    }
]