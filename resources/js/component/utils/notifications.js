import { notification } from "antd"

export const e = (msg, des = '') => {
    notification.error({
        message: msg,
        description: des
    })
}

export const s = (msg, des = '') => {
    notification.success({
        message: msg,
        description: des
    })
}

export const w = (msg, des = '') => {
    notification.warning({
        message: msg,
        description: des
    })
}

export const i = (msg, des = '') => {
    notification.info({
        message: msg,
        description: des
    })
}

export const swr = () => {
    notification.error({
        message: "Something went wrong!",
        description: "Please try again later"
    })
}

export const showBackendErrors = (res) => {
    if (res.data?.errors) {
        for (let e of res.data.errors) {
            notification.error({
                message: e,
                description: ""
            })
        }
    } else {
        swr();
    }

}

//Covert any text to lowercase form
export const textCapitalize = (res) => {
    const converToLowercase = res.toLowerCase()
    return converToLowercase.slice(0, 1).toUpperCase() + converToLowercase.slice(1);
}

