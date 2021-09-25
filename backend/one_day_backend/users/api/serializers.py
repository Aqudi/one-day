from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "username",
            "name",
            "url",
            "birthday",
            "phone_number",
            "native",
            "nickname",
        ]

        extra_kwargs = {
            "url": {"view_name": "api:user-detail", "lookup_field": "username"}
        }


class CustomRegisterSerializer(RegisterSerializer):
    name = serializers.CharField()
    birthday = serializers.CharField()
    phone_number = serializers.CharField()
    nickname = serializers.CharField()

    def custom_signup(self, request, user):
        user.name = self.validated_data.get("name", "")
        user.birthday = self.validated_data.get("birthday", "")
        user.phone_number = self.validated_data.get("phone_number", "")
        user.nickname = self.validated_data.get("nickname", "")
        user.save()
