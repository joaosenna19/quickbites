const MenuItem = ({mealName, price, description}) => {
    return(
        <div>
        <div className="flex justify-between">
          <p>{mealName}</p>
          <p>{price}</p>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
     );
};

export default MenuItem;
//