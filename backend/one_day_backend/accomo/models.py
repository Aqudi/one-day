import os
import uuid

from django.contrib.auth import get_user_model
from django.db import models
from imagekit.models import ProcessedImageField
from model_utils.models import TimeStampedModel

User = get_user_model()


def get_file_path(instance, filename):
    ext = filename.split(".")[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join("uploads/post_images", filename)


class Accomo(TimeStampedModel):
    image = ProcessedImageField(
        verbose_name="게시글의 이미지",
        upload_to=get_file_path,
        format="JPEG",
        options={"quality": 60},
        null=True,
        blank=True,
    )
    title = models.CharField(
        max_length=30,
        null=True,
        blank=True,
    )
    location = models.CharField(
        max_length=200,
        null=True,
        blank=True,
    )
    rating = models.IntegerField(default=0, blank=True)
    price = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return f"PostImage ({self.id}) - {self.image.path}"
