<?php
    $recordsString = file_get_contents('db/records.json');
    // var_dump($recordsString);

    $records = json_decode($recordsString, true);
    // var_dump($records);

    header ('Content-Type: application/json');

    // echo json_encode($records);
    echo $recordsString;
?>