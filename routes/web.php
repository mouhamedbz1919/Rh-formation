<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonnelController; // Importation du contrôleur une seule fois

// Route par défaut
Route::get('/', function () {
    return view('welcome');
});

// Route pour afficher la liste des personnels
Route::get('/personnel', [PersonnelController::class, 'index'])->name('index');

// Route pour afficher le formulaire de création d'un personnel
Route::get('/personnel/create', [PersonnelController::class, 'create'])->name('personnel.create');

// Route pour enregistrer les données envoyées via le formulaire
Route::post('/personnel', [PersonnelController::class, 'store'])->name('personnel.store');
