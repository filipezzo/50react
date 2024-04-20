import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Step } from "./Step";

const initialData = {
	name: "",
	email: "",
	address: "",
	city: "",
	zipcode: "",
};

export function MultiStepForm() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState(initialData);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setStep(1);
		setFormData("");
		alert("Thanks for your submission");
	};
	if (step === 1) {
		return (
			<main className="w-full max-w-2xl rounded-md bg-neutral-600 p-4">
				<form className="flex w-full flex-col gap-4  rounded-md bg-neutral-950 p-4">
					<h2 className="text-2xl font-bold">Personal Information</h2>
					<Step step={step} />
					<Input label="name" onChange={handleChange} value={formData.name} />
					<Input label="email" onChange={handleChange} value={formData.email} />
					<Button onClick={() => setStep((prev) => prev + 1)} type="button">
						Next
					</Button>
				</form>
			</main>
		);
	} else if (step === 2) {
		return (
			<main className="w-full max-w-2xl rounded-md bg-neutral-600 p-4">
				<form className="flex w-full flex-col gap-4  rounded-md bg-neutral-950 p-4">
					<h2 className="text-2xl font-bold">Address</h2>
					<Step step={step} />
					<Input
						label="address"
						onChange={handleChange}
						value={formData.address}
					/>
					<Input label="city" onChange={handleChange} value={formData.city} />
					<Input
						label="zipcode"
						onChange={handleChange}
						value={formData.zipcode}
					/>
					<Button onClick={() => setStep((prev) => prev + 1)} type="button">
						Next
					</Button>
					<Button
						prev
						onClick={() => setStep((prev) => prev - 1)}
						type="button"
					>
						Prev
					</Button>
				</form>
			</main>
		);
	} else if (step === 3) {
		return (
			<main className="w-full max-w-2xl rounded-md bg-neutral-600 p-4">
				<form
					onSubmit={handleSubmit}
					className="flex w-full flex-col gap-4  rounded-md bg-neutral-950 p-4"
				>
					<h2 className="text-2xl font-bold">Confirm your information:</h2>
					<Step step={step} />
					<table>
						<tbody>
							{Object.keys(formData).map((key) => (
								<tr key={key}>
									<td>{key}</td>
									<td>{formData[key]}</td>
								</tr>
							))}
						</tbody>
					</table>
					<Button type="submit">Submit</Button>
					<Button
						prev
						onClick={() => setStep((prev) => prev - 1)}
						type="button"
					>
						Prev
					</Button>
				</form>
			</main>
		);
	}
}
