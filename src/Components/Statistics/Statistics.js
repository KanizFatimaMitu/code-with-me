import React from 'react';

const Statistics = () => {
    return (
        <div class="flex justify-center">
            <div class="stats text-center stats-vertical lg:stats-horizontal shadow ">

                <div class="stat">
                    <div class="stat-title ">Recnt visitors</div>
                    <div class="stat-value text-accent">31K</div>
                    <div class="stat-desc">August 1st - sep 5th</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value text-accent">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value text-accent">1,050</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;