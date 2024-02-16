import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {increaseAngle, decreaseAngle, changeAngle } from "./redux/positionSlice";
import {increaseCenterX, decreaseCenterX, changeCenterX } from "./redux/positionSlice";
import {increaseCenterY, decreaseCenterY, changeCenterY } from "./redux/positionSlice";
import {increaseRadius, decreaseRadius, changeRadius } from "./redux/positionSlice";
import { drawDistributor } from "./util/draw_util";

function makePicture(centerX, centerY, angle, radius) {
    const canvas = document.querySelector('#distributorCanvas');
    drawDistributor(canvas, centerX, centerY, angle, radius);
}

export default function InputValues() {
    const angle = useSelector((state) => state.position.angle);
    const centerX = useSelector((state) => state.position.centerX);
    const centerY = useSelector((state) => state.position.centerY);
    const radius = useSelector((state) => state.position.radius);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>角度</h2>
            <table>
                <tbody>
                    <tr>
                        <th>増加</th>
                        <td><button onClick={
                            () => {
                                dispatch(increaseAngle());
                                makePicture(centerX, centerY, angle, radius);
                            }
                        }>plus</button></td>
                    </tr>
                    <tr>
                        <th>減少</th>
                        <td><button onClick={
                            () => {
                                dispatch(decreaseAngle());
                                makePicture(centerX, centerY, angle, radius);
                            }
                        }>minus</button></td>
                    </tr>
                    <tr>
                        <th>変更</th>
                        <td>
                            <input 
                            type="number" 
                            value={angle}
                            onChange={e => {
                                dispatch(changeAngle(e.target.value)); 
                                makePicture(centerX, centerY, angle, radius);
                                }
                            }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>中心点X座標</h2>
            <table>
                <tbody>
                    <tr>
                        <th>増加</th>
                        <td><button onClick={
                            () => {
                                dispatch(increaseCenterX());
                                makePicture(centerX, centerY, angle, radius);
                            }
                        }>plus</button></td>
                    </tr>
                    <tr>
                        <th>減少</th>
                        <td><button onClick={
                            () => {
                                dispatch(decreaseCenterX());
                                makePicture(centerX, centerY, angle, radius);
                            }
                        }>minus</button></td>
                    </tr>
                    <tr>
                        <th>変更</th>
                        <td>
                            <input 
                            type="number" 
                            value={centerX}
                            onChange={e => {
                                dispatch(changeCenterX(e.target.value));
                                makePicture(centerX, centerY, angle, radius);
                            }
                            }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>中心点Y座標</h2>
            <table>
                <tbody>
                    <tr>
                        <th>増加</th>
                        <td><button onClick={
                            () => {
                                dispatch(increaseCenterY());
                                makePicture(centerX, centerY, angle, radius);
                            }
                        }>plus</button></td>
                    </tr>
                    <tr>
                        <th>減少</th>
                        <td><button onClick={
                            () => {
                                dispatch(decreaseCenterY());
                                makePicture(centerX, centerY, angle, radius);
                            }
                        }>minus</button></td>
                    </tr>
                    <tr>
                        <th>変更</th>
                        <td>
                            <input 
                            type="number" 
                            value={centerY}
                            onChange={e => {
                                dispatch(changeCenterY(e.target.value));
                                makePicture(centerX, centerY, angle, radius);
                            }
                            }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>半径</h2>
            <table>
                <tbody>
                    <tr>
                        <th>増加</th>
                        <td><button onClick={
                            () => {
                                dispatch(increaseRadius());
                                makePicture(centerX, centerY, angle, radius);
                            }
                        }>plus</button></td>
                    </tr>
                    <tr>
                        <th>減少</th>
                        <td><button onClick={
                            () => {
                                dispatch(decreaseRadius());
                                makePicture(centerX, centerY, angle, radius);;
                            }
                        }>minus</button></td>
                    </tr>
                    <tr>
                        <th>変更</th>
                        <td>
                            <input 
                            type="number" 
                            value={radius}
                            onChange={e => {dispatch(changeRadius(e.target.value));
                                            makePicture(centerX, centerY, angle, radius);
                            }
                            }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}