---
outline: deep
---

# Velm Examples for Developers

## Introduction

This page provides quick examples of how to use Velm in your Laravel applications. Each example focuses on a specific aspect of Velm's modular composition abilities.

## Module Composition
Velm allows you to compose modules together, enabling you to build complex applications with clear separation of concerns. For example, you can have a `Sales` module that defines a `Product` model, and an `Accounting` module that extends the `Product` model with additional fields and behavior. This promotes modularity and keeps your code organized. When you call methods on the composed model, Velm ensures that all relevant behavior from each module is executed in the correct order, allowing you to build up complex behavior across modules while keeping each module's code clean and focused on its specific concerns.

Modules are basically composer packages loaded either from a path or from the repository. Each module defines its dependencies in the composer.json file, and Velm will automatically resolve and load the modules in the correct order based on their dependencies. This allows you to easily manage and compose your modules without worrying about the loading order or conflicts between modules. You can also publish your modules as composer packages and share them with the community, allowing others to easily integrate your modules into their applications. This promotes code reuse and encourages collaboration within the Laravel ecosystem.

## Composing Models
Velm allows you to compose models across modules. For example, you can have a `Product` model in one module and extend it with additional fields and behavior in another module. This promotes separation of concerns and keeps your code organized. The beautiful part is that you can call methods on the composed model, and Velm will ensure that all the relevant behavior from each module is executed in the correct order.

```php
// Modules/Sales/Models/Product.php
use Velm\Core\Domain\BaseModel;
class Product extends BaseModel
{
    protected $fillable = ['name', 'base_price', 'approved_by_sales'];
    protected $casts = ['approved_by_sales' => 'boolean'];

    public function approve(\Velm\Models\Product $self)
    {
        Log::info('Sales approval');
        $self->approved_by_sales = true;
        return $self;
    }

    public function getPriceAttribute(\Velm\Models\Product $self)
    {
        return $self->base_price * 1.2; // Add sales tax
    }

    public function scopeOnlyActive($query)
    {
        return $query->where('active', true);
    }
}
```
__NOTE__:
- The `approve` method is a behavior that can be extended by other modules.
- The `getPriceAttribute` method is an accessor that modifies the price based on the base price. It can be accessed as `$product->price`, just like any other Eloquent accessor.
- The `scopeOnlyActive` method is a query scope that filters active products. You can use it like this: `Product::onlyActive()->get();` to retrieve only active products.
- The `fillable` and `casts` properties work as expected, allowing you to mass assign attributes and cast them to the appropriate types. When the model is extended by other modules, these properties will be merged, so you can add additional fillable fields and casts in the extending module without worrying about conflicts.
- Each method defines $self as the first parameter, which is the instance of the composed model. This allows you to access and modify the model's attributes and call other methods on it, ensuring that all behavior from each module is executed in the correct order when you call a method on the composed model. Since this is implied, you should omit it when calling the method, and Velm will handle passing the composed model instance to each method in the correct order. For example, when you call `$product->approve()`, Velm will execute the `approve` method from the Sales module first, and then any additional `approve` methods from other modules that extend it, passing the composed model instance to each method in turn. This allows you to build up complex behavior across modules while keeping each module's code clean and focused on its specific concerns.

```php
// Modules/Accounting/Models/Product.php
use Velm\Core\Domain\BaseModel;
class Product extends BaseModel
{
    protected $fillable = ['approved_by_accounting'];
    protected $casts = ['approved_by_accounting' => 'boolean']; 

    public function approve(\Velm\Models\Product $self)
    {
        Log::info('Add Accounting approval to the approval workflow');
        
        // Call the parent approve method to ensure all previous approvals are executed
        super()->approve($self);
        // Add accounting approval logic here
        $self->approved_by_accounting = true;
        return $self;
    }
}
```
__NOTE__:
- The `approve` method in the Accounting module extends the approval workflow by calling `super()->approve($self)`, which ensures that the `approve` method from the Sales module is executed first, and then adds its own logic for accounting approval. This allows you to build up complex behavior across modules while keeping each module's code clean and focused on its specific concerns. When you call `$product->approve()`, Velm will execute the `approve` method from the Sales module first, and then the `approve` method from the Accounting module, passing the composed model instance to each method in turn. This ensures that all relevant behavior from each module is executed in the correct order, and you can easily extend the behavior by adding more modules that extend the `Product` model and define their own `approve` method. The `fillable` and `casts` properties will also be merged, allowing you to add additional fillable fields and casts in the extending module without worrying about conflicts. This promotes separation of concerns and keeps your code organized, while still allowing you to build up complex behavior across modules.

```php
$product = new \Velm\Models\Product(['name' => 'Example Product', 'base_price' => 100]);
$product->saveOrFail();
// Approve the product, which will execute the approval workflow defined in both the Sales and Accounting modules
$product->approve();
// → Sales approval
// → Add Accounting approval to the approval workflow
```
__NOTE__:
- All models have a runtime namespace of `\Velm\Models`. Velm recommends that you use the `velm_model` helper when instantiating models, but you can also instantiate the class directly.

- When you call `$product->approve()`, Velm will execute the `approve` method from the Sales module first, logging "Sales approval", and then execute the `approve` method from the Accounting module, logging "Add Accounting approval to the approval workflow". This demonstrates how Velm ensures