import MenuItem from "./menu-item";

interface MenuVariantProps {
    title: string;
    data: {
      name: string;
      price: number;
      description: string;
    }[];
  }

const MenuVariant : React.FC<MenuVariantProps>= ( {title, data}) => {
    return (
    <><h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="grid grid-cols-2 gap-4 mb-6">
    {data.map((item: any, index) => (
          <MenuItem
            key={index}
            mealName={item.name}
            price={item.price.toFixed(2)}
            description={item.description}
          />
        ))}
      
    </div>
    </>)
};

export default MenuVariant;