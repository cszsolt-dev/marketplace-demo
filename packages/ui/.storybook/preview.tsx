import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
	parameters: {
		backgrounds: {
			options: {
				dark: { name: "Dark", value: "#333" },
				light: { name: "Light", value: "#e0e0e0" },
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: "todo",
		},
	},
};

export default preview;
