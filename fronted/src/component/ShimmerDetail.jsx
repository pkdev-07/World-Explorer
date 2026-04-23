import React from 'react';
import '../component/ShimmerDetail.css'; // use the same CSS

export default function ShimmerDetail() {
    return (
        <div className="shimmer-detail-wrapper">
            <div className="shimmer-flag-big"></div>
            <div className="shimmer-text-area">
                <div className="shimmer-line tall"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line short"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line short"></div>
                <div className="shimmer-line"></div>
            </div>
        </div>
    );
}
