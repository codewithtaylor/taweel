---
layout: layouts/base.njk
title: Lectures
permalink: /works/lectures/
---

<ul>
{% for item in collections.lectures %}
  <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
