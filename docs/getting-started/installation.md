## Installation

Install the package via Composer:

```bash
composer require velm/velm
```

After installation, run the configuration command:

```bash
php artisan velm:install
```
This will publish the configuration file and set up the necessary directories for your modules. It will also configure your application  to load local modules from the `modules/` directory, which is where you should create your modules.