import React from 'react';

const Statistics = () => {
    return (
        <div class="flex justify-center my-12">
            <div class="stats bg-neutral text-center stats-vertical lg:stats-horizontal shadow ">

                <div class="stat gap-x-12">
                    <div class="stat-title">Today's visitors</div>
                    <div class="stat-value text-accent">2K+</div>
                    <div class="stat-desc ">August 1st - sep 5th</div>
                </div>

                <div class="stat">
                    <div class="stat-title"> Today's Enrollment </div>
                    <div class="stat-value text-accent">750</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Total Enrollment</div>
                    <div class="stat-value text-accent"> 1,200+</div>
                    <div class="stat-desc">↗︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;