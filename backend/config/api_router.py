from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from one_day_backend.community.api.views import (
    PostCommentViewSet,
    PostImageViewSet,
    PostViewSet,
)
from one_day_backend.users.api.views import UserViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("community/posts", PostViewSet)
router.register("community/comments", PostCommentViewSet)
router.register("community/images", PostImageViewSet)


app_name = "api"
urlpatterns = router.urls
