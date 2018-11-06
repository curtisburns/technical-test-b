import * as React from 'react';

export default function Preloader() {
    return (
        <div className="preloader-component">
            <img className="birdie-logo" src="/assets/logo/birdie_logo_grey.svg" alt="Birdie logo"/>
            <img className="preloader" src="/assets/logo/preloader.gif" alt="Loading data"/>
            <div>
                <h2>Loading data</h2>
            </div>
        </div>
    )
}