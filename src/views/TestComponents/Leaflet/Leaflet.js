import L from 'leaflet';
import 'leaflet-canvas-markers';

export default {
    created() {

    },
    mounted() {
        const map = L.map('map', {
            preferCanvas: true,
        }).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Leaflet-canvas-markers',
        }).addTo(map);


        /* Create poits */
        const points = [
            {
                type: 'point',
                coordinates: [51.524, -0.14],
                color: '#27ae60',
                priority: 1,
            },
            {
                type: 'point',
                coordinates: [51.52, -0.109],
                color: '#f44334',
                priority: 3,
            },
            {
                type: 'img',
                coordinates: [51.52, -0.109],
                img: './images/icon.png',
                imgSize: [40, 40],
                priority: 2,
            },
            {
                type: 'point',
                coordinates: [51.503, -0.09],
                color: '#27ae60',
                priority: 1,
            },
            {
                type: 'img',
                coordinates: [51.503, -0.09],
                img: './images/icon.png',
                imgSize: [40, 40],
                priority: 2,
            },
            {
                type: 'point',
                coordinates: [51.495, -0.06],
                color: '#f44334',
                priority: 3,
            },
            {
                type: 'img',
                coordinates: [51.495, -0.06],
                prevLatlng: [51.503, -0.09],
                img: './images/arrow.svg',
                imgSize: [40, 40],
                priority: 2,
            },
        ];


        /* Show lines */
        const line = points.map(point => point.coordinates);
        L.polyline(line, { color: '#178a00' }).addTo(map);


        /* Show points */
        points.sort((a, b) => a.priority - b.priority);

        points.forEach((point) => {
            switch (point.type) {
            case 'point':
                L.circleMarker(point.coordinates, {
                    radius: 8,
                    fillColor: point.color,
                    fillOpacity: 1,
                    color: '#fff',
                    weight: 3,
                }).addTo(map);
                break;
            case 'img':
                L.canvasMarker(point.coordinates, {
                    radius: 20,
                    prevLatlng: point.prevLatlng,
                    img: {
                        url: point.img,
                        size: point.imgSize,
                        rotate: point.imgRotate || 0,
                    },
                }).addTo(map);
                break;
            }
        });
    },
};
