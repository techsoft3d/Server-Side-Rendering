hospitalCameras = [

    //home view 
    {
        "position": {
            "x": -36804.90524878874,
            "y": 71266.17035594565,
            "z": 34749.36808953367
        },
        "target": {
            "x": 41109.81923776456,
            "y": 102745.76085618719,
            "z": 16887.44670812786
        },
        "up": {
            "x": 0.1927723563675583,
            "y": 0.07788508370153654,
            "z": 0.9781476025413056
        },
        "width": 85911.09813950275,
        "height": 85911.09813950275,
        "projection": 0,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },
    //outside view 
    {
        "position": {
            "x": 89262.78412481527,
            "y": 78387.73229727754,
            "z": 33430.05795618719
        },
        "target": {
            "x": 84513.10618204686,
            "y": 82943.36922963831,
            "z": 31045.37106259091
        },
        "up": {
            "x": -0.24585950854704797,
            "y": 0.23581528491091033,
            "z": 0.9401830957102931
        },
        "width": 7000.000000000002,
        "height": 7000.000000000002,
        "projection": 1,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },
    //hvac 
    {
        "position": {
            "x": 53115.762261652315,
            "y": 124239.69816180327,
            "z": 29017.93597081994
        },
        "target": {
            "x": 59298.521005472765,
            "y": 121263.392897729,
            "z": 27634.06412315644
        },
        "up": {
            "x": 0.1781309214844992,
            "y": -0.08575007068464574,
            "z": 0.9802633830704182
        },
        "width": 7000,
        "height": 7000,
        "projection": 1,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },
    

    //stairs
    {
        "position": {
            "x": 34411.08731354417,
            "y": 94106.42177294883,
            "z": 8956.4303670191
        },
        "target": {
            "x": 38417.36992389011,
            "y": 99728.83251181974,
            "z": 7799.625660308086
        },
        "up": {
            "x": 0.09589994450791678,
            "y": 0.13458583187966294,
            "z": 0.986250401521154
        },
        "width": 6999.9999999999945,
        "height": 6999.9999999999945,
        "projection": 1,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    }
]

cementPlantCamers = [
    // cement plant initial view 4
    {
        "position": {
            "x": -17503384.630466778,
            "y": -7524978.240643781,
            "z": 7768966.1857431205
        },
        "target": {
            "x": 923653.5146274479,
            "y": -79971.93711757823,
            "z": 3544574.598545206
        },
        "up": {
            "x": 0.19277235636755832,
            "y": 0.07788508370153657,
            "z": 0.9781476025413056
        },
        "width": 20318201.63564544,
        "height": 20318201.63564544,
        "projection": 0,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },

    //wagon loading 5
    {
        "position": {
            "x": 829493.339896315,
            "y": 87801.3062941505,
            "z": 10502.697353863752
        },
        "target": {
            "x": 797594.7076137911,
            "y": 55902.67401190247,
            "z": 5761.289915463384
        },
        "up": {
            "x": -0.07391278508715228,
            "y": -0.07391278531998292,
            "z": 0.9945218953682733
        },
        "width": 45359.965029425126,
        "height": 45359.965029425126,
        "projection": 1,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },

    //cyclone-preheater 6
    {
        "position": {
            "x": 279975.6199722725,
            "y": 223855.0066163474,
            "z": 93324.77273613974
        },
        "target": {
            "x": 435424.8204907806,
            "y": 225221.61341427418,
            "z": 67310.81352635268
        },
        "up": {
            "x": 0.16504330133655853,
            "y": 0.0009878718531247431,
            "z": 0.9862858271277815
        },
        "width": 157616.7745823773,
        "height": 157616.7745823773,
        "projection": 1,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },

    //raw mill-ducting 7
    {
        "position": {
            "x": 556429.627455032,
            "y": 298844.20430986007,
            "z": 40172.384865953165
        },
        "target": {
            "x": 486698.8240129633,
            "y": 254864.7604054644,
            "z": 23907.87426144455
        },
        "up": {
            "x": -0.1768326555241417,
            "y": -0.08234285987288618,
            "z": 0.9807904288726693
        },
        "width": 84030.41556496364,
        "height": 84030.41556496364,
        "projection": 1,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },
];

function setView(val) {
    var cameraView;
    if(model_name == "Hospital"){
        cameraView = hospitalCameras[val]
    }
    else{
        cameraView = cementPlantCamers[val]
    }

    var camera = Communicator.Camera.construct(cameraView);
    hwv.getView().setCamera(camera, 500);

    if (val == 0) {
        hwv.operatorManager.set(Communicator.OperatorId.Navigate, 0);
    }
    else {
        hwv.operatorManager.set(Communicator.OperatorId.Navigate, 0);
        enableWalk();
    }

}

function snapToView(val) {
    var cameraView;
    if(model_name == "Hospital"){
        cameraView = hospitalCameras[val]
    }
    else{
        cameraView = cementPlantCamers[val]
    }
    if (val >= 0) {
        var camera = Communicator.Camera.construct(cameraView);
        hwv.getView().setCamera(camera, 500); // about as fast as this can go
    }
}

function enableWalk() {

    var walkModeOperator = hwv.operatorManager.getOperator(Communicator.OperatorId.WalkMode);
    var walkMode = 0;
    walkModeOperator.setWalkMode(walkMode);
    hwv.operatorManager.set(Communicator.OperatorId.WalkMode, 0);
}