import { useEffect, useState } from "react";

function App() {
	const [countryCode, setCountryCode] = useState("AU");
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		const url = `https://restcountries.com/v2/alpha/${countryCode}`;

		const fetchData = async () => {
			setLoading(true);
			setError(false);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Something went wrong");
				}
				const data = await response.json();
				setData(data);
			} catch (e) {
				setError(e.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [countryCode]);
	return (
		<div className="min-h-screen w-full bg-neutral-950 p-4 text-neutral-200 antialiased">
			<section className="container mx-auto flex flex-col gap-2 bg-neutral-900 p-4">
				<header>
					<h1 className="font-mono text-3xl">Country info</h1>
					<label htmlFor="country">Select a country: </label>
					<div>
						<select
							className="my-4 rounded-md bg-neutral-800 p-2"
							id="country"
							value={countryCode}
							onChange={(e) => setCountryCode(e.target.value)}
						>
							<option value="AU">Australia</option>
							<option value="CA">Canada</option>
							<option value="CN">China</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
							<option value="IN">India</option>
							<option value="JP">Japan</option>
							<option value="MX">Mexico</option>
							<option value="GB">United Kingdom</option>
							<option value="US">United States of America</option>
						</select>
						{loading && <p>loading...</p>}
						{error && <p>error</p>}
					</div>
				</header>

				{data && (
					<article>
						<h2>{data.name}</h2>
						<table>
							<tbody>
								<tr>
									<td>Capital:</td>
									<td>{data.capital}</td>
								</tr>
								<tr>
									<td>Region:</td>
									<td>{data.region}</td>
								</tr>

								<tr>
									<td>Population:</td>
									<td>{data.population}</td>
								</tr>

								<tr>
									<td>Area</td>
									<td>{data.area}</td>
								</tr>
							</tbody>
						</table>
					</article>
				)}
			</section>
		</div>
	);
}

export default App;
