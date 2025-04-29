<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Personnel;
use Illuminate\Support\Facades\Storage;

class PersonnelController extends Controller
{
    public function index()
    {
        $personnels = Personnel::all();
        return view('personnel.index', compact('personnels'));
    }
    public function create()
    {
        // Retourner la vue 'personnel.create'
        return view('personnel.create');
    }
    public function store(Request $request)
    {
        // Validation des données
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'processus' => 'required|string|max:255',
            'date_naissance' => 'required|date',
        ]);


        // Créer un nouveau personnel dans la base
        Personnel::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'processus' => $request->processus,
            'date de naissance' => $request->date_naissance,
        ]);

        // Rediriger vers une autre page (par exemple la liste des personnels)
        return redirect()->route('index');
    }


}

