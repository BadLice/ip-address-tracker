import MaskedInput from 'react-text-mask';

export interface IpInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	keepCharPositions?: boolean;
	showMask?: boolean;
	render?: (
		ref: (inputElement: HTMLElement) => void,
		props: {
			onChange: (event: React.ChangeEvent<HTMLElement>) => void;
			onBlur: (event: React.FocusEvent<HTMLElement>) => void;
			defaultValue: string | undefined;
		}
	) => React.ReactNode;
}

const IpInput = ({ ...props }: IpInputProps) => {
	const validateIp = (value: string) => {
		if (value === '.' || value.endsWith('..')) return false;
		const parts = value.split('.');
		if (
			parts.length > 4 ||
			parts.some((part) => part === '00' || Number(part) < 0 || Number(part) > 255)
		) {
			return false;
		}
		return value;
	};

	const maskIp = (value: string) => Array(value.length).fill(/[\d.]/);

	return (
		<MaskedInput
			guide={false}
			placeholderChar={'\u2000'}
			mask={maskIp}
			pipe={validateIp}
			{...props}
		/>
	);
};

export default IpInput;
