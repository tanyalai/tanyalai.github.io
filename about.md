---
layout: 
title: About
permalink: /about/
---
<head>
	<title>{{ site.author }} / {{ site.ab }}</title>
	<meta name="author" content="{{ site.author }}">
	<meta name="description" content="{{ page.content | strip_html | strip_newlines }}">
	<meta name="keywords" content="{{ page.meta.keywords }}">
	{% include head.html %}
</head>
<body>
	{% include header.html %}
	<script src="{{ "/assets/scripts/toggle.js" | prepend: site.baseurl }}"></script>
  <main class="content">

		<div class="container">
			<img class="scale" src="/assets/images/IMG_9794.jpg" alt="Picture of Tanya in Shanghai"/>
			<br>

			<h2>About Me.</h2>
			<p style="font-family: Poppins-Light;" class="aboutw"> My name is Tanya Lai and I'm a rising senior studying computer science engineering with a minor in music at the University of Michigan, Ann Arbor. On campus, I'm the personnel director and a double bassist for the Michigan Pops Orchestra, the finance chair for Tech for Social Good, a grader for EECS 183, a software team member in MedLaunch, and helping to develop a spatial audio platform for Inviso XR.</p>
			<br>
			<p style="font-family: Poppins-Light;" class="aboutw">I'm a third-culture individual who is a Canada, Hong Kong, and Singapore citizen. I was born in Hong Kong to a Canadian/Hong Kong father and a Singaporean mother. Soon after, I moved to Midland, Michigan when I was 6, moved to Shanghai, China when I was 10, and currently reside in Ann Arbor, Michigan for university. As an international citizen who has been immersed in a variety of cultures that have helped shaped my worldview, my experiences supplement me with different perspectives of a user's experience, issues that technology can solve, and ideas to help build the future with society and tech in mind.</p>
			<br>
		</div>

		<div class="container">
		<h2>Fun Facts.</h2>

		<ul style="font-family: Poppins-Light;" type="disc" class="aboutw">

			<li>I love performing music, particularly playing the double bass in orchestral and small ensemble settings. I'm currently part of the Michigan Pops Orchestra and one of
            my fave pieces to play was <a href="https://www.youtube.com/watch?v=XbMRpoawVjM" target="_blank">The Prince of Egypt</a></li>

			<br>
			<li>I like listening to instrumental music or music with lyrics in languages I don't 
            understand. My top genres are japanese jazz fusion, jazztronica, and jazz. Compare Spotify tastes with me <a href="https://musictaste.space/request/blue-marinade-197" target="_blank">here</a></li>
			<br>
		</ul>
		<br>
		</div>



  </main>
  {% include footer.html %}
</body>
