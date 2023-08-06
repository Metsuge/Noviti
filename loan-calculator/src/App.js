import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
	const [formData, setFormData] = useState({});
	const [submit, setSubmit] = useState(false);

	const getFormData = function (data) {
		setFormData(data);
		setSubmit(true);
		console.log("formData", formData);
	};

	return (
		<div className="App">
			<Form getFormData={getFormData}></Form>
			{submit && <Table formData={formData}></Table>}
		</div>
	);
}

export default App;
