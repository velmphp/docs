---
outline: deep
---

# Velm

### Modular. Composable. Predictable.

Velm is a **model composition framework for Laravel** that allows multiple modules to safely extend and participate in the same Eloquent model — without inheritance, traits, or runtime magic.

It introduces a **compile-time model pipeline** that gives you the power of modularity while preserving Laravel’s familiar developer experience.

---

## Why Velm?

Laravel makes it easy to build applications —  
Velm makes it possible to **scale them without architectural debt**.

When applications grow, models tend to become:
- tightly coupled
- hard to reason about
- dangerous to extend across modules

Velm solves this by introducing **intentional composition** at the model layer.

---

## Core Ideas

### 🧱 Model Buckets
A **Model Bucket** represents a logical model (e.g. `Product`) and collects all participating definitions across modules.

Each module contributes its own definition — without overriding or conflicting with others.

---

### 🔗 Method Pipelines
Model methods are **compiled into ordered pipelines**.

Each module can:
- run logic before or after others
- call `super()` to continue the chain
- override behavior intentionally

No traits. No inheritance. No ambiguity.

---

### ⚙️ Compiled Proxies
Velm generates **real PHP model classes** at compile time.

These proxies:
- are namespaced
- are autoloaded at runtime
- contain zero reflection or runtime dispatch
- work seamlessly with Eloquent

What you run is what you wrote.

---

### 🚀 Runtime-Safe, Production-Ready
Velm:
- compiles lazily in development
- precompiles in production
- never writes to `vendor/`
- works with OPcache and Octane

No performance surprises.

---

## A Better Mental Model

> **Models don’t inherit behavior.  
> They *participate* in it.**

Velm gives each module a clear, predictable place in the model lifecycle — without leaking concerns across boundaries.

---

## Example

```php
// Modules/Sales/Models/Product.php
class Product
{
    public function approve()
    {
        Log::info('Sales approval');
        return $this->super();
    }
}
```

```php
// Modules/Accounting/Models/Product.php
class Product
{
    public function approve()
    {
        Log::info('Accounting approval');
        return $this->super();
    }
}
```

```php
$product->approve();
// → Sales approval
// → Accounting approval
```

The order is explicit.  
The behavior is predictable.

---

## Designed for Real Applications

Velm was built for:
- modular systems
- domain-driven design
- large Laravel codebases
- long-lived applications

It does not try to be clever —  
it tries to be **correct**.

---

## Get Started

---

## Philosophy

Velm is opinionated by design.

It values:
- clarity over convenience
- explicitness over magic
- composition over inheritance

If you’ve ever asked:
> *“Where should this logic really live?”*

Velm is for you.

---

<div style="margin-top: 3rem; opacity: 0.8">

**Velm** is open-source and actively evolving.  
Built with care for teams who care about architecture.

</div>
