import React, { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const buttonVariants = cva("whitespace-nowrap line-height-1 rounded-full", {
	variants: {
		variant: {
			primary: "bg-midnight-800 hover:bg-midnight-600 shadow-xs shadow-black/25",
			generic: "hover:bg-midnight-600 shadow-black/25 hover:shadow-xs",
		},
		size: {
			default: "px-4 py-2 text-sm",
		},
	},
	defaultVariants: {
		variant: "generic",
		size: "default",
	},
});

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button(props: ButtonProps) {
	const { children, className: forwardedClasses, variant, ...elementProps } = props;

	return (
		<button
			role="button"
			{...elementProps}
			className={twMerge(buttonVariants({ variant }), forwardedClasses)}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	variant: PropTypes.oneOf(["generic", "primary"]),
	size: PropTypes.oneOf(["default"]),
	onClick: PropTypes.func,
};
