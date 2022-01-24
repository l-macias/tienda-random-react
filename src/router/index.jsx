import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import CategorySelector from "../containers/CategorySelector";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
import { CartContextProvider } from "../context/CartContext";
import Cart from "../components/Cart"

const Router = () => {
    return(  
        <CartContextProvider>
        <BrowserRouter>
            <header className="App-header">
            <NavBar />
            </header>
        <Switch>
            <Route exact path="/">
            <div style={{
          textAlign: 'center',
          marginTop: '30px',
          
         }}>
                <h1>TIENDA RANDOM</h1>
                <h2>Bienvenidos a una tienda con productos ficticios y aleatorios</h2>
              </div>
            </Route>
            <Route path="/products">
              <div className="containerAll">
                <div className="containerSelector">
                  <h3 className="filterTitle">Categorías:</h3>
                  <CategorySelector />
                </div> 
                <div className='container'> 
                  <Switch>
                    <Route exact path="/products">
                      <ItemListContainer />
                    </Route>
                    <Route path="/products/:catId"> 
                      <ItemListContainer />
                    </Route>
                      
                  </Switch>
                </div>
              </div>
            </Route>
            <Route exact path="/product/:itemId"> 
              <ItemDetailContainer />
            </Route> 
            <Route exact path="/cart"> 
              <Cart />
            </Route> 
            <Route path="/*">
              <h1>Error 404 - Página no encontrada</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    );
  }
        



    export default Router;