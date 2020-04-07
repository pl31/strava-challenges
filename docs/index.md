# strava challenges

{% for page in site.pages %}
  [page.title]({{ site.canonical_domain }}{{ site.baseurl }}{{ page.url }})
{% endfor %}
