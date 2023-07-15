import { useRouter } from "next/router"
import Style from '../styles/info.module.css'
const Post = () => {
    const router = useRouter()
    const { sno } = router.query
    return <div className={Style.description}>
    <h1>Title of this page is {sno}</h1>
    <hr/>
    <div className={Style.container}>
        <a>There isn,t any content about the page {sno} </a>
    </div>
    </div>
}

export default Post