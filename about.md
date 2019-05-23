---
layout: page
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
			<img class="scale" src="/assets/images/tanya.JPG" alt="Picture of Tanya in Shanghai"/>
			<br>

			<h2>About Me.</h2>
			<p style="font-family: Poppins-Light;" class="aboutw"> My name is Tanya Lai and I'm a rising sophomore studying computer science and engineering at the University of Michigan, Ann Arbor. On campus, I'm the librarian and a double bassist for the Michigan Pops Orchestra, and a research assistant in IVF Patient Experience (UI/HCI) in the M-Interact Lab. I'm currently preparing to audition for an additional orchestra this fall and to explore more clubs available.</p>
			<br>
			<p style="font-family: Poppins-Light;" class="aboutw">I'm a third-culture kid who is a Canada, Hong Kong, and Singapore citizen. I was born in Hong Kong to a Canadian/Hong Kong father and a Singaporean mother. Soon after, I moved to Midland, Michigan when I was 6, moved to Shanghai, China when I was 10, and currently reside in Ann Arbor, Michigan for university. As an international citizen who has been immersed in a variety of cultures that have helped shaped my worldview, my experiences supplement me with different perspectives of a user's experience, issues that technology can solve, and ideas and methods to help build the future with tech.</p>
			<br>
		</div>

		<div class="container">
		<h2>Fun Facts.</h2>

		<ul style="font-family: Poppins-Light;" type="disc" class="aboutw">

			<li>I love performing music, particularly playing the double bass in orchestral and small ensemble settings. I've performed with the Michigan Pops Orchestra, AMIS Orchestra (Association for Music in International Schools), APAC Orchestra (Asia Pacific Activities Conference), and in the pit orchestra my high school musicals (Once Upon a Mattress, Addams Family, Oklahoma, and Curtains). </li>

			<br>
			<li>I'm obsessed with stationery. Currently, I'm enjoying the company of my trusty Uni Kuru Toga Mechanical Pencil with a self-sharpening, auto-rotating lead function</li>
			<br>
			<li>I enjoy playing rpg, simulation, and puzzle games, such as the Pokémon series and Puzzles and Dragons. My primary platform is my iPhone–I have over 330 apps and 65% to 75% are games</li>
		</ul>
		<br>
		</div>



  </main>
  {% include footer.html %}
</body>
