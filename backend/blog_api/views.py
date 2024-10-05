from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, BasePermission
from rest_framework import viewsets
from rest_framework import filters 
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


class PostUserWritePermission(BasePermission):
    message = 'Gönderileri düzenlemek yalnızca yazara özeldir.'
    
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True   # get, options and head 
        
        return obj.author == request.user


class PostList(viewsets.ViewSet):
    permission_classes = [PostUserWritePermission]
    serializer_class = PostSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Post, slug=item)
    
    # Define Custom Queryset
    def get_queryset(self):
        return Post.objects.all()
    
    
   #  def list(self, request):
      #  serializer_class = PostSerializer(self.queryset, many=True)
      #  return Response(serializer_class.data)
    
   #  def retrieve(self, request, pk=None):
     #   post = get_object_or_404(self.queryset, pk=pk)
     #   serializer_class = PostSerializer(post)
     #   return Response(serializer_class.data)

"""
class PostDetail(generics.RetrieveUpdateDestroyAPIView, PostUserWritePermission):
    permission_classes = [PostUserWritePermission]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
"""


"""
Concrete View Classes

----------------------------------------
#CreateAPIView
Yalnızca oluşturma işlemleri için kullanılan uç noktalar içindir.

#ListAPIView
Model örneklerinden oluşan bir koleksiyonu temsil etmek için yalnızca okuma işlemleri için kullanılır.

#RetrieveAPIView
Tek bir model örneğini temsil etmek için yalnızca okuma işlemleri için kullanılır.

#DestroyAPIView
Tek bir model örneği için yalnızca silme işlemleri için kullanılır.

#UpdateAPIView
Tek bir model örneği için yalnızca güncelleme işlemleri için kullanılır.

#ListCreateAPIView
Model örneklerinden oluşan bir koleksiyonu temsil etmek için okuma ve yazma işlemleri için kullanılır.

#RetrieveUpdateAPIView
Tek bir model örneğini temsil etmek için okuma veya güncelleme işlemleri için kullanılır.

#RetrieveDestroyAPIView
Tek bir model örneğini temsil etmek için okuma veya silme işlemleri için kullanılır.

#RetrieveUpdateDestroyAPIView
Tek bir model örneğini temsil etmek için okuma-yazma-silme işlemleri için kullanılır.
"""