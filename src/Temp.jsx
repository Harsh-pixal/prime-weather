import React, { useEffect, useState } from 'react';





const Temp = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState();



    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fe566cbd46cef95d93b177bcb1e0103e`;
            const res = await fetch(url);

            const resjson = await res.json();

            setcity(resjson.main);


        };
        fetchApi();
    }, [search])
    return (
        <>


            <div className="box">

                <div className="inputdata">


                    <input type="search"

                        value={search} className="inputfield"
                        placeholder="Search Weather"
                       onChange={(event) => {
                            setsearch(event.target.value)

                        }} />


                </div>
            </div>
            {
                !city ? (
                    <p>No Data Found</p>
                ) : (
                    <div className="info">
                        <h2 className="location">
                            <i className="fas fa-street-view"></i>{search}</h2>
                        <h1 className="temp">
                            {city.temp} ℃
                        </h1>
                        <h3 className="tempmin_max">
                            Min : {city.temp_min} ℃ | Max:{city.temp_max} ℃
                        </h3>

                    </div>

                )
            }







            <footer>
                <p><b>©️ 2020 Harshscode.All Rights Reserved | T & C Apply</b></p>
            </footer>
        </>
    );
};
export default Temp;