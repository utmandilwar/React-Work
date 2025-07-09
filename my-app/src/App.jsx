/* First code : hello world message*/
// function Greeting({ name }) {
//   return <h1>Hello , {name}</h1>;
// }

// export default function App() {
//   return <Greeting name="Utkarsh" />;
// }

/*Second code: working with buttons*/
function Mybutton() {
  function handleClick(){
    alert("You clicked me");
  }
  return (<button onClick={handleClick}>I'm a button , click me </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Mybutton />
    </div>
  );
}

/*third code: importing image and adding css to it*/
// const user = {
//   name: "Enrique Iglesias",
//   imageUrl:
//     "https://www.hola.com/us/horizon/landscape/09cec7062a6c-los-angeles-california-singer-enrique-iglesias-performs-onstage-at-staples-cente.jpg?im=Resize=(960),type=downsize",
//   imagewidth: 600,
//   imageheight: 300,
// };

// export default function Myapp() {
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <img
//         className="Avatar"
//         src={user.imageUrl}
//         alt={"photo of " + user.name}
//         style={{
//           width: user.imagewidth,
//           height: user.imageheight,
//         }}
//       />
//     </div>
//   );
// }

/*fourth code: working with the lists*/
// const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{ color: product.isFruit ? "Magenta" : "darkgreen" }}
//     >
//       {product.title}
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }


