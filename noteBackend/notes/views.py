from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
from .serilizer import NoteSerializer
from .models import Note

# get all user 
@api_view(['GET'])
def noteList(request):
    note = Note.objects.all()
    serilizer = NoteSerializer(note, many=True)
    return Response(serilizer.data)

#get detail note information
@api_view(['GET'])
def noteDetail(request, pk):
    note = Note.objects.get(id = pk)
    serilizer = NoteSerializer(note, many=False)
    return Response(serilizer.data)

# create note
@api_view(['POST'])
def createNote(request):
    serilizer = NoteSerializer(data=request.data)
    if serilizer.is_valid():
        serilizer.save()
    return Response(serilizer.data)

# update note
@api_view(['PUT'])
def updateNote(request, pk):
    note = Note.objects.get(id = pk)
    serilizer = NoteSerializer(instance=note, data=request.data)
    if serilizer.is_valid():
        serilizer.save()
    
    return Response(serilizer.data)

# delete note
@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id = pk)
    note.delete()
    return Response('Note is succsfully deleted!!')
 

