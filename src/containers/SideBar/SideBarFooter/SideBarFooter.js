import React from 'react';
import './SideBarFooter.scss';

export function SideBarFooter() {
    return (
        <React.Fragment>
            <div className='footer-block'>
                <div>About press Copyright</div>
                <div>Creators Advise</div>
                <div>Developers +myTube</div>
            </div>
            <div className='footer-block'>
                <div>Terms Privacy</div>
                <div>Policy & safety</div>
                <div>Test new features</div>
            </div>
            <div className='footer-block'>
                <div>All prices include VAT</div>
            </div>
            <div className='footer-block'>
                <div>@ ya boi</div>
            </div>
        </React.Fragment>
    );
}