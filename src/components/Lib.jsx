import { useState } from "react";
import { Book } from "./Book";
import { Header } from "./Header";

function Lib() {
	const [selectedBook, setSelectedBook] = useState("pD6arNyKyi8C");
	const onHandleChange = (newv) => setSelectedBook(newv);

	return (
		<div className="p-5">
			<Header value={selectedBook} onSelectChange={onHandleChange} />
			<Book id={selectedBook} />
		</div>
	);
}

export default Lib;
