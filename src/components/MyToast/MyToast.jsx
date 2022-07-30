import { Toaster } from "react-hot-toast";

export const MyToast = () => {
    return (

        //! Defining cutsom style for react toaster
        <Toaster
            position="top-center"
            reverseOrder={true}
            toastOptions={{
                className: "",
                duration: 2000,
                success: {
                    style: {
                        backgroundColor: "#b3dfca",
                        color: "#043a04",
                        fontSize: ".8rem",
                        fontWeight: "700",
                    },
                },
                error: {
                    duration: 3000,
                    style: {
                        backgroundColor: "#dfb3b3",
                        color: "#490c0c",
                        fontSize: ".8rem",
                        fontWeight: "700",
                    },
                },
            }}
        />
    )
}
