import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Coffee", price: 1200, category: "coffee", image: "/coffee1.jpeg" },
    { id: 2, name: "Coffee", price: 800, category: "coffee", image: "/coffee2.jpeg" },
    { id: 3, name: "Coffee", price: 1000, category: "coffee", image: "/coffee3.jpeg" },
    { id: 4, name: "Coffee", price: 1200, category: "coffee", image: "/coffee4.jpeg" },
    { id: 5, name: "Black Coffee", price: 700, category: "coffee", image: "/coffee5.jpeg" },
    { id: 6, name: "Black Coffee", price: 200, category: "coffee", image: "/coffee6.jpeg" },
    { id: 7, name: "Cold Coffee", price: 100, category: "coffee", image: "/coffee7.jpeg" },
    { id: 8, name: "Cold Coffee", price: 1500, category: "coffee", image: "/coffee8.jpeg" },
    { id: 9, name: "Pasta", price: 1000, category: "pasta", image: "/pasta.jpeg" },
    { id: 10, name: "Alferado PAsta", price: 1200, category: "pasta", image: "/pasta2.jpeg" },
    { id: 11, name: "Cheese Pasta", price: 800, category: "pasta", image: "/pasta3.jpeg" },
    { id: 12, name: "Red Sauce Pasta", price: 1000, category: "pasta", image: "/pasta4.jpeg" },
    { id: 13, name: "White Sauce Pasta", price: 1000, category: "pasta", image: "/pasta5.jpeg" },
    { id: 14, name: "Salid Pasta", price: 1200, category: "pasta", image: "/pasta6.jpeg" },
    { id: 15, name: "Red Sauce Pasta", price: 800, category: "pasta", image: "/pasta7.jpeg" },
    { id: 16, name: "Mashroom Sauce Pasta", price: 1000, category: "pasta", image: "/pasta8.jpeg" },
    { id: 17, name: "Subway Sandwich", price: 1000, category: "sandwich", image: "/sandwich.jpeg" },
    { id: 18, name: "Club Sandwich", price: 1200, category: "sandwich", image: "/sandwich2.jpeg" },
    { id: 19, name: "Egg Cheese Sandwich", price: 800, category: "sandwich", image: "/sandwich3.jpeg" },
    { id: 20, name: "Extra Cheese Sandwich", price: 1000, category: "sandwich", image: "/sandwich4.jpeg" },
    { id: 21, name: "Pepsi", price: 1000, category: "soda", image: "/soda1.jpeg" },
    { id: 22, name: "Coke", price: 1200, category: "soda", image: "/soda2.jpeg" },
    { id: 23, name: "Japaneese Soda", price: 800, category: "soda", image: "/soda3.jpeg" },
    { id: 24, name: "Coffee Soda", price: 1000, category: "soda", image: "/soda4.jpeg" },
  ]);
}
