import { ThreeDots } from "react-loader-spinner"

const Waiting = () => {
    return (
        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#FFFFFF"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />

    )
}

export default Waiting