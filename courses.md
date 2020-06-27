---
layout: 
title: Courses
permalink: /courses/
---
<head>
	<title>{{ site.author }} / {{ site.course }}</title>
	<meta name="author" content="{{ site.author }}">
	<meta name="description" content="{{ page.content | strip_html | strip_newlines }}">
	<meta name="keywords" content="{{ page.meta.keywords }}">
	{% include head.html %}
</head>
<body>
	{% include header.html %}
	<script src="{{ "/assets/scripts/toggle.js" | prepend: site.baseurl }}"></script>
  <main class="content">
        <section class="bodyCon">
            <div class="container">
                <h2>Online Courses</h2>
                    <ul>
                        <li>Coming soon...</li>
                    </ul>
                <br>
                <h2>Fall 2020 (Upcoming)</h2>
                    <ul>
                        <li><a href="https://eecs485staff.github.io/eecs485.org/" target="_blank">EECS 485</a>: <em>Web Systems</em></li>
                        <li>EECS 376: <em>Foundations of Computer Science</em></li>
                        <li><a href="https://cfe.umich.edu/project/intro-to-entrepreneurial-design/" target="_blank">ENTR 390</a>: <em>Intro to Entrepreneurial Design–IoT Alexa Skill Building</em></li>
                        <li>COGSCI 200: <em>Intro to Cognitive Science</em></li>
                    </ul>
                <br>
                <h2>Winter 2020</h2>
                    <ul>
                        <li><a href="https://eecs388.org/" target="_blank">EECS 388</a>: <em>Intro to Computer Security</em></li>
                        <li><a href="http://www.math.lsa.umich.edu/courses/214/" target="_blank">MATH 214</a>: <em>Applied Linear Algebra</em></li>
                        <li>PHYSICS 140 & 141: <em>General Physics 1 (Mechanics) + Lab</em></li>
                        <li>MUSICOL 346: <em>History of Music–Western Music 1750s to Present</em></li>
                    </ul>
                <br>
                <h2>Fall 2019</h2>
                    <ul>
                        <li>EECS 281: <em>Data Structures and Algorithms</em></li>
                        <li><a href="http://www.math.lsa.umich.edu/courses/215/" target="_blank">MATH 215</a>: <em>Multivariable and Vector Calculus</em></li>
                        <li><a href="https://www.eecs.umich.edu/courses/eecs370/" target="_blank">EECS 370</a>: <em>Intro to Computer Organization</em></li>
                        <li><a href="https://www.lib.umich.edu/blogs/eaten-grue/musperf-300-video-game-music" target="_blank">MUSPERF 300/PAT 305</a>: <em>Video Game Music</em></li>
                        <li>TCHNCLCM 300: <em>Technical Communication</em></li>
                    </ul>
                <br>
                <h2>Winter 2019</h2>
                    <ul>
                        <li><a href="https://eecs280staff.github.io/eecs280.org/" target="_blank">EECS 280</a>: <em>Programming and Introductory Data Structures</em></li>
                        <li>EECS 203: <em>Discrete Math</em></li>
                        <li><a href="https://eng100.engin.umich.edu/list/sec250/" target="_blank">ENGR 100</a>: <em>Microprocessors and Toys</em></li>
                        <li>EECS 201: <em>Computer Science Pragmatics</em></li>
                        <li>ENGR 280: <em>Research Credit for working in M-InterACT Lab</em></li>
                        <li>ALA 108: <em>STEM Success (<a href="https://lsa.umich.edu/wiserp" target="_blank">WISE</a> program requirement)</em></li>
                    </ul>
                <br>
                <h2>Fall 2018</h2>
                    <ul>
                        <li>ENGR 101: <em>Intro to Computers and Programming</em></li>
                        <li>CHEM 130, 125 & 126: <em>General Chemistry + Lab</em></li>
                        <li>ENGR 280: <em>Research Credit for working in M-InterACT Lab</em></li>
                        <li>LING 111: <em>Introduction to Language</em></li>
                        <li>ALA 107: <em><a href="https://lsa.umich.edu/wiserp" target="_blank">Women in Science and Engineering Residence Program</a> Seminar</em></li>
                    </ul>
                <br>
            </div>
        </section>
  </main>
  {% include footer.html %}
</body>
