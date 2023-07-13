const data = [
  {
    id: "1",
    title: "Burger",
    description: "CheeseBurger with extra meones",
    price: "28$",
  },
  {
    id: "2",
    title: "Pizza",
    description: "Panner Pizza with extra fries",
    price: "80$",
  },
  {
    id: "3",
    title: "Cappacheno",
    description: "Strong Coffe with less sugar",
    price: "50$",
  },
];

function Listele ()
{
     const listItem = data.map((dessert) => {
       const itemText = `${dessert.title} - ${dessert.price}`;
       return <ul>{itemText}</ul>;
     });
    return (
      <div>
        <h1>Menu Card Lemonites</h1>
        <ul>{listItem}</ul>
      </div>
    );
}

export default Listele;