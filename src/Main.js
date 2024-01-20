import { StateValuesProvider } from "./StateValuesProvider";
import InputValues from "./InputValues";
import Animation from "./Animation";

export default function Main() {
    return (
        <StateValuesProvider>
            <div>
                <InputValues />
                <Animation />
            </div>
        </StateValuesProvider> 
    )
}