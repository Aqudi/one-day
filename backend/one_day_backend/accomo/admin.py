from django.contrib import admin

from .models import Accomo


@admin.register(Accomo)
class AccomoAdmin(admin.ModelAdmin):
    class Meta:
        model = Accomo
