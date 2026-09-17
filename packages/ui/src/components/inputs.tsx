import React, { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Input(props: ComponentProps<"input">) {
	const { className: forwardedClassName, ...elementProps } = props;

	return (
		<input
			{...elementProps}
			className={twMerge(
				"bg-midnight-950 line-height-1 rounded-full px-4 py-2",
				forwardedClassName,
			)}
		/>
	);
}
