const operations = new Map();

operations.set("push", {
	text: "push",
	arg: true,
});

operations.set("add", {
	text: "add",
	arg: false,
});

operations.set("subtract", {
	text: "subtract",
	arg: false,
});

operations.set("multiply", {
	text: "multiply",
	arg: false,
});

operations.set("divide", {
	text: "divide",
	arg: false,
});

export { operations };
