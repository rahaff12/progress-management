<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Faker\Provider\File;
use Illuminate\Http\Request;
use Google_Client;
use Google_Service_Drive;
use Illuminate\Support\Facades\Storage;
use League\Csv\Reader;
use Google_Service_Sheets;

class GoogleApiController extends Controller
{
    public function index()
    {
        $client = new Google_Client();
        putenv('GOOGLE_APPLICATION_CREDENTIALS=googleserviceworker.json');
        $client->useApplicationDefaultCredentials();
        $client->addScope(Google_Service_Drive::DRIVE);
        $driveService = new Google_Service_Drive($client);

        $response = $driveService->files->listFiles();
//        dd($response);
//        return 'hello world';

        $fileID = '1t8Zca1g87UciGYhUMTBIof3mJxbnEmlYnyP43MO-wkg';
        $response = $driveService->files->export($fileID, 'text/csv', array(
            'alt' => 'media'));
        $content = $response->getBody()->getContents();
//        dd($content);
        $csv = Reader::createFromString($content, 'r');
        $csv->setHeaderOffset(0);
        $records = $csv->getRecords();
//        dd($records);
        $newarray = array();

        foreach ($records as $value) {
            $newarray[] = $value;
        }
        $jsonData = json_encode($newarray);

        Storage::disk('local')->put('dataFromGoogle' . time() . '.json', json_encode($jsonData));

        $range = "myapi!A1:A2";


        return $jsonData;

    }

//    public function downloadJSONFile($jsonData){
//        $fileName = time() . '_datafile.json';
//        File::put(public_path('/upload/json/'.$fileName),$jsonData);
//        return Response::download(public_path('/upload/jsonfile/'.$fileName));

//    }

    public function update() {
        $client = new Google_Client();
        putenv('GOOGLE_APPLICATION_CREDENTIALS=googleserviceworker.json');
        $client->useApplicationDefaultCredentials();
        $client->addScope(Google_Service_Drive::DRIVE);
        $service = new Google_Service_Sheets($client);

        $fileID = '1t8Zca1g87UciGYhUMTBIof3mJxbnEmlYnyP43MO-wkg';

        $range = "A2:B2";
        $values = [
            ["ahmed", "Alghamdi"]
        ];
        $body = new \Google_Service_Sheets_ValueRange([
            'values'=> $values
        ]);
        $params = [
            'valueInputOption' => 'RAW'
        ];
        $result = $service->spreadsheets_values->update(
            $fileID,
            $range,
            $body,
            $params
        );
       return 'Updated .. !';
    }
}
