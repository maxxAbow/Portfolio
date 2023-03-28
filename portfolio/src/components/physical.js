import React from 'react';
import '../style/physical.css';

export default function Physical () {
    return (
    <div>
        <div class="woven-item">
            <h2>Woven Goods</h2>
            <p>
                Every day for one month, I crocheted as close to my height as I could within a two-minute time limit. At the end of those 30 days, I designed a woven reflection considering body width measurements. The pieces created from those measurements were lasercut. This was the first work I ever sold.
            </p>
            <img id="top-of-physical" src="../../../assets/images/SelfReflection.png" alt="Woven tapestry representing the 2D width of the artist"/>
        
        </div>
        <div class="painted-item">
            <h2>Painted Goods</h2>
            <p>
                This memento captures souveigneers from an oversees family reunion.
            </p>
            <img src="../../../assets/images/mugged.png" alt="Practice painting of a keychain, a police report, and a subway ticket"/>
        </div>
    </div>
    );
}