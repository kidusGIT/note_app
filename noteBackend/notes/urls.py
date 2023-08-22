from django.urls import path

# IMPORT USER BUILT MODULES
from .views import noteList, noteDetail, updateNote, createNote, deleteNote

urlpatterns = [
    path('note-list', noteList, name='note-list'),
    path('note-list/<str:pk>', noteDetail, name='note-detail'),
    path('note-create', createNote, name='create-note'),
    path('note-update/<str:pk>', updateNote, name='update-note'),
    path('note-delete/<str:pk>', deleteNote, name='delete-note'),
]