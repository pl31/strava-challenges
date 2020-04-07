# strava challenges

{% for page in site.pages %}
  {{site.canonical_domain}} {{site.baseurl}}{{ page.url }}
{% endfor %}
