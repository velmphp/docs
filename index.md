---
layout: home
title: Velm
hero:
  name: Velm
  text: Composable Modules framework for Laravel
  tagline: A runtime composition framework for building modular, maintainable Laravel applications.
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
---

## What is Velm?

Velm is a **runtime composition framework** for Laravel that lets you build
**logical models and services** whose behavior is composed dynamically
from multiple classes across packages and modules.

Instead of inheritance, traits, or static overrides, Velm uses **pipelines**
to determine how behavior is executed at runtime.

If you’ve ever wished Laravel had something like **Odoo’s models** or
**Rails concerns**, Velm is that idea—adapted properly for PHP.

---

## The Problem Velm Solves

Traditional Laravel applications struggle with:

- Inheritance chains that become rigid and fragile
- Traits that silently conflict
- Service classes tightly coupled to models
- Packages that cannot safely extend application behavior
- “Base models” that grow endlessly

Velm replaces these patterns with **logical names and pipelines**.

---

## Core Ideas

### Logical Names

A *logical name* represents a conceptual entity (e.g. `Product`, `InvoiceService`)
that may be implemented by multiple physical classes.

```php
velm_model('Product');
velm_service('InvoiceService');
```

Logical names decouple **what something is** from **where it is implemented**.

---

### Pipelines

A pipeline is an ordered chain of implementations that share the same logical name.

When a method is called, Velm executes it through the pipeline, allowing
each implementation to extend or override behavior.

```php
class ProductBase
{
    public function price($self)
    {
        return 100;
    }
}

class ProductTax
{
    public function price($self)
    {
        return super()->price() * 1.2;
    }
}
```

Execution order is deterministic, explicit, and debuggable.

---

### Models and Services (Separated on Purpose)

Velm draws a hard line between **models** and **services**:

- **Logical Models**
  - Extend Eloquent
  - Represent data and persistence
  - Support attributes, casts, scopes, and serialization

- **Logical Services**
  - Stateless
  - Persistence-agnostic
  - Represent domain behavior

This separation prevents accidental coupling and keeps systems modular.

---

## What Velm Is *Not*

Velm is **not**:

- A replacement for Laravel
- A dependency injection container
- A code generator or compiler
- A trait-based system
- A macro system

Velm runs entirely at **runtime**, integrates cleanly with Laravel,
and does not require altering your application structure.

---

## Why Runtime Composition?

Runtime composition allows:

- Packages to extend behavior safely
- Applications to remain modular
- Behavior to be overridden without inheritance
- Clear execution order via `super()`
- IDE support without magic globals

Most importantly, it keeps **architecture explicit**.

---

## Next Steps

- Learn the core concepts → [Pipelines](/docs/concepts/pipelines)
- Create your first logical model → [Logical Models](/docs/models/overview)
- Build modular domain logic → [Services](/docs/services/overview)

---

> Velm is designed for developers who care about architecture,
> long-term maintainability, and modular systems.
