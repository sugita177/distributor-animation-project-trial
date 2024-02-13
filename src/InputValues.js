import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {increaseAngle, decreaseAngle, changeAngle } from "./redux/positionSlice";

export default function InputValues() {
    const angle = useSelector((state) => state.position.angle)
    const dispatch = useDispatch();

    return(
        <table>
            <tbody>
                <tr>
                    <th>増加</th>
                    <td><button onClick={
                        () => dispatch(increaseAngle())
                    }>plus</button></td>
                </tr>
                <tr>
                    <th>減少</th>
                    <td><button onClick={
                        () => dispatch(decreaseAngle())
                    }>minus</button></td>
                </tr>
                <tr>
                    <th>変更</th>
                    <td>
                        <input 
                        type="number" 
                        value={angle}
                        onChange={e => dispatch(changeAngle(e.target.value))}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}