<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personnel extends Model
{
    use HasFactory;
    public $timestamps =false ;

    // Ajoute cette propriété pour permettre l'attribution de masse
    protected $fillable = [
        'nom',
        'prenom',
        'processus',
        'date de naissance',
    
    ];
}
