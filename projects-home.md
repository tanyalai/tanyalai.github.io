---
layout: 
title: Projects
permalink: /projects/
---
<head>
	<title>{{ site.author }} / {{ site.project }}</title>
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
			<p style="font-family: Poppins-Light;">Due to the University of Michigan's honor code, I cannot publicize my code for course projects. Please email me at <a href="mailto:tanyalai@umich.edu" style="text-decoration: underline" target="_blank">tanyalai@umich.edu</a> and provide context to request access.</p>
			<br>
		</div>
	</section> 
	<section class="projects">
		<div class="container">
			<h2>My Tech Projects.</h2>
				<ul class="projects-list">
					{% for item in site.tags.projects%}
						<li>
							<a href="{{ item.url | prepend: site.baseurl }}" style="text-decoration: none;">
								<div class="img-wrapper">
									<img src="{{ item.project.logo | prepend: site.baseurl }}" alt="{{ item.project.title }}" />
								</div>
								<span class="h2" style="font-family: Poppins-Light">{{ item.project.type }}</span>
								<h3>{{ item.project.title }}</h3>
							</a>
						</li>
					{% endfor %}
				</ul>
        	<br>
        	<h2>My Standardized CS Class Projects.</h2>
				<ul class="projects-list">
					{% for item in site.tags.class %}
						<li>
							<a href="{{ item.url | prepend: site.baseurl }}" style="text-decoration: none;">
								<div class="img-wrapper">
									<img src="{{ item.project.logo | prepend: site.baseurl }}" alt="{{ item.project.title }}" />
								</div>
								<span class="h2" style="font-family: Poppins-Light">{{ item.project.type }}</span>
								<h3>{{ item.project.title }}</h3>
							</a>
						</li>
					{% endfor %}
				</ul>
			<br>
			<h2>My Other Projects.</h2>
				<ul class="projects-list">
					{% for item in site.tags.other %}
						<li>
							<a href="{{ item.url | prepend: site.baseurl }}" style="text-decoration: none;">
								<div class="img-wrapper">
									<img src="{{ item.project.logo | prepend: site.baseurl }}" alt="{{ item.project.title }}" />
								</div>
								<span class="h2" style="font-family: Poppins-Light">{{ item.project.type }}</span>
								<h3>{{ item.project.title }}</h3>
							</a>
						</li>
					{% endfor %}
				</ul>
		</div>
	</section>

  </main>
  {% include footer.html %}
</body>
