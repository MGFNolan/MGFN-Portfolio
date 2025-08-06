import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Page from "./components/Page";

function App() {
    return (
        <Page>
            <Header>
                <NavBar />
            </Header>
            <Main />
        </Page>
    );
}

export default App;
