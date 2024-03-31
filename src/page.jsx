import React, { useState } from "react"
import sun from "./assets/sun.svg"
import moon from "./assets/moon.svg"
import search from "./assets/search.svg"
import pin from "./assets/pin.svg"
import darkPin from "./assets/dark-pin.svg"
import darkOffice from "./assets/dark-office.svg"
import darkUrl from "./assets/dark-url.svg"
import darkTweet from "./assets/dark-tweet.svg"
import url from "./assets/url.svg"
import tweet from "./assets/tweet.svg"
import office from "./assets/office.svg"


const Page = () => {

    const [theme, setTheme] = useState("light");
    const [value, setValue] = useState("");
    const [userData, setUserData] = useState(null);

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    async function findDev() {
        try {
            const response = await fetch(`https://api.github.com/users/${value}`);
            const data = await response.json();
            setUserData(data)
            setValue("")
        } catch (err) {
            console.log(err);
        }

    }

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        const date = new Date(dateString)
        return `Joined ${date.toLocaleDateString('en-GB', options)}`;
    }

    const updatePage = () => {
        if (userData && !userData.message) {
            return (
                <div className={`flex flex-col w-[327px] rounded-[15px] shadow-inpt px-6 pt-8 pb-12 md:p-10 md:w-[573px] lg:w-[730px] lg:p-12 lg:flex-row lg:gap-[37px] ${theme === "dark" ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"}`}>
                    <div className="hidden lg:flex">
                        <img className="w-[70px] h-[70px] rounded-[50%] mr-5 md:w-[117px] md:h-[117px] md:mr-[41px]" src={userData ? userData.avatar_url : null} />
                    </div>

                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <div className="flex lg:hidden">
                                <img className="w-[70px] h-[70px] rounded-[50%] mr-5 md:w-[117px] md:h-[117px] md:mr-[41px]" src={userData ? userData.avatar_url : null} />
                            </div>
                            <div className="flex flex-col md:pt-[12px] lg:pt-0 lg:flex-row lg:justify-between lg:w-full">
                                <div className="flex flex-col">
                                    <h2 className={`font-bold text-4 md:text-[26px] md:leading-[38px] ${theme === "dark" ? "text-[#fff]" : "text-[#2B3442]"}`}>{userData ? userData.name : null}</h2>
                                    <h3 className="text-[#0079FF] font-normal text-[13px] mb-[6px] md:text-4 md:leading-6 md:mt-[2px] md:mb-1">@{userData ? userData.login : null}</h3>
                                </div>
                                <div className="flex lg:mt-[4px]">
                                    <p className={`font-normal text-[13px] md:text-[15px] md:leading-[22px] ${theme === "dark" ? "text-[#fff]" : "text-[#697C9A]"}`}>{userData ? formatDate(userData.created_at) : null}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[33px] mb-[23px] md:mt-6 md:mb-8 lg:mt-5 lg:mb-8">
                            <p className={`text-[13px] leading-[25px] md:text-[15px] ${theme === "dark" ? "text-[#fff]" : "text-[#4B6A9B]"}`}>{userData.bio !== null ? userData.bio : "This profile has no bio"}</p>
                        </div>

                        <div className={`flex w-full rounded-[10px] mb-6 px-[14px] py-[18px] justify-center md:pl-8 md:pr-24 md:mb-[30px] md:justify-between lg:pt-[15px] lg:pl-8 lg:pr-[83px] lg:pb-[17px] lg:mb-[37px] ${theme === "dark" ? "bg-[#141D2F]" : "bg-[#F6F8FF]"}`}>
                            <div className="flex flex-col w-20 items-center md:w-10 md:items-start">
                                <p className={`text-[11px] mb-2 md:text-[13px] md:leading-[20px] md:mb-[1px] ${theme === "dark" ? "text-[#fff]" : "text-[#4B6A9B]"}`}>Repos</p>
                                <h4 className={`text-[#2B3442] text-4 font-bold md:text-[22px] md:leading-8 ${theme === "dark" ? "text-[#fff]" : "text-[#2B3442]"}`}>{userData ? userData.public_repos : null}</h4>
                            </div>
                            <div className="flex flex-col w-20 items-center md:w-18 md:items-start">
                                <p className={`text-[11px] mb-2 md:text-[13px] md:leading-[20px] md:mb-[1px] ${theme === "dark" ? "text-[#fff]" : "text-[#4B6A9B]"}`}>Followers</p>
                                <h4 className={`text-[#2B3442] text-4 font-bold md:text-[22px] md:leading-8 ${theme === "dark" ? "text-[#fff]" : "text-[#2B3442]"}`}>{userData ? userData.followers : null}</h4>
                            </div>
                            <div className="flex flex-col w-20 items-center md:w-18 md:items-start">
                                <p className={`text-[11px] mb-2 md:text-[13px] md:leading-[20px] md:mb-[1px] ${theme === "dark" ? "text-[#fff]" : "text-[#4B6A9B]"}`}>Following</p>
                                <h4 className={`text-[#2B3442] text-4 font-bold md:text-[22px] md:leading-8 ${theme === "dark" ? "text-[#fff]" : "text-[#2B3442]"}`}>{userData ? userData.following : null}</h4>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                            <div className={`flex gap-5 order-1 ${userData.location == null ? "opacity-50" : "opacity-100"}`}>
                                <img className={`${theme === "dark" ? "flex" : "hidden"}`} src={pin} />
                                <img className={`${theme === "dark" ? "hidden" : "flex"}`} src={darkPin} />
                                <p className={`text-[13px] md:text-[15px] md:leading-[22px] ${theme === "dark" ? "text-white" : "text-[#4B6A9B]"} `}>{userData.location !== null ? userData.location : "Not Available"}</p>
                            </div>
                            <div className={`flex gap-[13px] order-3 overflow-hidden ${userData.blog == "" ? "opacity-50" : "opacity-100"}`}>
                                <img className={`${theme === "dark" ? "flex" : "hidden"}`} src={url} />
                                <img className={`${theme === "dark" ? "hidden" : "flex"}`} src={darkUrl} />
                                {userData.blog !== "" ? (<a href={userData.blog} target="_blank" className={`text-[13px] ${theme === "dark" ? "text-white" : "text-[#4B6A9B]"} `}>{userData.blog}</a>) : (<span className={`text-[13px] md:text-[15px] md:leading-[22px] ${theme === "dark" ? "text-white" : "text-[#4B6A9B]"} `}>Not Available</span>)}
                            </div>
                            <div className={`flex gap-[13px] order-2 ${userData.twitter_username == null ? "opacity-50" : "opacity-100"}`}>
                                <img className={`${theme === "dark" ? "flex" : "hidden"}`} src={tweet} />
                                <img className={`${theme === "dark" ? "hidden" : "flex"}`} src={darkTweet} />
                                <p className={`text-[13px] md:text-[15px] md:leading-[22px] ${theme === "dark" ? "text-white" : "text-[#4B6A9B]"} `}>{userData.twitter_username !== null ? userData.twitter_username : "Not Available"}</p>
                            </div>
                            <div className={`flex gap-[13px] order-4 ${userData.company == null ? "opacity-50" : "opacity-100"}`}>
                                <img className={`${theme === "dark" ? "flex" : "hidden"}`} src={office} />
                                <img className={`${theme === "dark" ? "hidden" : "flex"}`} src={darkOffice} />
                                <p className={`text-[13px] md:text-[15px] md:leading-[22px] ${theme === "dark" ? "text-white" : "text-[#4B6A9B]"} `}>{userData.company !== null ? userData.company : "Not Available"}</p>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }

    }




    return (
        <main className={`flex items-center flex-col w-full min-h-screen pt-[31px] px-6 font-mono md:pt-[140px] md:px-[98px] lg:pt[144px] pb-10 ${theme === "dark" ? "bg-[#141D2F]" : "bg-[#F6F8FF]"}`}>

            <div className="flex w-[327px] justify-between items-center md:w-[573px] lg:w-[730px]">
                <div><h1 className={`text-[26px] font-bold ${theme === "dark" ? "text-[#fff]" : "text-[#222731]"}`}>devfinder</h1></div>
                <div className="flex items-center">
                    <button className={`flex gap-4 ${theme === "dark" ? "flex-none" : "hidden"}`} onClick={handleTheme}>
                        <span className="text-[13px] font-bold tracking-[2.5px] text-[#fff]">LIGHT</span>
                        <img src={sun} />
                    </button>
                    <button className={`flex gap-4 ${theme === "dark" ? "hidden" : "flex"}`} onClick={handleTheme}>
                        <span className="text-[13px] font-bold tracking-[2.5px] text-[#4B6A9B]">DARK</span>
                        <img src={moon} />
                    </button>
                </div>
            </div>

            <div className="flex w-[327px] mt-[35px] mb-4 relative md:mb-6 md:w-[573px] lg:w-[730px]">
                <img className="absolute top-5 left-4 md:top-[23px] md:left-8" src={search} />
                <input className={`flex w-full h-[60px] rounded-[15px] shadow-inpt pl-[45px] pr-[98px] text-[13px] font-normal caret-[#0079FF] focus:outline-none md:h-[69px] md:pl-20 md:pr-[120px] md:text-[18px] ${theme === "dark" ? "bg-[#1E2A47] placeholder-[#fff] text-[#fff]" : " placeholder-[#4B6A9B]"}`} value={value} type="text" placeholder="Search GitHub username…" onKeyDown={(e) => e.key === "Enter" && findDev()} onChange={(e) => setValue(e.target.value)} />
                {userData && userData.message ? <span className={`flex absolute text-[#F74646] text-[15px] font-bold right-[93px] top-[50%] translate-y-[-50%] w-21 text-start md:right-[140px] ${theme === "dark" ? "bg-[#1E2A47]" : "bg-white"}`}>No result</span> : null}
                <button className="absolute top-[50%] translate-y-[-50%] right-[7px] text-[14px] font-bold rounded-[10px] py-[12.5px] pl-[18px] pr-[14px] bg-[#0079FF] text-white hover:bg-[#60ABFF] md:py-[13px] md:px-[24px] md:text-[16px]" onClick={findDev}>Search</button>
            </div>

            {updatePage()}

        </main>
    )
}

export default Page