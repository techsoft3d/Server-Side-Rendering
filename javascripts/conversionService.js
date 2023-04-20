let modelUIDs = [
       "8d16fab3-279b-4b7c-8730-50964897de3a", //hospital
        "08e15300-d587-462e-9b12-f496f4d7c6ab", //arm.prc
       //cement plant 
       "0f9033b6-fd93-4da6-b0db-52cd628139c3","b2fb3e72-8956-41d0-84e6-908d1b8ca5b0","59b2215b-05ba-4893-b1eb-4b427125f706","85470b02-3978-4afd-a705-2cd7d8528f2c","fd1ec7e7-88e2-464d-8b56-17aed529887f",
        "d35c4df6-d1da-4fee-bbc2-57e129763929","84c718eb-0782-4f82-8d3f-5f605436768e","20099adc-56c2-49d0-b110-9409a835c293","16b56d5d-4967-4e40-8329-6b0ea51195e2","2f0e33ba-ac58-4a21-8063-0e0f7b40c8d7",
        "543fb892-f426-4131-9a5d-67e42d47aa7a","bcfa0be0-a3d5-40d7-85e3-a1984b8edc6e","25724bfd-0beb-435a-89d7-ce4fbbc85263","75d7e7c4-4ae3-47c9-bf62-b4d40a3465f9","00c66f6b-114d-4941-b1ba-2a62ab0072dd",
        "fa11e342-318c-4782-9097-a822c8c1616e","6e562d53-9314-40f7-a78f-5270220a1b5b","e232bfdf-d878-40e8-9b67-7d56d3f50fa1","ea3efdcc-63a7-4372-b3a1-3f5f8850c3da"
]

    let modelnames = ["11-Pozzolana, Gypsum and Additive Storage.dwg","12-Coal Stacker-Reclaimer.dwg","18-Wagon Tippler.dwg",
    "19-Central Control Room and Main Gate.dwg","Raw Meal-Hoppers.dwg","Limestone - Stockpile.dwg","Kiln & Hot Air Duct.dwg",
"8-Clinker Silo.dwg","7-Cooler.dwg"];
    let modelnames2 = ["10-Cement Mill Department.dwg","13-Coal Mill Department.dwg","Cyclone Preheater.dwg",
  "Raw Mill, Ducting Complex and Gas Conditioning.dwg","17-Cement Wagon Loading.dwg",
    "16-Truck Loading.dwg","14-Cement Silos.dwg","15-Cement Packing Plant.dwg","9-Cement Mill Hoppers.dwg","4-c.dwg"];

async function startViewer(modelName) {
        const conversionServiceURI = "https://ssrconversionserver.techsoft3d.com";

        var viewer;

        let res = await fetch(conversionServiceURI + '/api/streamingSession');
        var data = await res.json();
        var endpointUriBeginning = 'ws://';

        if(conversionServiceURI.substring(0, 5).includes("https")){
                endpointUriBeginning = 'wss://'
        }

        await fetch(conversionServiceURI + '/api/enableStreamAccess/' + data.sessionid, { method: 'put', headers: { 'items': JSON.stringify(modelUIDs) } });

        switch (modelName) {
                case "Hospital":
                        modelName = `${modelName}.ifc`
                        break;
                case "mr1718-arm":
                        modelName = `${modelName}.prc`
                        break;
                default:
                        modelName = "_empty"
                        break;
        }
       
        viewer = new Communicator.WebViewer({
                containerId: "viewerContainer",
                endpointUri: endpointUriBeginning + data.serverurl + ":" + data.port + '?token=' + data.sessionid,
                model: modelName,
                boundingPreviewMode: Communicator.BoundingPreviewMode.All,
                rendererType: Communicator.RendererType.Server
        });
       

        viewer.start();
        

        return viewer;

}


function loadCementPlant(viewer){
        for (let i=0;i<modelnames.length;i++) {
                var modelnode = hwv.model.createNode("test");
                hwv.model.loadSubtreeFromModel(modelnode,modelnames[i]);
            }
            for (let i=0;i<modelnames2.length;i++) {
                var modelnode = hwv.model.createNode("test");
                var conf = new Communicator.LoadSubtreeConfig();
                let matrix = new Communicator.Matrix();
                matrix.setScaleComponent(25,25,25);
                hwv.model.setNodeMatrix(modelnode,matrix);
                conf.additonalMatrix = matrix;
                hwv.model.loadSubtreeFromModel(modelnode,modelnames2[i],conf);
            }
}
