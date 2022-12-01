import "./App.css";
import Header from "./Header";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import RightPanel from "./RightPanel/RightPanel";

function App() {
	return (
		<div className="main-page">
			<Header></Header>
			<div className="container">
				<LeftContainer></LeftContainer>
				<RightContainer></RightContainer>
				<RightPanel></RightPanel>
			</div>
		</div>
	);
}

export default App;