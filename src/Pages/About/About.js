import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <div className='my-24 mx-12'>
            <h1 className='text-xl font-extrabold text-center m-8 text-info '>All Question's Answer</h1>
            <div className='text-center my-6'>
            <FontAwesomeIcon   icon={ faArrowCircleDown} />
            </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-4'>
                   
                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Differences between argument and parameter ?</h2>
                            <p>- Function parameters are the names listed in the function's definition. Function arguments are the real values passed to the function.</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> What is Node.js ?</h2>
                            <p>-Node.js is an open source , cross platform and javascript runtime environment that runs on the V8 engine created by "Ryan dahl"</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> What is a Landing page ?</h2>
                            <p>- Landing page is a stand alone web page that a person "lands" after clicking through from an email , ad or other other digital location without landing page people who came to your website will not convert into users and leads, it's as simple as that.</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> What About REST API ?</h2>
                            <p>- REST APIs communicate via HTTP requests to perform standard database functions like creating, reading, updating, and deleting records (also known as CRUD) within a resource. For example, a REST API would use a GET request to retrieve a record, a POST request to create one, a PUT request to update a record, and a DELETE request to delete one. All HTTP methods can be used in API calls.</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Difference between REST API & API ?</h2>
                            <p>- REST basically is a style of web architecture that governs the behavior of clients and servers. While API is a more general set of protocols and is deployed over the software to help it interact with some other software. REST is only geared towards web applications. And mostly deals with HTTP requests and responses.</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> What is the use of isNaN function ?</h2>
                            <p>- The isNaN() function is used to check whether a given value is an illegal number or not. It returns true if value is a NaN else returns false. It is different from the Number.  isNaN() converts the value to a number before testing it.</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> What are JavaScript Data Types?</h2>
                            <p>- Number,String,Boolean,Object & Undefined</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Difference between “==” and “===”?</h2>
                            <p>-“==” checks only for equality in value, whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different.</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> What do you mean by NULL in Javascript?</h2>
                            <p>- The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> What does the git push command do?</h2>
                            <p>- The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo. It's the counterpart to git fetch , but whereas fetching imports commits to local branches, pushing exports commits to remote branches.</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> What is MongoDB and why it is used?</h2>
                            <p>- MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.
                            </p>
                        </div>
                    </div>

                    <div class="card w-96 bg-neutral shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-info"> <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Which language is used in MongoDB?</h2>
                            <p>- MongoDB queries are based on JavaScript. The language is reasonably easy to learn and many tools are available to query MongoDB data using SQL syntax.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;