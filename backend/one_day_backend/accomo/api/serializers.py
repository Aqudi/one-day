from rest_framework import serializers

from ..models import Accomo


class AccomoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accomo
        fields = "__all__"
