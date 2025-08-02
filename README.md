## Installation using Laravel Sail

-   Run **composer install**
-   Run **php artisan sail:install** and select Mysql
-   Run **./vendor/bin/sail up -d**
-   Run **./vendor/bin/sail php artisan migrate**
-   Run **./vendor/bin/sail php artisan db:seed**
-   run **npm install**
-   run **npm run dev**
-   open http://localhost:8181 using your browser

## For non docker/Laravel Sail installation

-   Run **composer install**
-   Configure .env file. Remove APP_URL and APP_PORT and lastly update database credentials and APP_URL value to be equal to http://localhost
-   Run **php artisan migrate**
-   Run **php artisan db:seed**
-   Run **npm install**
-   Run **npm run dev**
-   open http://localhost using your browser
