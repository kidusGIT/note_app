from django.db import models

# Create your models here.
class Note(models.Model):
    notes = models.TextField(null=True, blank=True, default='')
    createdAt = models.DateTimeField(auto_now_add=True, null=True)
    updatedAt = models.DateTimeField(auto_now=True, null=True)
    
    def __str__(self):
        return self.notes[0:40]
    
