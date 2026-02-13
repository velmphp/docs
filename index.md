---
layout: home
title: Velm
hero:
  name: <strong class="gradient-text">Velm</strong>
  tagline: A composition-first modules framework for Laravel
  text: Extensibility without Inheritance
  image:
    src: /logo-concept.svg
    alt: Velm
  actions:
    - theme: brand
      text: Get Started
      link: /docs/getting-started/introduction
    - theme: alt
      text: Concepts
      link: /docs/concepts/pipelines
features:
  - icon: 🧩
    title: Composition-First Architecture
    details: Build modular systems by composing behavior across modules instead of stacking inheritance chains.

  - icon: 🔁
    title: Pipeline-Driven Extensions
    details: Deterministic extension order with super() semantics — no override conflicts.

  - icon: 🧠
    title: Logical Domain Objects
    details: Models and services assembled at runtime from multiple modules.

  - icon: ⚙️
    title: Module Collaboration
    details: Independent modules can safely extend the same domain logic.

  - icon: 🏗️
    title: Zero-Coupling Design
    details: No base-app dependency. No cross-module imports. Pure logical contracts.

  - icon: 🚀
    title: Runtime-Compiled Domain Classes
    details: Bodyless logical classes are assembled from module extensions at runtime, with behavior defined entirely in contributing modules.
---