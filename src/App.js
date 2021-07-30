import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			{/* <Sidebar /> */}
			<Feed />
			<Widgets />
		</div>
	);
}

export default App;
