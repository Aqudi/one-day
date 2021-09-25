from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.db.models.fields import BooleanField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    """Default user for One day backend project."""

    #: First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)
    first_name = None  # type: ignore
    last_name = None  # type: ignore
    birthday = CharField("생일", max_length=10, null=True, blank=True)
    phone_number = CharField("전화번호", max_length=17, null=True, blank=True)
    native = BooleanField("현지인인증", default=False, blank=True)
    nickname = CharField("닉네임", max_length=200, null=True, blank=True)

    def get_absolute_url(self):
        """Get url for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})
