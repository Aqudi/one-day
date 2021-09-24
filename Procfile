release: python manage.py migrate

web: gunicorn --pythonpath backend config.wsgi:application
