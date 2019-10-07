# lumen-api-swoole

This is a boilerplate for lumen 5.8. if you are using lumen to write REST api it will help you.

This demo use `dingo/api`  `tymon/jwt-auth` `swoole` and write some easy APIs and PHPUNIT.

## USEFUL LINK

- dingo/api [https://github.com/dingo/api](https://github.com/dingo/api)
- json-web-token(jwt) [https://github.com/tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth)
- transformer [fractal](http://fractal.thephpleague.com/)
- apidoc [apidocjs](http://apidocjs.com/)
- rest api guidance [jsonapi.org](http://jsonapi.org/format/)
- debug rest api [postman](https://www.getpostman.com/)
- php lint [phplint](https://github.com/overtrue/phplint)
- swoole [swoole](https://www.swoole.co.uk)
- a good article [http://oomusou.io/laravel/laravel-architecture](http://oomusou.io/laravel/laravel-architecture/)

## USAGE

```
$ composer install
$ cp .env.example .env
$ vim .env
        DB_*
            config  uration your database
	    JWT_SECRET
            php artisan jwt:secret
	    APP_KEY
            key:generate is abandoned in lumen, so do it yourself
            md5(uniqid())，str_random(32) etc.，maybe use jwt:secret and copy it

$ php artisan migrate
$ php artisan db:seed
$ generate api doc like this "apidoc -i app/Http/Controllers/Api/V1 -o public/apidoc"
```

## FAQ

<details>
  <summary>running with Docker</summary>

The `Dockerfile` has a container configuration do build and run this application with `Swoole`.

To build: `docker build -t <image-name> .`

To run: `docker run -d -p <host-port>:<swoole-http-port> -v $(pwd):/app --name <container-name> <image-name>`
</details>

<details>
  <summary>running without Docker</summary>

This project requires `swoole` module for PHP. See https://swoole.co.uk for more informations.

To run: `php artisan swoole:http start`
</details>

<details>
  <summary>about jwt</summary>

There is no session and auth guard in lumen 5.2, so attention `config/auth.php`. Also user model must implement `Tymon\JWTAuth\Contracts\JWTSubject`
</details>

<details>
 <summary>how to use mail</summary>

- composer require `illuminate/mail` and `guzzlehttp/guzzle`
- register email service in `bootstrap/app.php` or `some provider`
- add `mail.php` `services.php` in config, just copy them from laravel
- add `MAIL_DRIVER` in env
</details>

<details>
  <summary>how to user transformer </summary>

  transformer is a layer help you format you resource and their relationship.

</details>

<details>
  <summary>transformer data serizlizer </summary>

dingo/api use [Fractal](http://fractal.thephpleague.com/) to transformer resouses，fractal provider 3 serializer,Array,DataArray,JsonApi.more details at here [http://fractal.thephpleague.com/serializers/](http://fractal.thephpleague.com/serializers/)。DataArray is default.You can set your own serizlizer like this：

        see bootstrap/app.php
        $app['Dingo\Api\Transformer\Factory']->setAdapter(function ($app) {
            $fractal = new League\Fractal\Manager;
            // $serializer = new League\Fractal\Serializer\JsonApiSerializer();
            $serializer = new League\Fractal\Serializer\ArraySerializer();
            // $serializer = new App\Serializers\NoDataArraySerializer();
            $fractal->setSerializer($serializer);,
            return new Dingo\Api\Transformer\Adapter\Fractal($fractal);
        });

I think default DataArray is good enough.
</details>


## TODO

- [ ] tests with phpunit
- [ ] xdebug on Dockerfile

## License

[MIT license](http://opensource.org/licenses/MIT)
