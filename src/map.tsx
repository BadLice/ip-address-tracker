import { IpGeoContext } from 'contexts/ip.geo';
import L, { LatLngExpression } from 'leaflet';
import { useContext, useEffect, useMemo } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import styled from 'styled-components';

const initialLAtLon: LatLngExpression = [45.46694764551267, 9.194555065460378]; // Milan

const Container = styled.div`
	height: 67%;
	width: 100%;
`;

const markerIcon = new L.Icon({
	iconUrl: './images/icon-location.svg',
	iconRetinaUrl: './images/icon-location.svg',
	iconSize: [11 * 4, 14 * 4],
});

const Map = () => {
	const { state } = useContext(IpGeoContext);
	const position: LatLngExpression | null = useMemo(
		() => (state.lat && state.lon ? [state.lat, state.lon] : null),
		[state.lat, state.lon]
	);

	const m = useMap();

	useEffect(() => {
		if (position) {
			m.flyTo(position, m.getZoom());
		}
	}, [m, position]);

	return (
		<>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{position && <Marker position={position} icon={markerIcon} />}
		</>
	);
};

const withMapContainer =
	<P extends object>(Component: React.ComponentType<P>) =>
	(props: {}) =>
		(
			<Container>
				<MapContainer
					center={initialLAtLon}
					zoom={13}
					scrollWheelZoom={true}
					style={{ zIndex: 1 }}
					zoomControl={false}
				>
					<Component {...(props as P)} />
				</MapContainer>
			</Container>
		);

export default withMapContainer(Map);
