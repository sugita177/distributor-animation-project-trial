import { useSelector } from "react-redux"
import { drawDistributor } from "./util/draw_util";

export default function Animation() {
    const angle = useSelector((state) => state.position.angle);
    const centerX = useSelector((state) => state.position.centerX);
    const centerY = useSelector((state) => state.position.centerY);
    const radius = useSelector((state) => state.position.radius);
    const distributerCanvas = document.querySelector('#distributorCanvas');
    drawDistributor(distributerCanvas, centerX, centerY, angle, radius);
    return (
        <div>
            <h2>angle: {angle}</h2>
            <h2>centerX: {centerX}</h2>
            <h2>centerY: {centerY}</h2>
            <h2>radius: {radius}</h2>
            <canvas id="distributorCanvas">
            
            </canvas>
        </div>
    )
}