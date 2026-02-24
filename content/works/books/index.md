---
layout: layouts/base.njk
title: Books
permalink: /works/books/
---

<ul>
{% for item in collections.books %}
  <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
