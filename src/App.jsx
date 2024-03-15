import { useState } from "react"
import Banner from "./components/Header/Banner"
import NavBar from "./components/Header/NavBar"
import MenuCards from "./components/MenuCards/MenuCards"
import SideBar from "./components/SideBar/SideBar"


function App() {

  const [cookingCard, setCookingCard] = useState([]);

  const handleCook = (card) => {
    const isExist = cookingCard.find((c) => c.recipe_id === card.recipe_id);
    if(!isExist) {
      const newCard = [...cookingCard, card];
      setCookingCard(newCard);
    }
  }

  return (
    <>
      <header className="container mx-auto mb-24">
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main className="container mx-auto mb-24">
        <div className="mb-12 w-2/3 mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Our Recipes</h2>
          <p className="opacity-70">Indulge in our signature recipe, a culinary delight crafted with passion and expertise, promising a delectable dining experience.</p>
        </div>
        <div className="flex gap-6">
          <MenuCards handleCook={handleCook}></MenuCards>
          <SideBar></SideBar>
        </div>
      </main>
    </>
  )
}

export default App
