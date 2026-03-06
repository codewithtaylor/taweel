---
layout: layouts/base.njk
title: Poetry
permalink: /poetry/
templateEngineOverride: njk,md
---

# Poetry

## Poets

<ul>
{% for poet in collections.poets %}
  <li><a href="{{ poet.url }}">{{ poet.data.title }}</a></li>
{% endfor %}
</ul>

## Books

<ul>
{% for book in collections.books %}
  {% if book.data.sciences and ("poetry" in book.data.sciences) %}
    <li><a href="{{ book.url }}">{{ book.data.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

## Poems

<ul>
{% for item in collections.poetry %}
  <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
