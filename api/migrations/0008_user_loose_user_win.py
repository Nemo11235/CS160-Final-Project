# Generated by Django 4.0.3 on 2022-04-28 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_delete_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='loose',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='win',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
