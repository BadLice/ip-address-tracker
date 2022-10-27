import { createContext, useCallback, useReducer } from 'react';
import ipGeoReducer, { IpGeoAction, IpGeoState, IpGeoThunk } from 'reducers/ip.geo';

interface IpGeoProviderProps {
	children?: React.ReactNode;
}

export type IpGeoContextType = [IpGeoState, (action: IpGeoAction | IpGeoThunk) => void];

export type AsyncDispatchType = (action: IpGeoAction | IpGeoThunk) => void;

export const IpGeoContext = createContext<{
	state: IpGeoState;
	dispatch: (action: IpGeoAction | IpGeoThunk) => void;
}>({ state: {}, dispatch: () => null });

export const IpGeoProvider = ({ children }: IpGeoProviderProps) => {
	const [state, dispatch] = useReducer(ipGeoReducer, {});

	const asyncDispatch: AsyncDispatchType = useCallback((action: IpGeoAction | IpGeoThunk) => {
		if (typeof action === 'function') {
			action(dispatch);
		} else {
			dispatch(action);
		}
	}, []);

	return (
		<>
			<IpGeoContext.Provider value={{ state, dispatch: asyncDispatch }}>
				{children}
			</IpGeoContext.Provider>
		</>
	);
};
