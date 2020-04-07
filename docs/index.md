# strava challenges

{% for page in site.pages %}
  [page.title]({{ site.canonical_domain }}{{ site.baseurl }}{{ page.url }})
{% endfor %}


{% assign doclist = site.pages | sort: 'title'  %}
<ol>
{% for item in doclist %}
    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
</ol>
