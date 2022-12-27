import ProductContext from "./product.context";
import CartContext from "./cart.context";
import { useContext, useState, useEffect } from "react";

export function useProduct() {
  return useContext(ProductContext);
}

export function useCart() {
  return useContext(CartContext);
}

const ProductProvider = ({ children }) => {
  const product = [
    {
      id: 101,
      title: "Demo Product",
      price: 15,
      shortdescription: "This is product subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
      img_url:
        "https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=826&t=st=1671979983~exp=1671980583~hmac=b2dd5971082045ada3f1f674978e7c5017af0f7aa43377983abc6846df2d4ae2",
      category: "food",
      specification:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (1)",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (2)",
      features: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (3)",
    },
    {
      id: 102,
      title: "Demo Product",
      price: 45,
      shortdescription: "This is product subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
      img_url:
        "https://img.freepik.com/premium-photo/paneer-pyaza-is-popular-punjabi-vegetarian-recipe-using-cubes-cottage-cheese-with-lots-onion-gravy_466689-30475.jpg?w=826",
      category: "food",
      specification:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (1)",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (2)",
      features: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (3)",
    },
    {
      id: 103,
      title: "Demo Product",
      price: 50,
      shortdescription: "This is product subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
      img_url:
        "https://img.freepik.com/premium-photo/north-indian-mini-meal-parcel-platter-combo-thali-with-paneer-butter-masala-roti-dal-rice_466689-87332.jpg?w=826",
      category: "food",
      specification:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      features: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 104,
      title: "Demo Product",
      price: 30,
      shortdescription: "This is product subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
      img_url:
        "https://img.freepik.com/premium-photo/restaurant-style-dal-tadka-tempered-with-ghee-spices-this-recipe-makes-great-meal-with-boiled-rice_466689-76424.jpg?w=826",
      category: "food",
      specification:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      features: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 105,
      title: "Demo Product",
      price: 100,
      shortdescription: "This is product subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
      img_url:
        "https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=826&t=st=1671979983~exp=1671980583~hmac=b2dd5971082045ada3f1f674978e7c5017af0f7aa43377983abc6846df2d4ae2",
      category: "clothes",
      specification:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (1)",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (2)",
      features: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (3)",
    },
    {
      id: 106,
      title: "Demo Product",
      price: 130,
      shortdescription: "This is product subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
      img_url:
        "https://img.freepik.com/premium-photo/restaurant-style-dal-tadka-tempered-with-ghee-spices-this-recipe-makes-great-meal-with-boiled-rice_466689-76424.jpg?w=826",
      category: "food",
      specification:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      features: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 107,
      title: "Demo Product",
      price: 120,
      shortdescription: "This is product subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
      img_url:
        "https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=826&t=st=1671979983~exp=1671980583~hmac=b2dd5971082045ada3f1f674978e7c5017af0f7aa43377983abc6846df2d4ae2",
      category: "clothes",
      specification:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (1)",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (2)",
      features: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. (3)",
    },
  ];

  // cart items state
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState({
    success: false,
    message: "",
    error: false,
  });
  const [popupIsActive, setPopupIsActive] = useState(false);

  async function getCartItems() {
    let cart;
    const cartArr = localStorage.getItem("cart");
    if (cartArr == null) {
      cart = [];
    } else {
      cart = await JSON.parse(cartArr);
      setCartItems(cart);
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  // add to cart function for adding items in cart
  function addCartItem(id) {
    let cart;
    if (!cartItems.some((data) => data.id === id)) {
      const item = product.filter((data) => data.id === id)[0];
      setCartItems([...cartItems, item]);
      const cartArr = localStorage.getItem("cart");
      if (cartArr == null) {
        cart = [];
      } else {
        cart = JSON.parse(cartArr);
      }
      const cartObj = new Object(item);
      cart.push(cartObj);
      localStorage.setItem("cart", JSON.stringify(cart));
      setMessage({
        success: true,
        message: "Item Added Successfully",
        error: false,
      });
      return cartItems;
    } else {
      setMessage({
        success: false,
        message: "Item Already In Cart",
        error: true,
      });
      throw new Error("Items is already added in cart");
    }
  }

  // remove cart item function for removing items from cart
 async function removeCartItem(id) {
    const removedItems = cartItems.filter((item) => item.id !== id);
    const cartIndex = cartItems.findIndex((item)=> item.id === id);
    console.log(cartIndex);
    console.log(removedItems);
    setCartItems(removedItems);
    const cart = localStorage.getItem("cart");
    const cartArr = JSON.parse(cart);
    cartArr.splice(cartIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    if (cartArr.length == 0) {
        localStorage.clear();
    }
    setMessage({
      success: true,
      message: "Item Added Successfully",
      error: false,
    });
    return cartItems;
  }

  return (
    <ProductContext.Provider value={product}>
      <CartContext.Provider
        value={{
          cartItems,
          addCartItem,
          removeCartItem,
          message,
          popupIsActive,
          setPopupIsActive,
        }}
      >
        {children}
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
