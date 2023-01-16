import React from "react"

import "./About.css"
import 'charts.css';

function About() {


    return (
        <div className="about-container">
            <h1 className="about">About me</h1>
            <div className="special">
                    <h1 className="block1">&nbsp;</h1>
                    <h1 className="block">&nbsp;</h1>
                    <h1 className="block1">&nbsp;</h1>
            </div>
            <div className="about-box">
                <p>Hello, my name is Matthew Erwin, or you can call me just Matt.
                    I am a Junior at Louisiana State University, studying and minoring in Computer Science and Mathematics, respectively.
                </p>
                <p>
                    I started my CS journey around Junior year in high school. I started with the infamous Scratch language to learn how software engineering works. Later in my senior year of high school, I studied my first programming language, Java.
                </p>

                <p>
                Now, as a student at university, I have a lot more experience in Java and now more so C++. My preferred job positions regarding software development are either Fullstack, Backend, or another generic software developer role.
                </p>
                <p>&nbsp;</p>
                <p>
                On a more personal level, my passion is content creation, sports, cars, and video games. What I mean by content creation is making videos. On my YouTube, I edit and post a few travel videos. I also plan on making some software engineering videos.
                </p>
            </div>
            <div className="skills-box">
                <h3 className="Skills">Skills</h3>
                <div className="special">
                    <h1 className="block1-about">&nbsp;</h1>
                    <h1 className="block-about">&nbsp;</h1>
                    <h1 className="block1-about">&nbsp;</h1>
                </div>
                <div className="graph-box">
                    <div id="my-chart">
                        <table id="animations-example-5" className="charts-css column show-labels data-spacing-15 show-primary-axis reverse">
                        <caption> A Very Long Chart Heading With Some Custom Styling Applied on Captions </caption>
                            <tbody>
                                <tr className="col-width">
                                    <th scope="col" className="label-style"> C# </th>
                                    <td className="Csharp">&nbsp;0.6</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="label-style"> Java </th>
                                    <td className="highlighted" id="Java">&nbsp;1</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="label-style"> JS </th>
                                    <td className="JS">&nbsp;0.85</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="label-style"> Python </th>
                                    <td className="Python">&nbsp;0.4</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="label-style"> C++ </th>
                                    <td className="highlighted">&nbsp;1</td>
                                </tr>
                            </tbody>                
                        </table>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default About