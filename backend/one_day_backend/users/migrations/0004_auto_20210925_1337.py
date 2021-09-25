# Generated by Django 3.1.13 on 2021-09-25 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210925_1235'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='native',
            field=models.BooleanField(blank=True, default=False, verbose_name='현지인인증'),
        ),
        migrations.AddField(
            model_name='user',
            name='nickname',
            field=models.CharField(default='허이ㅓㄹ미ㅏ얾', max_length=200, verbose_name='닉네임'),
            preserve_default=False,
        ),
    ]