from django.contrib import admin

from .models import Post, PostComment, PostImage


class PostImageAdmin(admin.StackedInline):
    model = PostImage


class PostCommentAdmin(admin.StackedInline):
    model = PostComment


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageAdmin, PostCommentAdmin]

    class Meta:
        model = Post


@admin.register(PostImage)
class PostImageAdmin(admin.ModelAdmin):
    pass


@admin.register(PostComment)
class PostCommentAdmin(admin.ModelAdmin):
    pass
