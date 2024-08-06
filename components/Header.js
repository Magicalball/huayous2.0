import { HiBars3CenterLeft } from "react-icons/hi2";
import { GoScreenFull } from "react-icons/go";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { useState } from "react";


export default function Header(){

    const [isFullscreen,setisFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                setisFullscreen(true);
            })
        } else {
            if(document.exitFullscreen){
                document.exitFullscreen().then(() => {
                    setisFullscreen(false);
                })
            }
        }
    }


    return <>
    <header className="header flex flex-sb">
        <div className="logo flex gap-2">
            <h1>ADMIN</h1>
            <div className="headerham flex flex-center">
            <HiBars3CenterLeft/>
            </div> 
        </div>
        <div className="rightnav flex gap-2">
            <div onClick={toggleFullscreen}>
                {isFullscreen ?  <MdOutlineFullscreenExit/> : <GoScreenFull/>}
            </div>
            <div className="notification">
                {/*图片铃铛 没找到*/}
                <img src="/img/notification.png" alt="noti" />
            </div>
            <div className="profilenav">
                {/*图片用户 没找到记得改后缀*/}
                <img src="img/user.png" alt="user" />
            </div>
        </div>
    </header>
    </>
}