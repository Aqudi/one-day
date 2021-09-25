from django.contrib.auth import get_user_model
from django.db.models.query import QuerySet
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.mixins import (
    CreateModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
)
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from one_day_backend.community.models import Post, PostComment, PostImage
from one_day_backend.serializers import CreateSerializer
from one_day_backend.viewsets import MultiSerializerGenericViewSet

from .serializers import (
    PostCommentCreateSerializer,
    PostCommentSerializer,
    PostCreateSerializer,
    PostImageCreateSerializer,
    PostReCommentSerializer,
    PostSerializer,
)

User = get_user_model()


class PostViewSet(
    CreateModelMixin,
    RetrieveModelMixin,
    ListModelMixin,
    UpdateModelMixin,
    MultiSerializerGenericViewSet,
):
    serializer_class = PostSerializer
    serializer_classes = {
        "like": CreateSerializer,
        "create": PostCreateSerializer,
    }
    queryset = Post.objects.all()

    @action(detail=True, methods=["POST"])
    def like(self, request, pk=None):
        """해당 포스트을 좋아요한 포스트 목록에 추가"""
        post = self.get_object()
        post.like_this_post(request.user)
        return Response(status=status.HTTP_200_OK, data={"status": "ok"})


class PostImageViewSet(
    CreateModelMixin,
    GenericViewSet,
):
    serializer_class = PostImageCreateSerializer
    queryset = PostImage.objects.all()

    def create(self, request, *args, **kwargs):
        """포스트에 이미지 추가하기

        이 API를 통해서 이미지를 업로드합니다.
        업로드한 이미지의 ID를 리스트에 담아서 Create합니다.
        """
        return super().create(request, *args, **kwargs)


class PostCommentViewSet(
    CreateModelMixin,
    RetrieveModelMixin,
    ListModelMixin,
    UpdateModelMixin,
    MultiSerializerGenericViewSet,
):
    serializer_class = PostCommentSerializer
    serializer_classes = {
        "like": CreateSerializer,
        "create": PostCommentCreateSerializer,
        "re_comment": PostCommentCreateSerializer,
        "re_comment_list": PostReCommentSerializer,
    }
    queryset = PostComment.objects.all()

    def get_queryset(self):
        """list일 때 대댓글 제거, re_comment는 re_comment 할 수 없도록 방지"""
        queryset = self.queryset
        if self.action in ["list", "re_comment", "re_comment_list"]:
            queryset = PostComment.objects.filter(parent=None)
        if isinstance(queryset, QuerySet):
            queryset = queryset.all()
        return queryset

    @action(detail=True, methods=["POST"])
    def like(self, request, pk=None):
        """PostCommentView like

        좋아요한 코멘트 목록에 추가
        """
        comment = self.get_object()
        comment.like_this_comment(request.user)
        return Response(status=status.HTTP_200_OK, data={"status": "ok"})

    @action(detail=True, methods=["POST"])
    def re_comment(self, request, pk=None, *args, **kwargs):
        """PostCommentView re_comment

        대댓글 달기
        """
        comment = self.get_object()
        data = request.data.dict()
        data["post"] = comment.post.id
        data["parent"] = comment.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    @action(detail=True, methods=["GET"])
    def re_comment_list(self, request, pk=None, *args, **kwargs):
        """PostCommentView re_comment_list

        대댓글 페이지네이션
        """
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
