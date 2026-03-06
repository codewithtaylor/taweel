---
layout: layouts/base.njk
title: Books
permalink: /books/
templateEngineOverride: njk,md
---

# Books

{% for science in collections.sciences %}
  {% set hasBooks = false %}
  {% for book in collections.books %}
    {% if book.data.sciences and (science.data.science in book.data.sciences) %}
      {% set hasBooks = true %}
    {% endif %}
  {% endfor %}
  {% if hasBooks %}

## {{ science.data.title or science.data.science }}

<ul>
{% for book in collections.books %}
  {% if book.data.sciences and (science.data.science in book.data.sciences) %}
    <li><a href="{{ book.url }}">{{ book.data.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

  {% endif %}
{% endfor %}
