
'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react";
import MenuVariant from "./menu-variant";
import { menuItems } from "@/lib/menu";
const Menu = () => {

    const [selectedCategory, setSelectedCategory] = useState("Appetizers");

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    }

  return (
    <div className="flex  flex-col max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Menu</h1>
      <div className="flex flex-col md:flex-row border-b-2 border-gray-200 mb-4">
      <Button className="mb-2" variant={selectedCategory === 'Appetizers' ? 'outline' : 'ghost'} onClick={() => handleCategoryChange("Appetizers")}>
          Appetizers
        </Button>
        <Button className="mb-2" variant={selectedCategory === 'Dinner' ? 'outline' : 'ghost'} onClick={() => handleCategoryChange("Dinner")}>
          Dinner
        </Button>
        <Button className="mb-2" variant={selectedCategory === 'Lunch' ? 'outline' : 'ghost'} onClick={() => handleCategoryChange("Lunch")}>
          Lunch
        </Button>
        <Button className="mb-2" variant={selectedCategory === 'Kids' ? 'outline' : 'ghost'} onClick={() => handleCategoryChange("Kids")}>
          Kids
        </Button>
        <Button className="mb-2" variant={selectedCategory === 'Dessert' ? 'outline' : 'ghost'} onClick={() => handleCategoryChange("Dessert")}>
          Dessert
        </Button>
        <Button className="mb-2" variant={selectedCategory === 'Drinks' ? 'outline' : 'ghost'} onClick={() => handleCategoryChange("Drinks")}>
            Drinks
        </Button>
       
      </div>
      <p className="text-sm mb-4">All Prices Are In CDN</p>
      {selectedCategory === "Appetizers" && <MenuVariant title="Appetizers" data={menuItems.Appetizers}/>}
        {selectedCategory === "Dinner" && <MenuVariant title="Dinner" data={menuItems.Dinner}/>}
        {selectedCategory === "Lunch" && <MenuVariant title="Lunch" data={menuItems.Lunch}/>}
        {selectedCategory === "Kids" && <MenuVariant title="Kids" data={menuItems.Kids}/>}
        {selectedCategory === "Dessert" && <MenuVariant title="Dessert" data={menuItems.Dessert}/>}
        {selectedCategory === "Drinks" && <MenuVariant title="Drinks" data={menuItems.Drinks}/>}
      
    </div>
  )
}

export default Menu;

