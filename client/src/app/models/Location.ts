export interface Location {
    id?: number;
    clickTime: Date;
    coordinates: {
        lon: number,
        lat: number
    };
}