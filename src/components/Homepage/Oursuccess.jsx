import React from "react";
import { IoMan } from "react-icons/io5";
import { MdOutlineStarRate } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { HiDocumentCheck } from "react-icons/hi2";

const stats = [
    {
        icons: IoMan,
        numbers: "1500+ ",
        header: "happy clients"
    },
    {
        icons: HiDocumentCheck,
        numbers: "12+",
        header: "Success Project"
    },
    {
        icons:LiaAwardSolid,
        numbers: "20+",
        header: "Awards Recevied"
    },
    {
        icons: MdOutlineStarRate,
        numbers: "89%",
        header: "success rate"
    },
];

const CounterSection = () => {
    return (
        <div className=" bg-[url(https://i.pinimg.com/736x/28/cc/45/28cc45693bd8691e54b519a91186fe9c.jpg)] bg-fixed bg-cover p-10 ">
            <div className=" w-10/12 mx-auto ">
                <div className="flex w-full rounded-2xl bg-black/80 text-white p-10 justify-around">
                    {
                        stats.map((count) => (
                            <div className="flex flex-col items-center justify-center gap-y-3 p-2 ">
                                <span><count.icons size={50} /></span>
                                <h1 className="text-5xl font-medium tracking-wide">{count.numbers}</h1>
                                <p className=" text-3xl tracking-wide font-medium capitalize text-white ">{count.header}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CounterSection;

