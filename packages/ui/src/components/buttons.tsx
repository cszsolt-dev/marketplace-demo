import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("", {
	variants: {
		variant: {
			generic: "px-4 py-2 rounded-full line-height-1",
		},
	},
	defaultVariants: {
		variant: "generic",
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
