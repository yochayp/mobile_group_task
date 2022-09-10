const locationSchema = {
    type: "object",
    required: ["clickTime", "coordinates"],
    properties: {
        clickTime: {
            "type":"string",
        },
        coordinates:  {
            type: "object",
            required: [ "lon", "lat"],
            properties: {
                lon: {
                    "type":"number",
                },
                lat: {
                    "type":"number",
                },
            },
        }
    },
};

export default locationSchema;