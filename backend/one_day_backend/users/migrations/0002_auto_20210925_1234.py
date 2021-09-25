# Generated by Django 3.1.13 on 2021-09-25 03:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='birthday',
            field=models.CharField(default=1966, max_length=10, verbose_name='생일'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default='010-1234-5678', max_length=17, verbose_name='전화번호'),
            preserve_default=False,
        ),
    ]
