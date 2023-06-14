import { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
	to: 'left-0' | 'right-0';
	bg: 'bg-gradient-to-l' | 'bg-gradient-to-r';
};

export function Button(buttonProps: ButtonType) {
	const { to, bg, ...props } = buttonProps;

	return (
		<button
			type="button"
			className={`absolute top-0 flex items-center justify-center h-full px-4 transition-all duration-300 cursor-pointer opacity-30 ${bg} from-transparent to-zinc-300 rounded-xl hover:opacity-90 ${to}`}
			{...props}
		></button>
	);
}
