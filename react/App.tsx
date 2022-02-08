import React, {useState} from "react";

interface Props {
    name: string;
}
//Props don't know ahead of time what type of data we want to pass into our component

const HelloWorld: React.FC<Props> = ({name}) => {
    const [state] = useState<{ fullName: string | null}>({fullName: string})
    state.fullName

    return <div>Hello {name}</div>
}

interface FormProps<T> {
    values: T;
    children: (values: T) => JSX.Element
}

const Form = <T extends {}>({values, children}:FormProps<T>) => {
    return children(values)
}

export default App