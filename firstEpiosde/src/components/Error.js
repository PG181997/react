import {useRouteError} from "react-router-dom"


const Error = () => {
    const err = useRouteError()
    // console.log('err: ', err)
    console.log(err)
    return(
        <div>
            <h1>OOPS</h1>
            <h2>Someting went wrong !!!</h2>
            <h4>{err.status} - {err.statusText}</h4>
        </div>
    )
}

export default Error