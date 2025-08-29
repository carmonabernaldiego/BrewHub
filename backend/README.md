# Guía de instalación: Backend

Sigue los pasos para configurar el Backend.

---

#### Requisitos:

Es necesario tener instalado lo siguiente en tu sistema:

-   **PHP** >v8.1.x
-   **Composer** >2.2.x
-   **MySQL**

---

#### Instalación:

1. **Clonar repositorio**  
   Abrir terminal y clonar proyecto:

    ```bash
    git clone https://github.com/carmonabernaldiego/BrewHub
    cd BrewHub/backend
    ```

2. **Instalar dependencias**  
   Ejecutar el comando composer para instalar dependencias:

    ```bash
    composer install
    ```

3. **Configurar archivo de entorno**  
   Copiar el archivo `.env.example` a `.env`:

    ```bash
    cp .env.example .env
    ```

    Configurar lo siguiente en el archivo `.env`:

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=DB
    DB_USERNAME=user
    DB_PASSWORD=password
    ```

4. **Generar clave de la aplicación**  
   Ejecutar el siguiente comando para generar la clave única de la aplicación:

    ```bash
    php artisan key:generate
    ```

5. **Ejecutar migraciones**  
   Crea las tablas necesarias en la base de datos y añade los primeros registros a la base de datos:

    ```bash
    php artisan migrate:fresh --seed
    ```

6. **Ejecutar el servidor local**  
   Para probar el back-end, inicia el servidor:

    ```bash
    php artisan serve
    ```

    El servidor estará disponible en [http://127.0.0.1:8000](http://127.0.0.1:8000).
