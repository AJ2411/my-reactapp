import React from 'react';

const SideBar = () => {
    return(
    <div className="col-sm-3 left__column">
        <div className="listings">
            <h3>Facilities of Hotel Silver Oak</h3>

            <ul>
                <li className="list__items">Outdoors:BBQ facilities,Terrace,Garden</li>
                <li className="list__items">Activities:Beach,Kids' club</li>
                <li className="list__items">Food & Drink :Wine/champange,Bar,Restaurant</li>
                <li className="list__items">Parking :free private parking is possible on site(reservation is not nedded)</li>
                <li className="list__items">Internet : WIFI is available in the rooms and is free of charge.</li>
                <li className="list__items">Services : Airport shuttle,pick up, drop off, room service</li>
            </ul>
        </div>
    </div>
    );
}

export default SideBar;