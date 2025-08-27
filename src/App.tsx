import Header from "./components/Header";
import Main from "./components/Main";
import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";
import Page from "./components/Page";
import Hero from "./components/Hero";
import MenuContextProvider from "./context/MobileMenuContext";

function App() {
    return (
        <MenuContextProvider>
            <Page>
                <Header>
                    <NavBar />
                    <Hero />
                    <MobileNav />
                </Header>
                <Main />
            </Page>
        </MenuContextProvider>
    );
}

export default App;
