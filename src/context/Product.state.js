import ProductContext from "./product.context"
import { useContext, useState } from "react"

export function useProduct() {
    return useContext(ProductContext)
}

const ProductProvider = ({children})=>{

    const product = [
        {
            id: 101,
            title : "Demo Product",
            price : 15,
            shortdescription : "This is product subheading",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
            img_url: "https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=826&t=st=1671979983~exp=1671980583~hmac=b2dd5971082045ada3f1f674978e7c5017af0f7aa43377983abc6846df2d4ae2",
            category : "food"
        },
        {
            id: 102,
            title : "Demo Product",
            price : 45,
            shortdescription : "This is product subheading",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
            img_url: "https://img.freepik.com/premium-photo/paneer-pyaza-is-popular-punjabi-vegetarian-recipe-using-cubes-cottage-cheese-with-lots-onion-gravy_466689-30475.jpg?w=826",
            category : "food"
        },
        {
            id: 103,
            title : "Demo Product",
            price : 50,
            shortdescription : "This is product subheading",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
            img_url: "https://img.freepik.com/premium-photo/north-indian-mini-meal-parcel-platter-combo-thali-with-paneer-butter-masala-roti-dal-rice_466689-87332.jpg?w=826",
            category : "food"
        },
        {
            id: 104,
            title : "Demo Product",
            price : 30,
            shortdescription : "This is product subheading",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sequi neque quae in repellat suscipit? Adipisci aperiam aut inventore labore pariatur nihil dolores, in cum saepe obcaecati voluptatum quod modi repellat, sint laudantium doloribus omnis ducimus aspernatur animi itaque libero? Nihil adipisci corrupti pariatur aut accusamus dicta sit hic.",
            img_url: "https://img.freepik.com/premium-photo/restaurant-style-dal-tadka-tempered-with-ghee-spices-this-recipe-makes-great-meal-with-boiled-rice_466689-76424.jpg?w=826",
            category : "food"
        },
       ]

    const [cartItems, setCartItems] = useState(0)

    return(
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
