A list of my favorite segments around Karlsruhe.

{% assign sorted_pages = site.pages | sort: 'url'  %}

{% for page in sorted_pages %}
{% if page.title %}
[{{ page.title }}]({{ site.canonical_domain }}{{ site.baseurl }}{{ page.url }})<br/>
{% endif %}
{% endfor %}
