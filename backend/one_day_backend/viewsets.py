from rest_framework.viewsets import GenericViewSet


class MultiSerializerGenericViewSet(GenericViewSet):
    serializer_classes = {}

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action) or self.serializer_class
