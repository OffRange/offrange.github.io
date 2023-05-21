import { useEffect } from "react"
import { useNavigate } from "react-router"

export function Error404() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/")
    })
}