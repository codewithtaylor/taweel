---
layout: layouts/base.njk
title: Fatawa
permalink: /fatawa/
nav: true
---

# Fatawa

<ul class="entry-list">
{% for s in collections.fatawa | reverse %}
  <li><a href="{{ s.url }}">{{ s.data.title }}</a></li>
{% endfor %}
</ul>
