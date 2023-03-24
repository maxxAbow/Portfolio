import React from 'react';

export default function Virtual () {
    return(
        <div class="digital-item">
            <h2>Digital Goods</h2>
            <div class="origami">
            <p>
                A 3D-printed sculpture depicting the image of an origami swan. It has a 5-inch wingspan and sits 3 inches tall. 
            </p>
            <img id="top-of-virtual" src="../../../assets/images/crane.jpg" alt="A 3D-printed origami-style crane"/>
            </div>
            <div class="weather">
            <p id="weatherText">
                A calendar application that conveniently displays weather details on event days.
                Repo - https://github.com/maxxAbow/weatherOrNot
            </p>
            <img id="weatherOrNot" src="../../../assets/images/weatherOrNot.png" alt="A calendar month on left with the day's weather on right"/>
            </div>
        </div>
    );
}