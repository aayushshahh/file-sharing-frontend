import "./App.css";
import "./styles.css";
import UploadForm from "./components/UploadForm";
import Download from "./components/Download";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<UploadForm />
			<Download />
		</div>
	);
}

export default App;
