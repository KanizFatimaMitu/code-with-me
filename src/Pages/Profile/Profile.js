import React from 'react';

const Profile = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-2xl py-4 font-bold">Assalamualaikum !!</h1>
                        <h1 class="text-4xl font-bold text-primary">My name is <br /> "Kaniz Fatima"</h1>
                        <p class="py-6 text-lg">"I am a MERN stack web developer. I love to use my creativity and make something new. That's why I love to play with code. Over the last year, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly."</p>
                        <button  class="btn btn-primary">
                            <a target="_blank" href="https://www.linkedin.com/in/kaniz-fatima-mitu-212432233/"> my LinkedIn </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;