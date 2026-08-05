import { useState, useEffect } from 'react';
import Searchbar from "../components/Searchbar";
import Library from "../components/Library";
import CarCard from '../components/CarCard';
import '../index.css';

export default function List(){
    const [selectedCar, setSelectedCar] = useState(null);
    const [library, setLibrary] = useState(() => {
        const savedLibrary = localStorage.getItem("garage");

        return savedLibrary ? JSON.parse(savedLibrary) : [];
    });

      useEffect(() => {
            localStorage.setItem("garage", JSON.stringify(library));
        }, [library]);


    return(
        <>
            <Searchbar setSelectedCar={setSelectedCar}/>
            <CarCard
                car={selectedCar}
                library={library}
                setLibrary={setLibrary}
                setSelectedCar={setSelectedCar}
            />
            <Library library={library} setLibrary={setLibrary}/>
        </>
    )
}