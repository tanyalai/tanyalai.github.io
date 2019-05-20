---
layout: page
title: Projects
permalink: /projects/
---
<head>
	<title>{{ site.author }} / {{ page.project.title }}</title>
	<meta name="author" content="{{ site.author }}">
	<meta name="description" content="{{ page.content | strip_html | strip_newlines }}">
	<meta name="keywords" content="{{ page.meta.keywords }}">
	{% include head.html %}
</head>
<body>
	{% include header.html %}
  <main class="content">

    <section class="projects">
			<div class="container">
				<h2>My Projects.</h2>
				<ul class="projects-list">

					{% for item in site.categories.projects reversed %}
						<li>
							<a href="{{ item.url | prepend: site.baseurl }}">
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

        <h2>My Curriculum Project Exercises.</h2>
				<ul class="projects-list">

					{% for item in site.categories.class reversed %}
						<li>
							<a href="{{ item.url | prepend: site.baseurl }}">
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