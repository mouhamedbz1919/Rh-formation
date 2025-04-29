<!-- resources/views/personnel/create.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Ajouter un personnel</title>
</head>
<body>
    <h1>Ajouter un Personnel</h1>

    <form action="{{ route('personnel.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div>
            <label for="nom">Nom</label>
            <input type="text" name="nom" id="nom" required>
        </div>

        <div>
            <label for="prenom">Prénom</label>
            <input type="text" name="prenom" id="prenom" required>
        </div>

        <div>
            <label for="processus">Processus</label>
            <input type="text" name="processus" id="processus" required>
        </div>

        <div>
            <label for="date_naissance">Date de Naissance</label>
            <input type="date" name="date_naissance" id="date_naissance" required>
        </div>

        <button type="submit">Ajouter</button>
    </form>

</body>
</html>
