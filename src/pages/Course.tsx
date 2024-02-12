import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";

export const Courses = () => { 
    interface Course {
        id: string;
        name: string;
        price: number;
        description: string;
        imageUrl: string;
        type: string;
        hostId: string;
        students: number;
        instructorUrl:string;
    }

    const [vans, setVans] = useState<Course[]>([]);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans));
    }, []);

    const handleFilter = (type: string | null) => {
        setSelectedType(type);
    };

    const filteredVans = selectedType ? vans.filter(van => van.type === selectedType) : vans;

    const vanElements = filteredVans.map(van => (
        <div key={van.id} className="w-[22rem] xl:w-[19rem] h-[30rem] xl:h-[27.5rem] rounded-3xl border px-6 py-10">
            <Link to={`/courses/${van.id}`}>
                <img alt={van.name} src={van.imageUrl} className="rounded-xl mb-4 transform transition duration-150 ease-in-out hover:"/>
                <div>
                    <div className="flex justify-between">
                        <i className={`border py-1 px-3 rounded-md text-xs`}>{van.type}</i>
                        <p>Stars</p>
                    </div>
                    <h3 className="text-sm font-semibold text-head-black mt-4">{van.name}</h3>
                </div>
                <div className="flex gap-2 items-center mt-3">
                    <img src={van.instructorUrl} className="w-8 h-8 rounded-full" />
                    <p className="text-sm">Fetuga</p>
                </div>
                <div className="flex justify-between mt-4 text-sm">
                    <div>
                        <p className="flex items-center gap-2"><IoPeopleOutline /> {van.students} </p>
                    </div>
                    <p>${van.price}</p>
                </div>
            </Link>
        </div>
    ));

    return (
        <div className="flex flex-col items-center justify-center pt-24 font-poppins">
          <h4>Courses At Leadwinn</h4>
            <div className="flex gap-4 mb-4">
                <button onClick={() => handleFilter(null)}>All</button>
                <button onClick={() => handleFilter("Technology")}>Technology</button>
                <button onClick={() => handleFilter("Design")}>Design</button>
                <button onClick={() => handleFilter("Development")}>Development</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-5">
                {vanElements}
            </div>
        </div>
    );
};
