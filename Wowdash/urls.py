"""
URL configuration for Wowdash project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import logout


def handle_logout(request):
    if request.method == 'POST':
        logout(request)
        return redirect('aiwave-signin')
    return redirect('aiwave-signin')

urlpatterns = [
    path('', lambda request: redirect('/aiwave/')),
    path('admin/', admin.site.urls),
    path('aiwave/admin/', include('wowdash_app.urls')), # wowdash app
    path('aiwave/', include('aiwave.urls')), # AI Wave
    path('accounts/', include('allauth.urls')), # allauth
    path('social/', include('social_django.urls', namespace='social')), # social authentication Facebook
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = 'aiwave.views.pages.custom_404_view'
handler500 = 'aiwave.views.pages.custom_500_view'
