import { useEffect, useState } from "react"

const LocationComponent: React.FC = () => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (err) => {
                    setError(err.message);
                }
            );
        } else {
            setError('위치정보를 확인할 수 없습니다.');
        }
    }, []);

    return(
        <div>
            {latitude && longitude ? (
                <p>
                    위도 : {latitude}, 경도 : {longitude}
                </p>
            ) : (
                <p>{error ? `Error: ${error}` : '위치정보를 찾고있습니다' }</p>
            )
        }
        </div>
    )

}

export default LocationComponent;