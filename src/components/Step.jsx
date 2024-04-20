export function Step({ step }) {
	return (
		<div className="mb-4 flex w-full flex-col gap-2">
			<label>Step {step} of 3</label>
			<progress value={step} max={3} className="h-4 rounded-md " />
		</div>
	);
}
