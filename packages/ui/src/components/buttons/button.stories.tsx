import { fn } from "storybook/test";

import { Button } from "./buttons";
import "../../../style/stories.css";

export default {
	title: "Ui/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
};

export const Primary = {
	args: {
		variant: "primary",
		children: "Button",
	},
};

export const Generic = {
	args: {
		variant: "generic",
		children: "Button",
	},
};

export const Default = {
	args: {
		children: "Button",
	},
};
