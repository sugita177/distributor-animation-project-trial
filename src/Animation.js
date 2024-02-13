import { useSelector } from "react-redux"

export default function Animation() {
    const angle = useSelector((state) => state.position.angle)
    return (
        <div>
            <h1>angle: {angle}</h1>
            <canvas>
            
            </canvas>
        </div>
    )
}