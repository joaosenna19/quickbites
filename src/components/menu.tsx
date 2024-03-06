/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sQrE84GDfnY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

const Menu = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Menu</h1>
      <div className="flex justify-between border-b-2 border-gray-200 mb-4">
        <Button className="mb-2" variant="outline">
          Dinner
        </Button>
        <Button className="mb-2" variant="ghost">
          Lunch
        </Button>
        <Button className="mb-2" variant="ghost">
          Wine
        </Button>
        <Button className="mb-2" variant="ghost">
          Drinks + Casual Bites
        </Button>
        <Button className="mb-2" variant="ghost">
          Happy Hour
        </Button>
        <Button className="mb-2" variant="ghost">
          Dessert
        </Button>
        <Button className="mb-2" variant="ghost">
          Specialty Coffee
        </Button>
        <Button className="mb-2" variant="ghost">
          Kids
        </Button>
        <Button className="mb-2" variant="ghost">
          Keg Creations
        </Button>
      </div>
      <p className="text-sm mb-4">All Prices Are In CDN</p>
      <h2 className="text-xl font-semibold mb-2">Appetizers</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="flex justify-between">
            <p>Escargot</p>
            <p>$14.00</p>
          </div>
          <p className="text-sm text-gray-600">stuffed mushroom caps, garlic, herbs</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Parmesan Potato Puffs</p>
            <p>$9.00</p>
          </div>
          <p className="text-sm text-gray-600">parmesan, parsley, garlic aioli</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Mushrooms Neptune</p>
            <p>$15.00</p>
          </div>
          <p className="text-sm text-gray-600">mushroom caps, crab, cream cheese</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Crispy Cauliflower</p>
            <p>$14.00</p>
          </div>
          <p className="text-sm text-gray-600">chipotle hot sauce, lime aioli</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Calamari</p>
            <p>$19.00</p>
          </div>
          <p className="text-sm text-gray-600">lightly fried, ginger garlic sauce, greek feta sauce</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Gruyère Mushroom Dip</p>
            <p>$18.00</p>
          </div>
          <p className="text-sm text-gray-600">
            mushrooms, poblano peppers, cream cheese, gruyère cheese, pull-apart bread
          </p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Scallops & Bacon</p>
            <p>$16.00</p>
          </div>
          <p className="text-sm text-gray-600">smoked bacon, martini cocktail sauce</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Baked Garlic Shrimp</p>
            <p>$14.00</p>
          </div>
          <p className="text-sm text-gray-600">garlic, cheese, herbs</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Shrimp Cocktail</p>
            <p>$17.00</p>
          </div>
          <p className="text-sm text-gray-600">chilled jumbo shrimp, martini cocktail sauce</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Crab Cakes</p>
            <p>$19.00</p>
          </div>
          <p className="text-sm text-gray-600">pan-fried, panko, lemon dill sauce</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Tuna Tartare</p>
            <p>$19.00</p>
          </div>
          <p className="text-sm text-gray-600">seasoned ahi, avocado</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Garlic Cheese Toast</p>
            <p>$13.00</p>
          </div>
          <p className="text-sm text-gray-600">garlic, cheese, pull-apart bread</p>
        </div>
      </div>
    </div>
  )
}

export default Menu;

