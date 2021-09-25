from rest_framework.viewsets import ModelViewSet

from one_day_backend.accomo.models import Accomo

from .serializers import AccomoSerializer


class AccomoViewSet(ModelViewSet):
    model = Accomo
    serializer_class = AccomoSerializer
    queryset = Accomo.objects.all()
