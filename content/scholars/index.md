---
layout: layouts/base.njk
title: Scholars
permalink: "/scholars/"
nav: true
nav_order: 2
---

# Scholars

<ul>
{% for s in collections.scholars | reverse %}
  <li><a href="{{ s.url }}">{{ s.data.title }}</a></li>
{% endfor %}
</ul>
