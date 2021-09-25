from django.contrib.auth import get_user_model
from django.core.paginator import Paginator
from rest_framework import serializers

from ..models import Post, PostComment, PostImage

User = get_user_model()


# Create
class PostImageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        exclude = ("post",)


class PostCommentCreateSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault(),
    )

    class Meta:
        model = PostComment
        exclude = ("likes",)


class PostCreateSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault(),
    )
    images = serializers.PrimaryKeyRelatedField(
        queryset=PostImage.objects.filter(post=None),
        required=False,
        many=True,
    )

    class Meta:
        model = Post
        exclude = ("likes",)


# Get
class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = ("image",)


class PostReCommentSerializer(serializers.ModelSerializer):
    total_likes = serializers.ReadOnlyField()
    like_state = serializers.SerializerMethodField()

    class Meta:
        model = PostComment
        exclude = ("likes",)

    def get_like_state(self, obj):
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        return obj.like_state(user)


class PostCommentSerializer(PostReCommentSerializer):
    re_comments = serializers.SerializerMethodField()

    class Meta:
        model = PostComment
        exclude = (
            "likes",
            "parent",
        )

    def get_re_comments(self, obj):
        queryset = obj.re_comments.all()
        paginator = Paginator(queryset, 5)
        request = self.context.get("request")
        serializer = PostReCommentSerializer(
            paginator.page(1),
            many=True,
            read_only=True,
            context={"request": request},
        )
        return serializer.data


class PostSerializer(serializers.ModelSerializer):
    total_likes = serializers.ReadOnlyField()
    like_state = serializers.SerializerMethodField()
    images = PostImageSerializer(many=True)
    comments = PostCommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        exclude = ("likes",)

    def get_like_state(self, obj):
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        return obj.like_state(user)

    def get_comments(self, obj):
        queryset = obj.re_comments.all()
        paginator = Paginator(queryset, 5)
        serializer = PostReCommentSerializer(
            paginator.page(1),
            many=True,
            read_only=True,
        )
        return serializer.data
