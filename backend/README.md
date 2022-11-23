<h2 align="center">Видеохостинг на Django 3</h2>

### Пример проекта для django видеохостинга.
### Воспроизведение видео онлайн на django. 
### Видеоплеер django и просмотр видео на сайте.
### Api для ВидеоХостинга

## Старт

    pip install -r req.txt

    python manage.py runserver

## API Маршруты
    
    api/v1/video/  -- Allow: GET, POST, HEAD, OPTIONS
    api/v1/video/<int:pk>/ -- Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
    stream/<int:pk>/ вставлять этот путь в src видео
## Admin

    admin/
    username: admin
    password: admin

    
    




