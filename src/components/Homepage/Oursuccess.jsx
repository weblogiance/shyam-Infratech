import React from "react";
import { IoMan } from "react-icons/io5";

const stats = [
    {
        icons: "",
        numbers: "",
        header: ""
    },
    {
        icons: "",
        numbers: "",
        header: ""
    },
    {
        icons: "",
        numbers: "",
        header: ""
    },
    {
        icons: "",
        numbers: "",
        header: ""
    },
];

const CounterSection = () => {
    return (
        <div>
            <div className=" w-10/12 mx-auto">
                <div className="flex w-full  justify-around">
                    {
                        stats.map((count) => (
                            <div className="flex flex-col items-center justify-center gap-y-3 p-2 ">
                                <span><IoMan size={50} /></span>
                                <h1 className="text-5xl font-bold">10+</h1>
                                <p className=" text-3xl tracking-wide font-medium">Happy Clients</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CounterSection;

