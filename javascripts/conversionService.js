modelUIDs = [
       "8d16fab3-279b-4b7c-8730-50964897de3a" //boeing full
]

async function startViewer() {
        const conversionServiceURI = "https://ssrconversionserver.techsoft3d.com";

        var viewer;

        let res = await fetch(conversionServiceURI + '/api/streamingSession');
        var data = await res.json();
        var endpointUriBeginning = 'ws://';

        if(conversionServiceURI.substring(0, 5).includes("https")){
                endpointUriBeginning = 'wss://'
        }

        await fetch(conversionServiceURI + '/api/enableStreamAccess/' + data.sessionid, { method: 'put', headers: { 'items': JSON.stringify(modelUIDs) } });

        viewer = new Communicator.WebViewer({
                containerId: "viewerContainer",
                endpointUri: endpointUriBeginning + data.serverurl + ":" + data.port + '?token=' + data.sessionid,
                model: "Hospital.ifc",
                // streamingMode: Communicator.StreamingMode.OnDemand,
                boundingPreviewMode: Communicator.BoundingPreviewMode.All,
                rendererType: Communicator.RendererType.Server
        });

        viewer.start();
        

        return viewer;

}

