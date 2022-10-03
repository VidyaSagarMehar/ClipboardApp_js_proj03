function clipboard() {
	// getting the inputs
	let copyInput = document.getElementById("clipText");

	copyInput.select();

	navigator.clipboard.writeText(copyInput.value);

	// button clicking animation
	let btn = document.querySelector("button");
	btn.style.transform = "translateY(4px)";
	setTimeout(() => {
		btn.style.transform = "none";
	}, 1);
}
