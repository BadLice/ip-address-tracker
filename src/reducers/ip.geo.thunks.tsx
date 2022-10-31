import axios from 'axios';
import { IpGeoAction } from './ip.geo';

export type IpGEoFetchLocationThunk = (
	dispatch: React.Dispatch<IpGeoAction>,
	ip?: string
) => void;

const PROTOCOL = process.env.REACT_APP_ENV === 'dev' ? 'http' : 'https';

export const fetchLocation: IpGEoFetchLocationThunk = async (dispatch, ip) => {
	try {
		if (ip) {
			const { data } = await axios.get(`${PROTOCOL}://ip-api.com/json/${ip || ''}`);
			dispatch({ type: 'SEARCH', payload: data });
		} else {
			const { data: myIp } = await axios.get(`${PROTOCOL}://icanhazip.com/`);
			fetchLocation(dispatch, myIp);
		}
	} catch (e) {
		dispatch({ type: 'SEARCH', payload: { status: 'fail' } });
	}
};
