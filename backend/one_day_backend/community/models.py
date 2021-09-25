import os
import uuid

from django.contrib.auth import get_user_model
from django.db import models
from imagekit.models import ProcessedImageField
from model_utils.models import TimeStampedModel

User = get_user_model()


class Post(TimeStampedModel):
    """Default user for One day backend project."""

    category = models.SmallIntegerField(default=0)
    user = models.ForeignKey(
        User,
        related_name="posts",
        on_delete=models.SET_NULL,
        null=True,
    )

    title = models.CharField("게시글의 제목", max_length=200, null=False, blank=False)
    content = models.TextField("게시글의 내용", blank=False, default="")

    likes = models.ManyToManyField(User, related_name="like_posts", blank=True)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return f"Post ({self.id}) - {self.title}"

    @property
    def total_likes(self):
        return self.likes.count()

    @property
    def total_comments(self):
        return self.comments.count()

    def like_state(self, user):
        return bool(self.likes.filter(id=user.id).exists())

    def like_this_post(self, user):
        if self.like_state(user):
            self.likes.remove(user)
            return False
        else:
            self.likes.add(user)
            return True


def get_file_path(instance, filename):
    ext = filename.split(".")[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join("uploads/post_images", filename)


class PostImage(models.Model):
    image = ProcessedImageField(
        verbose_name="게시글의 이미지",
        upload_to=get_file_path,
        format="JPEG",
        options={"quality": 60},
        null=True,
        blank=True,
    )
    post = models.ForeignKey(
        Post,
        on_delete=models.SET_NULL,
        related_name="images",
        null=True,
        blank=True,
    )

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return f"PostImage ({self.id}) - {self.image.path}"


class PostComment(TimeStampedModel):
    user = models.ForeignKey(
        User,
        related_name="comments",
        on_delete=models.SET_NULL,
        null=True,
    )
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name="comments",
    )
    parent = models.ForeignKey(
        "self",
        related_name="re_comments",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    content = models.CharField("게시글의 댓글", blank=False, default="", max_length=500)

    likes = models.ManyToManyField(User, related_name="like_comments", blank=True)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return f"PostComment ({self.id})"

    @property
    def total_likes(self):
        return self.likes.count()

    @property
    def total_re_comments(self):
        return self.re_comments.count()

    def like_state(self, user):
        return bool(self.likes.filter(id=user.id).exists())

    def like_this_comment(self, user):
        if self.like_state(user):
            self.likes.remove(user)
            return False
        else:
            self.likes.add(user)
            return True
