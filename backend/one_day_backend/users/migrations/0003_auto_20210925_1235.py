# Generated by Django 3.1.13 on 2021-09-25 03:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210925_1234'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birthday',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='생일'),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone_number',
            field=models.CharField(blank=True, max_length=17, null=True, verbose_name='전화번호'),
        ),
    ]