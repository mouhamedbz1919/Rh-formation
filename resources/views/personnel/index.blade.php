<!-- resources/views/personnel/index.blade.php -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Personnels</title>
    <style>
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

    <h1 style="text-align: center;">Liste des Personnels</h1>

    <!-- Tableau pour afficher les personnels -->
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Processus</th>
                <th>Date de Naissance</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($personnels as $personnel)
                <tr>
                    <td>{{ $personnel->nom }}</td>
                    <td>{{ $personnel->prenom }}</td>
                    <td>{{ $personnel->processus }}</td>
                    <td>{{ $personnel-> {'date de naissance'} }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>

