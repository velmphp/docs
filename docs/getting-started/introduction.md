# Introduction

## What is Velm?

Velm is a **runtime composition framework** for Laravel that lets you
build **logical models and services** whose behavior is assembled
dynamically from multiple classes across packages and modules.

Instead of inheritance, traits, or "hope this override works," Velm uses
**pipelines** to decide how behavior runs at runtime.

If you've ever wished Laravel had something like **Odoo's models** or
**Rails concerns**, Velm is that idea --- but tuned properly for PHP.

------------------------------------------------------------------------

## The Problem Velm Solves

Traditional Laravel apps eventually run into:

-   Inheritance chains that turn into spaghetti
-   Traits that collide silently
-   Service classes glued too tightly to models
-   Packages that can't safely extend app behavior
-   "Base models" that grow like unstoppable monsters

Velm replaces all that with **logical names and pipelines** --- cleaner,
safer, and way more predictable.

------------------------------------------------------------------------

## Core Ideas

### Logical Names

A *logical name* represents a conceptual thing (like `Product` or
`InvoiceService`) that may be implemented by multiple physical classes.

``` php
velm_model('Product');
velm_service('InvoiceService');
```

Logical names separate **what something is** from **where it lives**.

------------------------------------------------------------------------

### Pipelines

A pipeline is an ordered chain of implementations sharing the same
logical name.

When you call a method, Velm runs it through the pipeline so each
implementation can extend, tweak, or override behavior.

``` php
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

Execution order is explicit, deterministic, and debuggable --- no
surprises.

------------------------------------------------------------------------

### Models and Services (Separated on Purpose)

Velm keeps **models** and **services** in different lanes:

-   **Logical Models**
    -   Extend Eloquent
    -   Handle data and persistence
    -   Support attributes, casts, scopes, serialization
-   **Logical Services**
    -   Stateless
    -   Persistence‑agnostic
    -   Represent domain behavior

This keeps systems modular and prevents accidental coupling.

------------------------------------------------------------------------

## What Velm Is *Not*

Velm is **not**:

-   A Laravel replacement
-   A DI container
-   A code generator
-   A trait system
-   A macro hack

It runs fully at **runtime**, plugs into Laravel cleanly, and doesn't
force you to restructure your app.

------------------------------------------------------------------------

## Why Runtime Composition?

Because it lets you:

-   Extend behavior safely from packages
-   Keep apps modular
-   Override behavior without inheritance wars
-   Control execution order via `super()`
-   Keep architecture explicit and understandable

Basically: power without chaos.

------------------------------------------------------------------------

## Next Steps

-   Learn the core concepts → [Pipelines](/docs/concepts/pipelines)
-   Create your first logical model → [Logical
    Models](/docs/models/overview)
-   Build modular domain logic → [Services](/docs/services/overview)

------------------------------------------------------------------------

> Velm is for developers who like clean architecture, long‑term sanity,
> and modular systems that don't fight back.
